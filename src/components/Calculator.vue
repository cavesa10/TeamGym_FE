<template>
  <section id="Calculadora" class="containers" >
    <h1>CALCULADORA IMC</h1>
    <h2 id="subTitle">Ingresa los siguientes datos y conoce tu IMC</h2>
    <div class="container-perfil">
      <div class="screen-1">
          <div class="label2">
        <h2 class="label-data">Peso (Kg)</h2>
        <input type="text" class="input-data">
          </div>
        <div class="label2">
        <h2 class="label-data">Estatura (m)</h2>
        <input type="text" class="input-data">
            </div>
            <button class="button-registro" type="submit" id="enviar">
          Calcular
        </button>
      </div>

      <div class="screen-2">
        <vue-gauge
          :refid="'type-unique-id'"
          :options="{
            needleValue: value.vale,
            arcDelimiters: [25, 50, 75],
            arcColors: ['rgb(239,214,19)', '#04b579', 'orange', '#eb4848'],
            needleColor: 'white',
            outerNeedle: 'true',
            chartWidth: '400',
            rangeLabel: '',
          }"
        ></vue-gauge>
        <h2 class="letra-2-data-imc">
          <span>{{ imc }}</span>
        </h2>
      </div>

        <div class="screen-3">
        <table id="tbody">
          <tr>
            <th>Composicion corporal</th>
            <th>IMC</th>
          </tr>
          <tr>
            <td>Muy bajo</td>
            <td>Menos de 18.5</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18.5 – 24.9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>25.0 – 29.9</td>
          </tr>
          <tr>
            <td>Obesidad</td>
            <td>Más de 30.0</td>
          </tr>
        </table>
        </div>
    </div>
  </section>
</template>




<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
import Loading from "./../components/Loading.vue";
import VueGauge from "vue-gauge";
export default {
  name: "Perfil",
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  components: {
    Loading,
    VueGauge,
  },
  data: function () {
    return {
      username: "",
      email: "",
      name: "",
      last_name: "",
      edad: 0,
      frequencia_fisica: "",
      objetivo_usuario: "",
      estatura: 0,
      peso: 0,
      genero: "",
      plan_id: 0,
      imcs: [{}],
      imc: 0,
      loaded: false,

      genero: "",

      value: { vale: 45, label: "Normal" },
    };
  },
  methods: {
    getData: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        this.$router.push({ name: "Home" });
        return;
      }
      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`https://teamgym-be.herokuapp.com/user/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          this.username = result.data.username;
          this.email = result.data.email;
          this.name = result.data.name;
          this.last_name = result.data.last_name;
          this.edad = this.calcularEdad(result.data.fecha_nacimiento);
          this.frequencia_fisica = result.data.frequencia_fisica;
          this.objetivo_usuario = result.data.objetivo_usuario;
          this.estatura = result.data.estatura;
          this.peso = result.data.peso;
          this.genero = result.data.genero;
          this.plan_id = result.data.plan_id;
          this.imcs = result.data.imc;
          this.imc = this.ultimoImc(result.data.imc);
          this.value = this.grafica(this.imc);
          this.loaded = true;
        })
        .catch((error) => {
          alert("Error al cargar datos");
          return;
        });
    },
    verifyToken: function () {
      return axios
        .post(
          "https://teamgym-be.herokuapp.com/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          alert("Sesión caducada");
          this.$emit("logOut");
          this.$router.push({ name: "Home" });
          return;
        });
    },
    calcularEdad: function (fecha_nacimiento) {
      var hoy = new Date();
      var nacimiento = new Date(fecha_nacimiento);
      nacimiento = new Date(
        nacimiento.setMinutes(
          nacimiento.getMinutes() + nacimiento.getTimezoneOffset()
        )
      );
      var edad = hoy.getFullYear() - nacimiento.getFullYear();
      var m = hoy.getMonth() - nacimiento.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
      }
      return edad;
    },
    ultimoImc: function (imc) {
      return imc[imc.length - 1].imc_value;
    },
    grafica: function (imc) {
      if (imc <= 18.5) {
        return { vale: 12.5, label: "" };
      }
      if (imc > 18.5 && imc <= 24.9) {
        return { vale: 37.5, label: "" };
      }
      if (imc >= 25 && imc <= 29.9) {
        return { vale: 62.5, label: "" };
      } else {
        return { vale: 87.5, label: "" };
      }
    },
    eliminarCuentaConfirmada: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        alert("Sesión caducada");
        this.$emit("logOut");
        this.$router.push({ name: "Home" });
        return;
      }
      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .delete(`https://teamgym-be.herokuapp.com/user/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          localStorage.clear();
          this.cuentaEliminadaAlert();
          return;
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    },
    eliminarCuentaAlert() {
      this.$swal
        .fire({
          title: "¿Está seguro de eliminar su cuenta?",
          text: "Una vez eliminada, no podrá recuperarla",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#04b579",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar",
          cancelButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.value) {
            this.eliminarCuentaConfirmada();
          }
        });
    },
    cuentaEliminadaAlert() {
      this.$swal
        .fire({
          icon: "success",
          title: "Cuenta eliminada",
          text: "Presione Ok para continuar",
          background: "rgb(255, 254, 254)",
          confirmButtonColor: "#04b579",
        })
        .then(() => {
          this.$router.push({ name: "Home" });
          this.$emit("logOut");
        });
    },
  },

  created: async function () {
    this.getData();
  },
};
</script>






<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

h1{
    color: #fff;
    font-size: 80px;
}

#subTitle{
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
  text-align: center;
  font-size: 30px;
  margin-top: -30px;
  margin-bottom: 120px;
}

span {
    color: #04b579;
}
.containers {
    margin: 150px 9% 150px 9%;
}

.container-perfil {
    display: flex;
    width: 100%;
}

.screen-1 {
    background-color: rgba(66, 68, 70, 0.397);
    width: 33%;
    height: 500px;
    flex-direction: column;
    border-radius: 30px 30px 30px 30px;
    border: 6px solid rgb(38, 40, 41);  
}

.screen-2 {
    background-color: rgba(66, 68, 70, 0.397);
    border: 6px solid rgb(38, 40, 41);
    border-radius: 30px 30px 30px 30px;
    width: 33%;
    height: 500px;
    font-family: "Orbitron", sans-serif;
    color: #04b579;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    
}

.screen-3 {
    background-color: rgba(66, 68, 70, 0.397);
    border: 6px solid rgb(38, 40, 41);
    border-radius: 30px 30px 30px 30px;
    width: 33%;
    height: 500px;
    font-family: "Orbitron", sans-serif;
    font-size: 25px;
    display: flex;
    flex-direction:column;
}

.button-registro {
  background-color: #04b579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 50%;
  height: 50px;
  margin-top: 120px;
}
.button-registro:hover {
  cursor: pointer;
  background-color: #29c08e;
}

.label-data{
    color: #29c08e;
    font-family: "Orbitron", sans-serif;
}
    
.input-data:focus{
     outline: none;   
    }

.input-data{
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 300px;
    font-size: 25px;
    text-align: center;
}

.label2{
    margin-top: 70px;  
}



#tbody {
    font-family: "Orbitron", sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 95%;
   
   
}

#tbody td,
#tbody th {
  padding: 8px;
}

#tbody tr:hover {
  background-color: #ddd;
  cursor: default;
}

#tbody th {
  text-align: center;
  background-color: #04b579;
  color: white;
  font-size: 23px;
  height: 40px;
}

#tbody td {
  color: #fff;
  font-size: 19px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.letra-2-data-imc {
  margin-top: -130px;
}


</style>
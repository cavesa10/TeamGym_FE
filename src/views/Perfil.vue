<template>
  <section class="containers">
    <div v-if="loaded" class="container-perfil">
      <div class="screen-1">
        <div>
        <img v-if="genero=='Masculino'" class="img-profile-man" src="../assets/image/perfil_man.png" />
        <img v-if="genero=='Femenino'" class="img-profile-man" src="../assets/image/perfil_woman.png" />
        <img v-if="genero=='Prefiero no decirlo'" class="img-profile-man" src="../assets/image/perfil_other.png" />
        <h2 class="letra">Hola <span>{{name}}</span></h2>
        <router-link  to="/Perfil/Editar"><img class="pencil-edit" src="../assets/image/edit_pencil.png" alt="editar"></router-link>
        <router-link to="/Perfil/Editar"><img class="delete-account" src="../assets/image/delete_account.png" alt="editar"></router-link>
        </div>
        <div class="username">
          <div class="username-basic">
            <h2 class="letra-2-data">Usuario</h2>
            <span class="letra-3">{{ username }}</span>
            <h2 class="letra-2-data">Correo</h2>
            <span class="letra-3">{{ email }}</span>
            <h2 class="letra-2-data">Nombres</h2>
            <span class="letra-3">{{ name }}</span>
            <h2 class="letra-2-data">Apellidos</h2>
            <span class="letra-3">{{ last_name }}</span>
          </div>
          <div class="username-basic">
            <h2 class="letra-2-data">Frecuencia Física</h2>
            <span class="letra-3">{{ frequencia_fisica }}</span>
            <h2 class="letra-2-data">Objetivo</h2>
            <span class="letra-3">{{ objetivo_usuario }}</span>
            <h2 class="letra-2-data">Genero</h2>
            <span class="letra-3">{{ genero }}</span>
            <h2 class="letra-2-data">Plan</h2>
            <span class="letra-3">{{ plan_id }}</span>
          </div>
        </div>
          <div class="username-edit">
            <p></p>
          </div>
        
        <div class="imcData">
          <div>
            <h2 class="letra-2-data">Peso</h2>
            <h2 class="letra-2">{{ peso }} Kg</h2>
          </div>
          <div>
            <h2 class="letra-2-data">Estatura</h2>
            <h2 class="letra-2">{{ estatura }} m</h2>
          </div>
          <div>
            <h2 class="letra-2-data">Edad</h2>
            <h2 class="letra-2">{{ edad }}</h2>
          </div>
        </div>
      </div>
      <div class="screen-2">
        <vue-gauge
          :refid="'type-unique-id'"
          :options="{
            needleValue: value.vale,
            arcDelimiters: [33, 66],
            arcColors: ['rgb(239,214,19)', '#04b579', '#eb4848'],
            centralLabel: value.label,
            needleColor: 'white',
            outerNeedle: 'true',
            chartWidth: '400',
            rangeLabel: '',
          }"
        ></vue-gauge>
        <h2 class="letra-2-data-imc"><span>{{ imc }}</span></h2>
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
        <router-link to="/Perfil/MiPlan" class="irplan">Mi Plan</router-link>
      </div>
    </div>
  </section>
  <section v-if="!loaded" class="container-load">
    <div>
      <Loading></Loading>
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

      genero: '',

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
    grafica: function (imc) {;
      if (imc <= 18.5) {
        return { vale: 15, label:"" };
      }
      if (imc > 18.5 && imc <= 24.9) {
        return { vale: 50, label:""};
      }
      if(imc >=25 && imc <= 29.9){
        return { vale: 70, label:""};

      } else {
        return { vale: 90, label:""};
      }
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
span {
  color: #04b579;
}
.containers {
  margin: 150px 9% 0 9%;
}
.container-load {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-perfil {
  display: flex;
}
.screen-1 {
  background-color: rgba(66, 68, 70, 0.397);
  width: 56%;
  flex-direction: column;
  border-radius: 30px 30px 30px 30px;
}

#tbody {
  font-family: "Orbitron", sans-serif;
  border-collapse: collapse;
  width: 75%;
  margin-top: 160px;
  border-radius: 5px 5px 0px 0px !important;
}

#tbody td, #tbody th {
  padding: 8px;
}

#tbody tr:hover {background-color: #ddd;}

#tbody th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04b579;
  color: white;
  font-size: 23px;
}

#tbody td{
  color: #fff ;
  font-size: 19px;
  background-color: rgba(66, 68, 70, 0.397);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


@keyframes pulsate {
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #04b579,
      0 0 80px #04b579, 0 0 90px #04b579, 0 0 100px #04b579, 0 0 150px #04b579;
  }

  0% {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #04b579,
      0 0 45px #04b579, 0 0 55px #04b579, 0 0 70px #04b579, 0 0 80px #04b579;
  }
}
.screen-2 {
  width: 44%;
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}

.username {
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 30px 30px 0px 0px;
}
.imcData {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgba(66, 68, 70, 0.397);
  border-radius: 0px 0px 30px 30px;
  margin-top: 0px;
}
.username-basic {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.pencil-edit{
  background-color: #04b579;
  width: 35px;
  border-radius: 50%;
}

.pencil-edit:hover{
  background-color: #1ed196;
  cursor: pointer;
}

.irplan{
background-color: #04b579;
width: 180px;
height: 45px;
border-radius: 30px;
color: #fff;
margin-top: 100px;
text-decoration: none;
font-size: 32px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.irplan:hover{
  background-color: #2ce0a4;
}

.delete-account{
  background-color: #eb4848;
  width: 35px;
  border-radius: 50%;
  margin-left: 10px;
}

.delete-account:hover{
  background-color: #e95e5e;
  cursor: pointer;
}
.letra {
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 20px;
}
.letra-2 {
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 25px;
}

.letra-3{
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 15px;
}

.letra-2-data {
  color: rgb(255, 255, 255);
}
.letra-2-data-imc{
margin-top: -130px;
}
#informe {
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 25px;
}


.img-profile-man {
  width: 150px;
  height: 150px;
}
#img-2 {
  width: 200px;
  height: 200px;
}
</style>
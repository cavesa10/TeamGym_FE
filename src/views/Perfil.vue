<template>
  <section class="containers">
    <div v-if="loaded" class="container-perfil">
      <div class="screen-1">
        <img class="img-profile-man" src="../assets/image/man.png" />
        <div class="username">
          <div class="username-basic">
            <h2 class="letra">Usuario</h2>
            <span>{{ username }}</span>
            <h2 class="letra">Correo</h2>
            <span>{{ email }}</span>
            <h2 class="letra">Nombres</h2>
            <span>{{ name }}</span>
            <h2 class="letra">Apellidos</h2>
            <span>{{ last_name }}</span>
          </div>
          <div class="username-basic">
            <h2 class="letra">Frecuencia Física</h2>
            <span>{{frequencia_fisica}}</span>
            <h2 class="letra">Objetivo</h2>
            <span>{{objetivo_usuario}}</span>
            <h2 class="letra">Genero</h2>
            <span>{{genero}}</span>
            <h2 class="letra">Plan</h2>
            <span>{{plan_id}}</span>
          </div>
        </div>
        <h2 id="informe">Informe plan</h2>
        <div class="imcData">
          <div>
            <h2 class="letra-2">Peso </h2>
            <h2 class="letra-2-data">{{peso}} <span>Kg</span> </h2>
          </div>
          <div>
            <h2 class="letra-2">Estatura:</h2>
            <h2 class="letra-2-data"> {{estatura}} <span>m</span> </h2>
          </div>
          <div>
            <h2 class="letra-2">Edad</h2>
            <h2 class="letra-2-data">{{edad}}</h2>
          </div>
        </div>
      </div>
      <div class="divisor"></div>
      <div class="screen-2">
        <img id="img-2" src="../assets/image/ejercicioProfile.png" />
        <h2>Imc actual: {{imc}}<!--dato desde la base de datos js--></h2>
        <h2>Tu objetivo: {{objetivo_usuario}} <!--bd js--></h2>
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
export default {
  name: "Account",
  components: {
    Loading,
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
      imc: [{}],
      loaded: false,
    };
  },
  methods: {
    getData: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
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
          this.imc = this.ultimoImc(result.data.imc)
          this.loaded = true;
          console.log(result.status);
          console.log(result);
          console.log();
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    verifyToken: function () {
      return axios
        .post(
          "https://teamgym-be.herokuapp.com/user/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    calcularEdad: function (fecha_nacimiento) {
      var hoy = new Date();
      var nacimiento = new Date(fecha_nacimiento);
      var edad = hoy.getFullYear() - nacimiento.getFullYear();
      var m = hoy.getMonth() - nacimiento.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
      }
      return edad;
    },
    ultimoImc: function(imc){
      return imc[imc.length -1].imc_value
    }
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
  color: rgb(68, 212, 68);
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
  background-color: rgb(38, 40, 41);
  width: 60%;
  flex-direction: column;
}
.divisor {
  font-size: 6.2rem;
  animation: pulsate 1.5s infinite alternate;
  border: 0.01rem solid #fff;

  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.2rem #69fe13,
    0 0 0.4rem #69fe13, 0 0 0.4rem #69fe13, inset 0 0 0.3rem #69fe13;
}

@keyframes pulsate {
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #69fe13,
      0 0 80px #69fe13, 0 0 90px #69fe13, 0 0 100px #69fe13, 0 0 150px #69fe13;
  }

  0% {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #69fe13,
      0 0 45px #69fe13, 0 0 55px #69fe13, 0 0 70px #69fe13, 0 0 80px #69fe13;
  }
}
.screen-2 {
  width: 40%;
  font-family: "Orbitron", sans-serif;
  color: rgb(68, 212, 68);
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.username {
  width: 100%;
  height: auto;
  background-color: rgb(38, 40, 41);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}
.imcData {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.username-basic {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.letra {
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 20px;
}
.letra-2 {
  font-family: "Orbitron", sans-serif;
  color: rgb(68, 212, 68);
  font-size: 25px;
}

.letra-2-data {
  color: rgb(255, 255, 255);
}
#informe {
  font-family: "Orbitron", sans-serif;
  color: rgb(68, 212, 68);
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
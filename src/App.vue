<template>
  <header>
    <div class="container nav-logo">
      <a href="#" class="logo"
        ><img src="../src/assets/image/Team_Green.png" alt="Logo TeamGym"
      /></a>
      <nav class="nav" >
        <ul>
          <li>
            <router-link v-if="!is_auth" to="/" id="words"  @click="scrollInto('Inicio')" >Inicio</router-link>
          </li>
          <li>
            <router-link v-if="!is_auth" to="/" id="words"  @click="scrollInto('Funcionalidades')"
              >Funcionalidades</router-link
            >
          </li>
          <li>
            <router-link v-if="!is_auth" to="/" id="words"  @click="scrollInto('Calculadora')"
              >Calculadora</router-link
            >
          </li>
          <li>
            <router-link v-if="!is_auth" to="/" id="words" @click="scrollInto('Planes')" >Planes</router-link>
          </li>
          <li>
            <router-link v-if="!is_auth" to="/Registro"
              >Registrarse</router-link
            >
          </li>
          <li>
            <router-link v-if="!is_auth" to="/LogIn"
              >Iniciar Sesión</router-link
            >
          </li>
          <li>
            <router-link v-if="is_auth" to="/Perfil">Mi Perfil</router-link>
          </li>
          <li>
            <router-link v-if="is_auth" to="/Perfil/MiPlan">Mi Plan</router-link>
          </li>
          <li>
            <router-link v-if="is_auth" v-on:click="logOut" to="/"
              >Cerrar Sesión</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="main-component">
    <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
      v-on:logOut="logOut"
    ></router-view>
  </div>
</template>




<script>
import "./assets/css/global.css";

export default {
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  data: function () {
    return {
      is_auth: false,
    };
  },
  components: {},

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
    },
    logOut: function () {
      localStorage.clear();
      this.verifyAuth();
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      this.$router.push({ name: "Perfil" });
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      this.showAlertExito();
      this.completedLogIn(data);
    },
    showAlertExito() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Presione Ok para continuar",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    scrollInto(elementId){
      setTimeout(() => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({behavior: "smooth"});
      }, 100);

    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>




<style>
body {
  background-color: rgb(38, 40, 41);

  --fondo-black-principal: rgb(38, 40, 41);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
}

header a {
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}

.nav-logo {
  background-color: 04b579;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 100%;
  margin: 0 auto;
  background-color: #04b579;
}
.logo img {
  width: 15%;
  margin-left: -90px;
}

.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav ul li {
  display: inline-block;
}

.nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.1s linear;
}

.nav ul li a:hover {
  color: #dbdbdb;
}
</style>



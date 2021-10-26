<template>
  <section class="section-login">
    <form
      v-on:submit.prevent="processLogInUser"
      class="form-login"
      autocomplete="on"
    >
      <h1>Iniciar Sesión</h1>
      <div class="label-form">
        <div class="input-form">
          <input
            class="icon-email"
            v-model="user.username"
            type="text"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div class="input-form">
          <input
            class="icon-pass"
            v-model="user.password"
            type="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
      </div>
      <div>
        <button class="button-design" type="submit">Ingresar</button>
        <span class="loading" v-if="loading">
          <div class="loadingio-spinner-spinner-nwl5j7qfhjl">
            <div class="ldio-qdyn8sbo9s">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </span>
        <p>¿No tienes una cuenta?</p>
        <router-link to="/Registro"><strong>Registrarse</strong></router-link>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import Loading from "./../components/Loading.vue";
export default {
  name: "LogIn",
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  components: {
    Loading,
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    showAlertErrorCredencial() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrecta",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    showAlertErrorServidor() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al iniciar sesión, intente más tarde",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    processLogInUser: function () {
      this.loading = true;
      axios
        .post("https://teamgym-be.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          this.loading = false;
          if (
            error.response.data.detail ===
            "No active account found with the given credentials"
          ) {
            this.showAlertErrorCredencial();
          } else {
            alert(error);
          }
        });
    },
    ifLogin: function () {
      if (
        localStorage.getItem("token_access") !== null ||
        localStorage.getItem("token_refresh") !== null
      ) {
        this.$router.push({ name: "Perfil" });
        return;
      }
    },
  },
created: function () {
    this.ifLogin();
  },
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.loading {
  position: absolute;
  margin-top: 25px;
}

.section-login {
  margin-top: 150px;
}
.form-login {
  background-color: rgb(255, 254, 254);
  width: 100%;
  max-width: 650px;
  height: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
h1 {
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 60px;
  margin-top: -200px;
  margin-top: 0%;
}
.input-form {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-login input {
  width: 300px;
  background-color: #e6e6e6;
  border-radius: 10px;
  border: none;
  height: 20px;
  padding: 10px 50px;
  margin-bottom: 10px;
  font-size: 12px;
  margin-top: 20px;
}

.icon-email,
.icon-pass:focus {
  outline: none;
}

.icon-email {
  background-image: url(../assets/image/correo.png);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: 4.5% 65%;
}

.icon-pass {
  background-image: url(../assets/image/contrasena.png);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: 4% 65%;
}

.button-design {
  background-color: #04b579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 100%;
  height: 50px;
}
.form-login button:hover {
  cursor: pointer;
  background-color: #29c08e;
}

.link-signUp {
  text-decoration: none;
  color: #000;
  margin-top: -10px;
}

.button-design {
  margin-top: 25%;
}
@keyframes ldio-qdyn8sbo9s {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.ldio-qdyn8sbo9s div {
  left: 47px;
  top: 24px;
  position: absolute;
  animation: ldio-qdyn8sbo9s linear 1s infinite;
  background: #69fe13;
  width: 6px;
  height: 12px;
  border-radius: 3px / 6px;
  transform-origin: 3px 26px;
}
.ldio-qdyn8sbo9s div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #69fe13;
}
.ldio-qdyn8sbo9s div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #69fe13;
}
.loadingio-spinner-spinner-nwl5j7qfhjl {
  width: 84px;
  height: 84px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio-qdyn8sbo9s {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.84);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-qdyn8sbo9s div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
<template>
  <section class="section-login">
    <form v-on:submit.prevent="processLogInUser" class="form-login" autocomplete="on">
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
        <p>¿No tienes una cuenta?</p>
        <router-link to="/Registro"><strong>Registrarse</strong></router-link>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    showAlertError() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrecta",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579"
      });
    },
    processLogInUser: function () {
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
          if(error.response.data.detail="No active account found with the given credentials")
            this.showAlertError()
        });
    },
  },
};
</script>




<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

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
</style>
<template>
  <div class="main">
    <div class="registro">
      <br />
      <h1>REGISTRESE</h1>
      <br />
      <form v-on:submit.prevent="processSignUp" autocomplete="off">
        <div class="container-form">
          <div class="personal-data">
            <label for="username">Usuario</label>
            <input
              v-model="user.username"
              type="text"
              id="username"
              name="username"
              autocomplete="nope"
              required
            />
            <label for="password">Contraseña</label>
            <input
              v-model="user.password"
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              required
            />
            <label for="email">Correo</label>
            <input
              v-model="user.email"
              type="email"
              id="email"
              name="email"
              required
            />
            <label for="nombres">Nombres</label>
            <input
              v-model="user.name"
              type="text"
              id="name"
              name="name"
              required
            />
            <label for="last_name">Apellidos</label>
            <input
              v-model="user.last_name"
              type="text"
              id="last_name"
              name="last_name"
              required
            />
            <label for="fecha_nacimiento">Fecha de Nacimiento</label>
            <input
              v-model="user.fecha_nacimiento"
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              :max="fecha_hoy"
              required
            />
          </div>
          <div class="metric-data">
            <label for="frequencia_fisica">Frecuencia Física</label>
            <select
              v-model="user.frequencia_fisica"
              class="select-registro"
              id="frequencia_fisica"
              name="frequencia_fisica"
              required
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Intensa">Intensa</option>
            </select>
            <label for="objetivo_usuario">Tu objetivo</label>
            <select
              v-model="user.objetivo_usuario"
              class="select-registro"
              id="objetivo_usuario"
              name="objetivo_usuario"
              required
            >
              <option value="Bajar de peso">Bajar de peso</option>
              <option value="Mantener peso">Mantener peso</option>
              <option value="Aumentar masa corporal">
                Aumentar masa muscular
              </option>
            </select>
            <label for="estatura">Estura (metros)</label>
            <input
              v-model="user.estatura"
              type="number"
              id="estatura"
              name="estatura"
              step="0.01"
              min="0.15"
              max="3"
              required
            />
            <label for="peso">Peso (Kg)</label>
            <input
              v-model="user.peso"
              type="number"
              id="peso"
              name="peso"
              step="0.1"
              min="1.0"
              max="600"
              required
            />
            <label for="genero">Genero</label>
            <select
              v-model="user.genero"
              class="select-registro"
              id="genero"
              name="genero"
              required
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            </select>
            <label for="plan_id">Plan</label>
            <select
              v-model="user.plan_id"
              class="select-registro"
              id="plan_id"
              name="plan_id"
              required
            >
              <option value="1">Básico</option>
              <option value="2">Intermedio</option>
              <option value="3">Avanzado</option>
            </select>
          </div>
        </div>
        <br />
        <button class="button-registro" type="submit" id="enviar">
          Registrarse
        </button>
                <span class="loading" v-if="loading">
          <div class="loadingio-spinner-spinner-nwl5j7qfhjl"><div class="ldio-qdyn8sbo9s">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
        </span>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Registro",
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        name: "",
        last_name: "",
        fecha_nacimiento: "",
        frequencia_fisica: "",
        objetivo_usuario: "",
        estatura: 1,
        peso: 1,
        genero: "",
        plan_id: 0,
      },
      fecha_hoy: new Date().toISOString().split("T")[0],
      loading: false,
    };
  },

  methods: {
    showAlertErrorUsuarioExistente() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario ingresado ya existe.",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    processSignUp: function () {
      this.loading = true;
      axios
        .post("https://teamgym-be.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          this.loading = false;
          if (
            error.response.data.username[0] ===
            "user with this Username already exists."
          ) {
            this.showAlertErrorUsuarioExistente();
          } else {
            alert(error);
          }
        });
    },
  },
};
</script>




<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
input {
  box-sizing: border-box;
}
.main {
  margin: 150px 0 100px 0;
}

.registro {
  background-color: rgb(255, 254, 254);
  color: rgb(39, 41, 41);
  width: 100%;
  max-width: 650px;
  height: 670px;
  margin: 0 auto;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
}

.container-form {
  display: flex;
  justify-content: space-around;
}

.personal-data {
  width: 40%;
}
.middle {
  width: 14%;
}

.metric-data {
  width: 40%;
}

input:focus {
  outline-color: #04b579;
}

select:focus {
  outline-color: #04b579;
}

.registro input {
  background-color: #e6e6e6;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 30px;
  font-size: 12px;
  margin: 0.5rem 0 0.5rem 0;
  margin-bottom: 20px;
  padding: 0 1rem;
}

.registro select {
  background-color: #e6e6e6;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 30px;
  font-size: 12px;
  margin: 0.5rem 0 0.5rem 0;
  margin-bottom: 20px;
  padding: 0 1rem;
}

h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: #29c08e;
  text-align: initial;
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
}
.button-registro:hover {
  cursor: pointer;
  background-color: #29c08e;
}

h1 {
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 40px;
  margin-top: -200px;
  margin-top: 0%;
}

.content-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes ldio-qdyn8sbo9s {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.loading{
  position: absolute;
}
.ldio-qdyn8sbo9s div {
  left: 47px;
  top: 4px;
  position: absolute;
  animation: ldio-qdyn8sbo9s linear 1s infinite;
  background: #69fe13;
  width: 6px;
  height: 12px;
  border-radius: 3px / 6px;
  transform-origin: 3px 26px;
}.ldio-qdyn8sbo9s div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #69fe13;
}.ldio-qdyn8sbo9s div:nth-child(12) {
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
.ldio-qdyn8sbo9s div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
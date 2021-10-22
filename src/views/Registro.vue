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
              required
            />
          </div>
          <div class="middle"></div>
          <div class="metric-data">
            <label for="frequencia_fisica">Frecuencia Física</label>
            <select
              v-model="user.frequencia_fisica"
              class="select-registro"
              id="frequencia_fisica"
              name="frequencia_fisica"
              required
            >
              <option value="Seleccione una opción" selected>
                Seleccione una opción
              </option>
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
              <option value="Seleccione una opción" selected>
                Seleccione una opción
              </option>
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
              step="0.10" min="0.1" max="3"
              required
            />
            <label for="peso">Peso (Kg)</label>
            <input
              v-model="user.peso"
              type="number"
              id="peso"
              name="peso"
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
              <option value="Seleccione una opción" selected>
                Seleccione una opción
              </option>
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
              <option value="0" selected>Seleccione una opción</option>
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
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Registro",
  emits: ["completedSignUp"],
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
        estatura: 0,
        peso: 0,
        genero: "",
        plan_id: 0,
      },
    };
  },

  methods: {
    showAlertErrorCredencial() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al llenar el formulario",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    processSignUp: function () {
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
          console.log(error);
          this.showAlertErrorCredencial()
        });
    },
  },
};
</script>




<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");

.main {
  margin-top: 150px;
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
  margin: 0.5rem;
  margin-bottom: 20px;
}

.registro select {
  background-color: #e6e6e6;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 30px;
  font-size: 12px;
  margin: 0.5rem;
  margin-bottom: 20px;
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
</style>
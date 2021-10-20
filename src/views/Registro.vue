<template>
  <div class="main">
    <div class="registro" autocomplete="on">
      <br />
      <h1>REGISTRESE</h1>
      <br />
      <form v-on:submit.prevent="processSignUp" action="./login.html">
        <div class="container-form">
          <div class="personal-data">
            <label for="username">Usuario</label>
            <input
              v-model="user.username"
              type="text"
              id="username"
              name="username"
              required
            />
            <label for="password">Contraseña</label>
            <input
              v-model="user.password"
              type="password"
              id="password"
              name="password"
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
              v-model="user.fname"
              type="text"
              id="fname"
              name="fname"
              required
            />
            <label for="apellido">Apellidos</label>
            <input
              v-model="user.apellido"
              type="text"
              id="apellido"
              name="apellido"
              required
            />
            <label for="fnacimiento">Fecha de Nacimiento</label>
            <input
              v-model="user.fnacimiento"
              type="date"
              id="fnacimiento"
              name="fnacimiento"
              required
            />
          </div>
          <div class="middle"></div>
          <div class="metric-data">
            <label for="frecuencia">Frecuencia Física</label>
            <select
              v-model="user.frecuencia"
              class="select-registro"
              id="frecuencia"
              name="frecuencia"
              required
            >
              <option value="Seleccione una opción" selected>
                Seleccione una opción
              </option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Intensa">Intensa</option>
            </select>
            <label for="objetivoU">Objetivo</label>
            <select
              v-model="user.objetivo"
              class="select-registro"
              id="objetivo"
              name="objetivo"
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
            <label for="estatura">Estura (cm)</label>
            <input
              v-model="user.estatura"
              type="number"
              id="estatura"
              name="estatura"
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
            <label for="sexo">Sexo</label>
            <select
              v-model="user.sexo"
              class="select-registro"
              id="sexo"
              name="sexo"
              required
            >
              <option value="Seleccione una opción" selected>
                Seleccione una opción
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            </select>
            <label for="plan">Plan</label>
            <select
              v-model="user.plan"
              class="select-registro"
              id="plan"
              name="plan"
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
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        fname: "",
        apellido: "",
        fnacimiento: "",
        frecuencia: "",
        objetivo: "",
        estatura: "",
        peso: "",
        sexo: "",
        plan: "",
      },
    };
  },

  methods: {
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
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>




<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");

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
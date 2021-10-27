<template>
  <section class="containers">
    <h2 class="letra">
      Usuario <span class="data-text">{{ username }}</span
      >, edita tus datos
    </h2>
    <div v-if="loaded" class="container-perfil">
      <form
        class="container-perfil-form"
        autocomplete="off"
        v-on:submit.prevent="updateData"
      >
        <br />
        <br />
        <br />
        <div class="username">
          <div class="username-basic">
            <div class="container_full">
              <div class="container_label_input">
                <label class="letra" for="Nombres">Nombres</label>
                <div class="container_input">
                  <input
                    type="text"
                    id="Nombres"
                    v-model="user.name"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="container_label_input">
                <label class="letra" for="Apellidos"> Apellidos</label>
                <div class="container_input">
                  <input
                    type="text"
                    id="Apellidos"
                    v-model="user.last_name"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>
            <div class="container_full">
              <div class="container_label_input">
                <label class="letra" for="Correo"> Correo Electrónico</label>
                <div class="container_input email">
                  <input
                    type="email"
                    id="Correo"
                    v-model="user.email"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>

              <div class="container_label_input">
                <label class="letra" for="Plan"> Plan</label>
                <div class="container_input">
                  <select
                    id="Plan"
                    v-model="plan_name"
                    class="input_field"
                    required
                  >
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>
            <div class="container_full">
              <div class="container_label_input">
                <label class="letra" for="Genero"> Genero</label>
                <div class="container_input">
                  <select
                    id="Genero"
                    v-model="user.genero"
                    class="input_field"
                    required
                  >
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Prefiero no decirlo">
                      Prefiero no decirlo
                    </option>
                  </select>
                  <span class="focus-border"></span>
                </div>
              </div>

              <div class="container_label_input">
                <label class="letra" for="Fecha_Nacimiento">
                  Fecha Nacimiento</label
                >
                <div class="container_input">
                  <input
                    type="date"
                    :max="hoy"
                    id="Fecha_Nacimiento"
                    v-model="user.fecha_nacimiento"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>

            <div class="container_full">
              <div class="container_label_input">
                <label class="letra" for="Frecuencia_física">
                  Frecuencia Física</label
                >
                <div class="container_input">
                  <select
                    id="Frecuencia_física"
                    v-model="user.frequencia_fisica"
                    class="input_field"
                    required
                  >
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Intensa">Intensa</option>
                  </select>
                  <span class="focus-border"></span>
                </div>
              </div>

              <div class="container_label_input">
                <label class="letra" for="Objetivo_Usuario"> Objetivo</label>
                <div class="container_input">
                  <select
                    id="Objetivo_Usuario"
                    v-model="user.objetivo_usuario"
                    class="input_field"
                    required
                  >
                    <option value="Bajar de peso">Bajar de peso</option>
                    <option value="Mantener peso">Mantener peso</option>
                    <option value="Aumentar masa muscular">
                      Aumentar masa muscular
                    </option>
                  </select>
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>

            <div class="container_full">
              <div class="container_label_input">
                <label class="letra" for="Estatura">Estatura (Metros)</label>
                <div class="container_input">
                  <input
                    type="number"
                    id="Estatura"
                    v-model="user.estatura"
                    step="0.01"
                    min="0.15"
                    max="3"
                    required
                    class="input_field"
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="container_label_input">
                <label class="letra" for="Peso">Peso (KG)</label>
                <div class="container_input">
                  <input
                    type="number"
                    id="Peso"
                    step="0.1"
                    min="1.0"
                    max="600"
                    required
                    v-model="user.peso"
                    class="input_field"
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="container-button">
            <button class="button-registro" type="submit">Guardar</button>
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
          </div>
        </div>
      </form>
      <form
        class="container-perfil-password"
        autocomplete="off"
        v-on:submit.prevent="updatePasswordAlert"
      >
        <br /><br /><br />
        <div class="username-password">
          <h2 class="letra">Cambiar contraseña</h2>
          <br />
          <div class="username-basic">
            <div class="container_full_password">
              <div class="container_label_input">
                <label class="letra" for="password">Contraseña actual</label>
                <div class="container_input">
                  <input
                    autocomplete="nope"
                    type="password"
                    id="password"
                    v-model="passwordUser.old_password"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="container_label_input">
                <label class="letra" for="newPassword">Contraseña nueva</label>
                <div class="container_input">
                  <input
                    autocomplete="nope"
                    type="password"
                    id="newPassword"
                    v-model="passwordUser.new_password"
                    class="input_field"
                    required
                  />
                  <span class="focus-border"></span>
                </div>
              </div>
            </div>
            <div class="container-button">
              <button style="width: 50%" class="button-registro" type="submit">
                Cambiar
              </button>
            </div>
          </div>
        </div>
      </form>
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
  name: "EditPerfil",
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  components: {
    Loading,
  },
  data: function () {
    return {
      user: {
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
      passwordUser: {
        old_password: "",
        new_password: "",
      },
      plan_name: "",
      hoy: new Date().toISOString().split("T")[0],
      username: "",
      loaded: false,

      loading: false,
    };
  },
  methods: {
    getData: async function () {
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
        .get(`https://teamgym-be.herokuapp.com/user/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          this.user.email = result.data.email;
          this.user.name = result.data.name;
          this.user.last_name = result.data.last_name;
          this.user.fecha_nacimiento = result.data.fecha_nacimiento;
          this.user.frequencia_fisica = result.data.frequencia_fisica;
          this.user.objetivo_usuario = result.data.objetivo_usuario;
          this.user.estatura = result.data.estatura;
          this.user.peso = result.data.peso;
          this.user.genero = result.data.genero;
          this.user.plan_id = this.planConvertir(result.data.plan_id);

          this.plan_name = result.data.plan_id;
          this.username = result.data.username;
          this.loaded = true;
        })
        .catch(() => {
          alert("Error al cargar los datos");
          return;
        });
    },
    updateData: async function () {
      this.loading = true;
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
      this.user.plan_id = this.planConvertir(this.plan_name);
      axios
        .put(
          `https://teamgym-be.herokuapp.com/user/update/${userId}/`,
          this.user,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((result) => {
          this.user.email = result.data.email;
          this.user.name = result.data.name;
          this.user.last_name = result.data.last_name;
          this.user.fecha_nacimiento = result.data.fecha_nacimiento;
          this.user.frequencia_fisica = result.data.frequencia_fisica;
          this.user.objetivo_usuario = result.data.objetivo_usuario;
          this.user.estatura = result.data.estatura;
          this.user.peso = result.data.peso;
          this.user.genero = result.data.genero;
          this.user.plan_id = this.planConvertir(result.data.plan_id);

          this.plan_name = result.data.plan_id;
          this.username = result.data.username;
          this.loading = false;
          this.showAlertExito();
        })
        .catch((error) => {
          alert(error);
          return;
        });
    },
    updatePassword: async function () {
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
        .put(
          `https://teamgym-be.herokuapp.com/user/password/${userId}/`,
          this.passwordUser,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((result) => {
          this.passwordAlert();
          this.passwordUser.old_password = "";
          this.passwordUser.new_password = "";
          return;
        })
        .catch((error) => {
          console.log(error.response.data);

          if (error.response.data.old_password !== undefined) {
            console.log(error.response.data.old_password);
            if (error.response.data.old_password[0] === "Wrong password."){
              this.showAlertPassWrong();
              return;
            }
          }
          if (
            error.response.data.new_password[0] ===
            "Old and new passwords are the same."
          ) {
            this.showAlertPassSame();
            return;
          }
          alert(error);
          return
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
    planConvertir: function (plan) {
      if (plan === "Básico") {
        return 1;
      } else if (plan === "Intermedio") {
        return 2;
      } else if (plan === "Avanzado") {
        return 3;
      } else {
        return 0;
      }
    },
    showAlertExito() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "success",
        title: "Datos actualizados",
        text: "Presione Ok para continuar",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    showAlertPassSame() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "Las contraseñas ingresadas son iguales",
        text: "Presione Ok para continuar",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    showAlertPassWrong() {
      // Use sweetalert2
      this.$swal.fire({
        icon: "error",
        title: "La contraseña actual es incorrecta",
        text: "Presione Ok para continuar",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
      });
    },
    updatePasswordAlert() {
      this.$swal
        .fire({
          title: "¿Está seguro de actulizar su contraseña?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#04b579",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, actualizar",
          cancelButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.value) {
            this.updatePassword();
          }
        });
    },
    passwordAlert() {
      this.$swal.fire({
        icon: "success",
        title: "Contraseña actualizada",
        text: "Presione Ok para continuar",
        background: "rgb(255, 254, 254)",
        confirmButtonColor: "#04b579",
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

* {
  box-sizing: border-box;
}
.containers {
  margin: 150px 0 150px 0;
}
.container-perfil {
  display: flex;
  align-items: start;
}
.container-load {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-perfil-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
}
.container-perfil-password {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.screen-1 {
  background-color: rgb(38, 40, 41);
  width: 56%;
  flex-direction: column;
}
.username {
  width: 60%;
  height: 630px;
  background-color: rgba(66, 68, 70, 0.397);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  border-radius: 30px 30px 30px 30px;
}
.username-password {
  width: 100%;
  height: 400px;
  background-color: rgba(66, 68, 70, 0.397);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  border-radius: 30px 30px 30px 30px;
}
.username-basic {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: flex-start;
}
.letra {
  font-family: "Open Sans", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 20px;
}

.img-profile-man {
  width: 150px;
  height: 150px;
}
#img-2 {
  width: 200px;
  height: 200px;
}

.data-text {
  text-transform: capitalize;
  color: #04b579;
}

.container_full {
  display: flex;
}
.container_full_password {
  display: flex;
  flex-direction: column;
}
.container_label_input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin: 0 20px 20px 0;
}
.container_input {
  float: left;
  width: 280px;
  margin: 8px 0;
  position: relative;
}
.input_field {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #04b579;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  color: #04b579;
  font-family: "Open Sans", sans-serif;
  padding: 0;
}
input[type="text"],
input[type="date"],
input[type="email"],
input[type="number"],
select {
  color: #04b579;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

input[type="date"] {
  padding: 5.2px;
}

:focus {
  outline: none;
}
.input_field {
  border: 0;
  padding: 7px;
  border-bottom: 1px solid #ccc;
}
.input_field ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 99;
}
.input_field ~ .focus-border:before,
.input_field ~ .focus-border:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #04b579;
  transition: 0.4s;
}
.input_field ~ .focus-border:after {
  left: auto;
  right: 0;
}
.input_field:focus ~ .focus-border:before,
.input_field:focus ~ .focus-border:after {
  width: 50%;
  transition: 0.4s;
}
.button-registro {
  background-color: #04b579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 25%;
  height: 50px;
}
.button-registro:hover {
  cursor: pointer;
  background-color: #29c08e;
}

.container-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* loading spiner */

@keyframes ldio-qdyn8sbo9s {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.ldio-qdyn8sbo9s div {
  left: 20px;
  top: 4px;
  position: absolute;
  animation: ldio-qdyn8sbo9s linear 1s infinite;
  background: #04b579;
  width: 6px;
  height: 12px;
  border-radius: 3px / 6px;
  transform-origin: 3px 26px;
}
.ldio-qdyn8sbo9s div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #04b579;
}
.ldio-qdyn8sbo9s div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #04b579;
}
.loadingio-spinner-spinner-nwl5j7qfhjl {
  width: 84px;
  height: 84px;
  display: inline-block;
  background: transparent;
}
.ldio-qdyn8sbo9s {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.84);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  margin-left: 10px;
}
.ldio-qdyn8sbo9s div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */

@media screen and (max-width: 1600px) {
  .username {
    width: 80%;
  }
}
</style>
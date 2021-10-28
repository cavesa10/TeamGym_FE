<template>
  <div class="container-perfil">
    <div class="screen-1">
      <img class="img-profile-man" src="../assets/image/home_1.png">
    </div>
    <div class="screen-2">
      <h1>Cumple<br>tu meta</h1>
      <h2>Descubre cómo alcanzar tu objetivo!</h2>
      <a href="#/Registro"><input class="button" type="button" value="Regístrese y adquiere un plan!" name="boton"></a>
    </div>
  </div>
  <Funcionalidades/>
  <Calculator/>
  <NuestrosPlanes/>
  <Footer/>
</template>

<script>
import Funcionalidades from "../components/Funcionalidades.vue"
import Loading from "../components/Loading.vue"
import NuestrosPlanes from "../components/NuestrosPlanes.vue"
import Calculator from "../components/Calculator.vue"
import Footer from "../components/Footer.vue"
export default {
  name: 'Home',
  emits: ["completedLogIn","completedSignUp","logOut"],
  components: {
    Funcionalidades,
    Loading,
    NuestrosPlanes,
    Calculator,
    Footer
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.container-perfil {
  display: flex;
  margin-top: 115px;
}
.screen-1 {
  background-color: rgb(38, 40, 41);
  width: 50%;
  flex-direction: column;
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
.img-profile-man {
  width: 650px;
  height: 700px;
}
h1{
  color: #fff;
  font-size: 130px;
  margin-top: 1px;
}
h2{
  color: #fff;
  margin-top: -70px;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 100px;
}
.button{
  background-color: #04B579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 150%;
  height: 90px;
  margin-left: -70px;
  box-shadow: inset 0 0 0 0 #33b98d;
  transition: ease-out 0.3s;
}
.button:hover{
  cursor:pointer;
  background-color: #33b68a;
  transition-duration: 0.2s;
  box-shadow: inset 500px 0 0 0 #33b98d;
}
</style>

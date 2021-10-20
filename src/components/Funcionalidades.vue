<template>
<div class="container-perfil">
    <div class="screen-1">
      <h2 class="subtitle">NUESTRAS<br>FUNCIONALIDADES</h2>
      <img class="img-profile-man" src="../assets/image/home_2.png" />
      <div class="username">
    </div>
    </div>
    
    <div class="screen-2">
      <div class="sesion">
        <h2 class="sesionTitle">Calcula tu IMC</h2>
        <h3 class="sesionContent">Con tus datos, calcularemos el imc actual.</h3>
      </div>

      <div class="sesion">
        <h2 class="sesionTitle">Crea tu plan</h2>
        <h3 class="sesionContent">Te ayudamos a crear tu plan de ejercicio de acuerdo a tus objetivos.</h3>
      </div>

      <div class="sesion">
        <h2 class="sesionTitle">Consejos</h2>
        <h3 class="sesionContent">Recibe consejos de un buen estilo de vida.</h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Funcionalidades',
}
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.container-perfil {
  display: flex;
  margin-top: 200px;
}
.screen-1 {
  background-color: rgb(38, 40, 41);
  width: 60%;
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
  margin-top: -100px;
}
h1
{
  color: #fff;
  font-size: 130px;
  margin-top: 1px;
}
h2
{
  color: #fff;
  margin-top: 70px;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 100px;
}
.sesionTitle
{
  font-family: "Orbitron", sans-serif;
  font-size: 50px;
}
.sesionContent
{
  color: #fff;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  font-size: 20px;
  font-weight: lighter;
  margin-top: -80px;
}
.subtitle
{
  color: #fff;
  font-size: 50px;
  margin-top: 80px;
  font-family: "Orbitron", sans-serif;
  text-align: center;
}
.button
{
  background-color: #04B579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 70%;
  height: 90px;
}
.button:hover
{
  cursor:pointer;
  background-color: #29c08e;
}
.sesion
{
  width: 100%;
  text-align: left
}
.sesion:hover
{
  background-color: rgb(45, 48, 49);
  transition-duration: 0.3s;
  cursor: default;
  
}
</style>
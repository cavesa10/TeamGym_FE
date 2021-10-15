<template>
  <div class="container-perfil">
    <div class="screen-1">
      <img class="img-profile-man" src="../assets/image/man.png" />
      <div class="username">
        <div class="username-basic">
          <h2 class="letra">Username</h2>
          <h2 class="letra">Correo</h2>
          <h2 class="letra">Nombres</h2>
          <h2 class="letra">Apellidos</h2>
          <h2 class="letra">Fecha Nacimiento</h2>
        </div>
        <div class="username-basic">
          <h2 class="letra">Frecuencia Física</h2>
          <h2 class="letra">Objetivo</h2>
          <h2 class="letra">Sexo</h2>
          <h2 class="letra">Plan</h2>
        </div>
      </div>
      <h2 id="informe">Informe plan</h2>
      <div class="imcData">
        <div>
          <h2 class="letra-2">Peso (Kg)</h2>
          <h2 class="letra-2-data">70</h2>
        </div>
        <div>
          <h2 class="letra-2">Estatura:</h2>
          <h2 class="letra-2-data">1,7</h2>
        </div>
        <div>
          <h2 class="letra-2">Edad</h2>
          <h2 class="letra-2-data">25</h2>
        </div>
      </div>
    </div>
    <div class="screen-2">
      <img id="img-2" src="../assets/image/ejercicioProfile.png" />
      <h2>Imc actual: 23.5<!--dato desde la base de datos js--></h2>
      <h2>Tu objetivo:Bajar de peso<!--bd js--></h2>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.container-perfil {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center
}
.screen-1 {
  background-color: var(--main-color);
  width: 60%;
  flex-direction: column;
  height: 100%;
}
.screen-2 {
  background-color: rgb(38, 40, 41);
  width: 40%;
  font-family: "Orbitron", sans-serif;
  color: rgb(68, 212, 68);
  font-size: 25px;
  height: 100%;
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
.username-basic{
  display: flex;
  flex-direction: column;
  align-items: flex-start
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
  align-items: left;
}
</style>
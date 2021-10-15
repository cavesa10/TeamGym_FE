<template>
  <div class="main">
    <div class="registro" autocomplete="on">
      <h2>REGISTRESE</h2>
      <form action="./login.html">
        <label for="username">Username: </label><br />
        <input type="text" id="username" name="username" required /><br />
        <label for="password">Contraseña: </label><br />
        <input type="password" id="password" name="password" required /><br />
        <label for="email">Email: </label><br />
        <input type="email" id="email" name="email" required /><br />
        <label for="nombres">Nombres: </label><br />
        <input type="text" id="fname" name="fname" required /><br />
        <label for="apellido">Apellidos</label><br />
        <input type="text" id="apellido" name="apellido" required /><br />
        <label for="fnacimiento">Fecha de Nacimiento: </label><br />
        <input type="date" id="fnacimiento" name="fnacimiento" required /><br />
        <label for="frecuencia">Frecuencia Física: </label><br />
        <input type="text" id="frecuencia" name="frecuencia" required /><br />
        <label for="objetivoU">Objetivo: </label><br />
        <select class="select-registro" id="plan" name="plan" required>
          <option value="Ninguno" selected>Ninguno</option>
          <option value="Bajar de peso">Bajar de peso</option>
          <option value="Mantener peso">Mantener peso</option>
          <option value="Aumentar masa corporal">Aumentar masa corporal</option></select
        ><br />
        <label for="estatura">Estura (metros): </label><br />
        <input type="number" id="estatura" name="estatura" required /><br />
        <label for="peso">Peso (Kilogramos): </label><br />
        <input type="number" id="peso" name="peso" required /><br />
        <label for="sexo">Sexo: </label><br />
        <select class="select-registro" id="sexo" name="sexo" required>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Prefiero no decirlo" selected>
            Prefiero no decirlo
          </option></select
        ><br />
        <label for="plan">Plan: </label><br />
        <select class="select-registro" id="plan" name="plan" required>
          <option value="0" selected>Ninguno</option>
          <option value="1">Básico</option>
          <option value="2">Intermedio</option>
          <option value="3">Avanzado</option></select
        ><br />

        <button class="button-registro" type="submit" id="enviar">Registrarse</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Registro",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");

.registro {
  background-color: rgb(255, 254, 254);
  color: rgb(39, 41, 41);
  width: 100%;
  max-width: 600px;
  height: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
.registro input {
  width: 100%;
  height: 30px;
  margin: 0.5rem;
  background-color: rgba(92, 91, 91, 0.329);
  border: none;
}
h2 {
  font-family: "Orbitron", sans-serif;
  font-size: 40px;
  color: rgb(68, 212, 68);
}
.registro label {
  font-family: "Trebuchet MS";
}
.button-registro {
  font-family: "Trebuchet MS";
  background-color: rgb(68, 212, 68);
  font-size: 25px;
  border-radius: 60px;
  border: none;
  color: white;
  margin: 10px;
  width: 100%;

}
.select-registro {
  width: 100%;
  height: 30px;
  margin: 0.5rem;
  background-color: rgba(92, 91, 91, 0.329);
  border: none;
}
</style>
<template>
      <div class="main">
        <div class="registro" autocomplete="on">
            <h2>REGISTRESE</h2>
            <form action="./login.html">
                <label for="nombres">Nombres: </label><br>
                <input type="text" id="fname" name="fname" required><br>
                <label for="apellido">Apellidos</label><br>
                <input type="text" id="apellido" name="apellido" required><br>
                <label for="fnacimiento">Fecha de Nacimiento: </label><br>
                <input type="date" id="fnacimiento" name="fnacimiento" required><br>
                <label for="correo">Correo</label><br>
                <input type="email" id="correo" name="correo" required><br>
                <label for="contraseña">Contraseña</label><br>
                <input type="password" id="contraseña" name="contraseña" required><br>
                <button type="submit"  id="enviar">Registrarse</button>
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.registro {
    background-color:rgb(255, 254, 254);
    color: rgb(39, 41, 41);
    width:100%;
    max-width:600px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 30px;
}
.registro input{
    width:100%;
    height:30px;
    margin: 0.5rem;
    background-color: rgba(92, 91, 91, 0.329);
    border: none;
}
h2{
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
    color: rgb(68, 212, 68);
}
.registro label{
    font-family:'Trebuchet MS';
}
button{
    font-family: 'Trebuchet MS';
    background-color: rgb(57, 209, 158);
    font-size: 25px;
    align-content: flex;
    border-radius: 60px;
    border:none;
    color:white;
    box-sizing: 40px;

}
</style>
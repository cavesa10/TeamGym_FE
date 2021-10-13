<template>
  <section  class="section-login">
    <form class="form-login">
      <h1>LOGIN</h1>
      <br />
      <div>
        <img id="icons" src="../assets/image/correo.png" /><input
          type="email"
          placeholder="Ingresa tu usuario"
          required
        />
      </div>
      <div>
        <img id="icons" src="../assets/image/contraseña.png" /><input
          type="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>
      <button>Ingresar</button>
      <a href="link recuperacion">Olvidaste tu contraseña?</a>
      <a href="../html/registro.html">Registrate!</a>
    </form>
  </section>
</template>

<script>
export default {
  name: "Registro",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");


.form-login {
  background-color: rgb(255, 254, 254);
  color: rgb(39, 41, 41);
  width: 100%;
  max-width: 600px;
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
  color: rgb(68, 212, 68);
  font-size: 50px;
}
.form-login input {
  width: 80%;
  height: 30px;
  margin: 0.4rem;
  background-color: rgba(92, 91, 91, 0.329);
  border: none;
}
.form-login button {
  border-radius: 60px;
  color: white;
  background-color: rgb(68, 212, 68);
  font-size: 25px;
  margin: 0.4rem;
  border-color: green;
}
.form-login a {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  text-decoration: none;
  color: black;
  margin: 0.5rem;
}
.form-login label {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: black;
  margin: 0.3rem;
  justify-content: left;
  width: 80%;
}
#icons {
  width: 25px;
  height: 25px;
}
</style>
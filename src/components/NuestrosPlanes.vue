<template>
  <section class="main" id="Planes" >
    <h1>NUESTROS PLANES</h1>
    <h2 id="subTitle">Conoce nuestros planes para cumplir tus objetivos</h2>
    <div class="contenedor-NP">
      <div class="contenedores-NP">
        <h2 class="words">BÁSICO</h2>
        <img src="../assets/image/service_2.png" alt="Bajar de peso" />
        <div class="img-overlay">
          <div class="title_image">Empieza!</div>
          <p class="imagen_description">
            El plan básico consta de adaptarse a las rutinas de ejercicio paulatinamente para cumplir el objetivo.
          </p>

        </div>
      </div>

      <div class="contenedores-NP">
        <h2 class="words">INTERMEDIO</h2>
        <img  src="../assets/image/service_1.png" alt="estar en forma" />
        <div class="img-overlay">
          <div class="title_image">Manten la linea</div>
          <p class="imagen_description">
            Si lo que deseas es estar en forma y aumentar el rendimiento, este es el plan perfecto.
          </p>

        </div>
      </div>

      <div class="contenedores-NP">
        <h2 class="words">AVANZADO</h2>
        <img src="../assets/image/service_3.png" alt="Ganar musculo" />
        <div class="img-overlay">
          <div class="title_image">Aumenta Músculo</div>
          <p class="imagen_description">
            Ideal para aquellos con el objetivo de aumentar sus músculos y fortalecerlos.
          </p>

        </div>
      </div>
      
    </div>
    
  </section>
</template>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 170px;
}
.contenedor-NP {
  display: flex;
  width: 80%;
  justify-content: center
}
.contenedores-NP {
  position: relative;
  background-color: #04b579;
  width: 30%;
  height: 100%;
  flex-direction: row;
  border: 6px solid rgb(38, 40, 41);
}

img {
  width: 70%;
  height: 70%;
}
.words {
  color: #fff;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 25px;
  margin-left: 15px;
}
h1 {
  color: #fff;
  font-size: 80px;
}
#subTitle {
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
  text-align: center;
  font-size: 30px;
  margin-top: -30px;
  margin-bottom: 120px;
}
a {
  text-decoration: none;
}
.img-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 23, 23, 0.856);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
}

.img-overlay:hover{
  opacity: 1;
  cursor: default;
}


.title_image{
font-size: 2em;
font-weight: bold;
margin-bottom: 30px;
}

.imagen_description{
font-size: 1.1em ;
margin-top: 0.25em;
width: 400px;
font-weight: lighter;
color: #c9c9c9;
}




</style>
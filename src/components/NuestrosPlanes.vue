<template>
<section class="main">
    <h1>NUESTROS PLANES</h1>
    <h2 id="subTitle">Conoce nuestros planes para cumplir tus objetivos</h2>
    <div class="contenedor-NP"> 
        <a href="https://www.google.com/"> <div class="contenedores-NP">
            <h2 class="words">BAJAR DE PESO</h2>
            <img src="../assets/image/service_2.png" alt="Bajar de peso">
        </div></a>
        <a href="https://www.google.com/"> <div class="contenedores-NP">
            <h2 class="words">ESTAR EN FORMA</h2>
            <img src="../assets/image/service_1.png" alt="estar en forma">
        </div> </a>
        <a href="https://www.google.com/"><div class="contenedores-NP">
            <h2 class="words">GANAR MUSCULO</h2>
            <img src="../assets/image/service_3.png" alt="Ganar musculo">
        </div></a>
    </div> 
</section>
</template>

<style scoped>
.contenedor-NP
{
    
    width: 1500px;
    height: 400px;
    display: flex;
    margin-left: 60px;
    margin-top: 60px;
}
.contenedores-NP
{
    background-color: #04B579;
    width: 500px;
    height: 100%;
    flex-direction: row;
    border: 6px solid rgb(38, 40, 41);
    box-shadow: inset 0 0 0 0 #33b98d;
    transition: ease-out 0.3s;
}
.contenedores-NP:hover
{
    width: 500px;
    cursor: pointer;
    background-color: #33b68a;
    transition-duration: 0.2s;
    box-shadow: inset 500px 0 0 0 #33b98d;
    
}
.main
{
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
}
img
{
    width: 70%;
    height:70%;
}
.words
{
    color: #fff;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    margin-left: 15px;
}
h1
{
    color: #fff;
    font-size: 80px;
}
#subTitle
{
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    text-align: center;
    font-size: 30px;
    margin-top: -30px;
    margin-bottom: 120px;
}
a
{
    text-decoration: none;
}
</style>
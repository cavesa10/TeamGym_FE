<template>
<footer class="main">
    <div class="left">
        <img id="logo" src="../assets/image/favicon.png" alt="Logo">
        <p class="footer-links">
					<a href="#" class="link-1">Inicio</a>

					<a href="#">Funcionalidades</a>

					<a href="#">Planes</a>

					<a href="#">Registro</a>

					<a href="#">Iniciar sesión</a>

				</p>

				<p class="footer-company-name">Team Gym 2021</p>

    </div>
    <div class="center">
        <img class="correo" src="../assets/image/correo.png" alt="">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><strong>gymteamp7@gmail.com</strong></a>

    </div>
    <div class="right">
        <h3>3</h3>
    </div>
</footer>
</template>

<style scoped>
.main
{
    background-color: darkgreen;
    margin-top: 300px;
    width: 100%;
    display: flex;
    height: 250px;
    box-sizing: border-box;
    text-align: left;
}

.left
{
    background-color: blue;
    display: inline-block;
    width: 33%;
    vertical-align: top;
    padding:9px;

}
.center
{
    background-color: brown;
    flex-direction: row;
    align-items: center;
    width: 33%;
    color: #fff;
    text-align: center;
}
.right
{
    background-color: coral;
    flex-direction: row;
    align-items: right;
    width: 34%;
}
#logo
{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 30px;
    margin-bottom: 50px;
}
.main .footer-links{
    position: absolute;
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
    margin-top: 100px;
    left: 30px;
}

.main .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

.main .footer-company-name{
    position: absolute;
	color:  #222;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
    margin-top: 160px;
    left: 30px;
}
.main .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.main .footer-links .link-1:before {
  content: none;
}
a
{
    text-decoration: none;
    color: #fff;
}
.correo
{
    position: absolute;
    width: 40px;
    height: 40px;


}
</style>
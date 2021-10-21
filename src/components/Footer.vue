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

				<p class="footer-company-name">Team Gym © 2021</p>
                

    </div>
    <div class="center">
        <div class="center-icons">
					<i class="fa fa-map-marker fa fa-envelope"><img class="icon-foot" src="../assets/image/mail.png" alt=""></i>
                    <p><a href="mailto:gymteamp7@gmail.com">gymteamp7@gmail.com</a></p>
				</div>

				<div>
					<i></i>
					<p></p>
				</div>

				<div>
					<i class="fa fa-map-marker"><img class="icon-foot" src="../assets/image/coding.png" alt=""></i>
					<p><span>Developed by</span> MisionTic 2022 Students</p>
				</div>

    </div>
    <div class="right">
        <p class="footer-company-about">
            <span>Acerca de TeamGym</span>
             TeamGym fue diseñado con el proposito de ayudar a las personas a obtener habitos mas saludables. <br>
             El aplicativo web consta con la opcion de ingresar datos del usuario para generar el IMC y un plan de ejercicio <br>
             donde el usuario podra conocer mas a fondo que ejercicios realizar.

    </p>
    </div>
</footer>
</template>

<style scoped>

* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

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
    background-color: #1b1c1d;
    display: inline-block;
    width: 29%;
    vertical-align: top;
    padding:9px;

}
.center
{
    background-color: #1b1c1d;
    flex-direction: row;
    align-items: center;
    width: 37%;
    color: #fff;
    text-align: center;
}
.right
{
    background-color: #1b1c1d;
    flex-direction: row;
    align-items: right;
    width: 34%;
    display: inline-block;
	vertical-align: top;
}

.main .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
    
}

.main .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
    margin-top: 30px;
}
.center-icons{
    margin-top: 35px;
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
	color:  rgb(194, 194, 194);
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

.main .center i{
	
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 80px;
	margin: 10px 15px;
	vertical-align: middle;
}

.main .center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.main .center p{
	display: inline-block;
	color: #ffffff;
    font-weight:400;
	vertical-align: middle;
	margin:0;
}

.main .center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.main .center p a{
	color:  lightseagreen;
	text-decoration: none;;
}


.icon-foot{
width: 25px;
height: 25px;
}
</style>
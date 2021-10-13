<template>
  <header class="header">
    <div class="container nav-logo">
      <a href="#" class="logo"><img src="../src/assets/Team.png" alt=""></a>
      <nav class="nav">
        <ul>
          <li><router-link to="/" v-if="!booleano" id="words">Home</router-link></li>
          <li><a href="#Funcionalidades">Funcionalidades</a></li>
          <li><router-link to="/Planes" id="words">Planes</router-link></li>
          <li><router-link to="/LogIn" id="words">Login</router-link></li>
          <li><router-link to="/Registro" id="words">Registro</router-link></li>
        </ul>
      </nav>
    </div>
  </header>

  <body>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis cumque soluta vel itaque, numquam doloribus laudantium pariatur consequuntur nostrum delectus amet sunt impedit, culpa, libero eum corrupti distinctio dolorem.
    </p>
  </body>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  background-color: red;
  color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.header a{
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}

.nav-logo{
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container{
  width: 100%;
  margin: 0 auto;
  background-color:#04B579;
}
.logo img{
  width: 15%;
  margin-left: -90px;
}

.nav ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav ul li{
  display: inline-block;
}

.nav ul li a{
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.1s linear;
}

.nav ul li a:hover{
  color: #dbdbdb;
}




/* #nav {
  padding: 25px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  /* font-weight: bold; */
  /* color: #fdfdfd;
  text-decoration: none;
  font-size: 17px;
  margin: 5px;
}

#nav a:hover {
  color: rgb(143, 56, 56);
}

nav a nav-logo:hover {
  text-decoration: none;
  color: green;
}

#nav a.router-link-exact-active {
  color: #b3b3b3;
} */
</style>



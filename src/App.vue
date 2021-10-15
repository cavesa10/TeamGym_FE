<template>
    <header>
      <div class="container nav-logo">
        <a href="#" class="logo"
          ><img src="../src/assets/image/Team_Green.png" alt=""
        /></a>
        <nav class="nav">
          <ul>
            <li>
              <router-link to="/" v-if="!booleano" id="words">Home</router-link>
            </li>
            <li><a href="#Funcionalidades">Funcionalidades</a></li>
            <li><router-link to="/Planes" id="words">Planes</router-link></li>
            <li><router-link to="/LogIn" id="words">Login</router-link></li>
            <li>
              <router-link to="/Registro" id="words">Registro</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view />
</template>

<script>
import './assets/css/global.css';
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>


<style>
body {
    background-color: rgb(38, 40, 41);
    padding: 7%;
    --main-color: rgb(38, 40, 41);

  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

header a {
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}

.nav-logo {
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 100%;
  margin: 0 auto;
  background-color: #04b579;
}
.logo img {
  width: 15%;
  margin-left: -90px;
}

.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav ul li {
  display: inline-block;
}

.nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.1s linear;
}

.nav ul li a:hover {
  color: #dbdbdb;
}
</style>



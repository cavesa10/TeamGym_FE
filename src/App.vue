<template>
    <header>
      <div class="container nav-logo">
        <a href="#" class="logo"
          ><img src="../src/assets/image/Team_Green.png" alt=""
        /></a>
        <nav class="nav">
          <ul>
            <li>
              <router-link to="/" id="words">Home</router-link>
            </li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
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
    data: function () {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      // if (this.is_auth == false) this.$router.push({ name: "logIn" });
      // else this.$router.push({ name: "home" });
    },
    loadLogIn: function (event) {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      console.log(data);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      this.completedLogIn(data);
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      this.verifyAuth();
    },
    loadAccount: function () {
      this.$router.push({ name: "account" });
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>


<style>
body {
    background-color: rgb(38, 40, 41);
    padding: 7%;
    --fondo-black-principal: rgb(38, 40, 41);

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



<template>
  <div class="container-videos-planes">
    <div class="video">
      <div class="wrapper">
        <div class="cointener-flui"></div>
        <div class="course-player">
          <iframe
            :src="'https://www.youtube.com/embed/'+idVideoFirst"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="lista-resproduccion">
      <h2 class="ctitle">Plan <br><span class="plan-label">{{ namePlan }}</span></h2>
      <ul class="episodios">
        <li v-for="video in videos" :key="video.video_url" @click="playVid(video.video_url)" v-bind:class="{'selected': idVideoFirst === video.video_url}" >
          <h3 class="etitle">{{video.video_nombre}}</h3>
          <span class="eduration"> 1:06 minutos</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";

export default {
  name: "Home",
  emits: ["completedLogIn","completedSignUp","logOut"],
  data: function () {
    return {
      namePlan: "",
      idVideoFirst: "",
      videos: [],
    };
  },
  methods: {
    getData: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        localStorage.clear();
        this.$router.push({ name: "Home" });
        return;
      }
      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`https://teamgym-be.herokuapp.com/user/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          this.namePlan = result.data.plan_id;
          let idPlanAxios = this.stringTonumberIdPlan(result.data.plan_id);
          axios
            .get(`https://teamgym-be.herokuapp.com/videos/${idPlanAxios}/`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((result) => {

              this.idVideoFirst = result.data.videos[0].video_url;
              this.videos = result.data.videos;

            })
            .catch(() => {
              localStorage.clear();
              this.$router.push({ name: "Home" });
            });
        })
        .catch(() => {
          localStorage.clear();
          this.$router.push({ name: "Home" });
        });
    },
    verifyToken: function () {
      return axios
        .post(
          "https://teamgym-be.herokuapp.com/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          localStorage.clear();
          this.$router.push({ name: "Home" });
        });
    },
    stringTonumberIdPlan: function (namePlan) {
      if (namePlan == "Básico") {
        return 1;
      }else if (namePlan == "Intermedio") {
        return 2;
      } else {
        return 3;
      }
    },
    playVid(videoId){
      this.idVideoFirst = videoId
    }
  },
  created: async function () {
    this.getData();
  },
};
</script>

<style scoped>
.selected{
  border: 1px solid #04b579 !important;
}
.container-videos-planes {
  display: flex;
  margin: 150px 10% 150px 10%;
  
}
.lista-resproduccion {
  width: 25%;
  height: 80vh;
  background-color: #fff;
  border-right: 1px solid #ddd;
  min-height: 1px;
  overflow:auto;
  border-radius: 0 30px 30px 0;
}

.lista-resproduccion::-webkit-scrollbar {
    -webkit-appearance: none;
}

.lista-resproduccion::-webkit-scrollbar:vertical {
    width:10px;
}
.lista-resproduccion::-webkit-scrollbar-button:increment,.lista-resproduccion::-webkit-scrollbar-button {
    display: none;
}

.lista-resproduccion::-webkit-scrollbar:horizontal {
    height: 10px;
}

.lista-resproduccion::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

.lista-resproduccion::-webkit-scrollbar-track {
    border-radius: 10px;
}

.ctitle {
  margin: 20px 0 30px 0;
  font-size: 25px;
  color: #555;
  font-weight: 400;
  text-align: center;
  width: 100%;
}
.episodios {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0;
  list-style: none;
  width: 100%;
  margin-bottom: 40px;
}
ul.episodios li {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid #eee;
  background-color: #e4e3e3;
  cursor: pointer;
  width: 83%;
  padding: 10px 15px;
}

ul.episodios li:hover{
  background-color: #dfdede;
}
h3.etitle {
  margin: 0 0 5px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
}
span.eduration {
  font-size: 12px;
  color: #888;
}
.video {
  width: 75%;
}
.course-player {
  width: 100%;
}
iframe {
  width: 100%;
  height: 80vh;
}

.plan-label{
  color: #04b579;
}
</style>

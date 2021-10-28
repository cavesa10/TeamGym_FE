<template>
  <section id="Calculadora" class="containers">
    <h1>CALCULADORA IMC</h1>
    <h2 id="subTitle">Ingresa los siguientes datos y conoce tu IMC</h2>
    <div class="container-perfil">
      <form
        v-on:submit.prevent="calcularIMC"
        autocomplete="off"
        class="screen-1"
      >
        <div class="label2">
          <h2 class="label-data">Peso (Kg)</h2>
          <input
            v-model="peso"
            type="number"
            id="peso"
            name="peso"
            step="0.1"
            min="1.0"
            max="600"
            required
            class="input-data"
          />
        </div>
        <div class="label2">
          <h2 class="label-data">Estatura (m)</h2>
          <input
            v-model="estatura"
            type="number"
            id="estatura"
            name="estatura"
            step="0.01"
            min="0.15"
            max="3"
            required
            class="input-data"
          />
        </div>
        <button class="button-registro" type="submit" id="enviar">
          Calcular
        </button>
      </form>

      <div class="screen-2">
       <div v-if=grafica.value>
         <h2>Medidor IMC</h2>
          <vue-gauge
          :refid="'type-unique-id'"
          :options="{
            needleValue: grafica.imcNeedle,
            arcDelimiters: [25, 50, 75],
            arcColors: ['rgb(239,214,19)', '#04b579', 'orange', '#eb4848'],
            needleColor: 'white',
            outerNeedle: 'true',
            chartWidth: '400',
            rangeLabel: '',
          }"
        ></vue-gauge>
        <h2 class="letra-2-data-imc">
          <span>{{ imc }}</span>
        </h2>
       </div>
       <div v-else>
         <h2>Medidor IMC</h2>
        <vue-gauge
          :refid="'type-unique-id'"
          :options="{
            needleValue: 0,
            arcDelimiters: [25, 50, 75],
            arcColors: ['rgb(239,214,19)', '#04b579', 'orange', '#eb4848'],
            needleColor: 'white',
            outerNeedle: 'true',
            chartWidth: '400',
            rangeLabel: '',
          }"
        ></vue-gauge>
        <h2 class="letra-2-data-imc">
          <span>{{ imc }}</span>
        </h2>
        </div>
      </div>

      <div class="screen-3">
        <table id="tbody">
          <tr>
            <th>Composicion corporal</th>
            <th>IMC</th>
          </tr>
          <tr v-bind:class="{ selected: grafica.style=='bajo'}" >
            <td>Muy bajo</td>
            <td>Menos de 18.5</td>
          </tr>
          <tr v-bind:class="{ selected: grafica.style=='normal' }" >
            <td>Normal</td>
            <td>18.5 – 24.9</td>
          </tr>
          <tr v-bind:class="{ selected: grafica.style=='sobrepeso' }" >
            <td>Sobrepeso</td>
            <td>25.0 – 29.9</td>
          </tr>
          <tr v-bind:class="{ selected: grafica.style=='obesidad' }" >
            <td>Obesidad</td>
            <td>Más de 30.0</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>




<script>
import Loading from "./../components/Loading.vue";
import VueGauge from "vue-gauge";
import Vue from 'vue'
export default {
  name: "Calculadora",
  emits: ["completedLogIn", "completedSignUp", "logOut"],
  components: {
    Loading,
    VueGauge,
  },
  data: function () {
    return {
      estatura: 0,
      peso: 0,
      imc: 0,
      grafica: {
        imcNeedle: 1,
        value: false,
        style: "",
      },
    };
  },
  methods: {
    calcularIMC: function () {
      this.grafica.value = false;
      setTimeout(() => {
      let imcsLabel = this.peso / (this.estatura * this.estatura);
      this.imc = imcsLabel.toFixed(1);
      this.grafica = this.graficaData(this.imc)
      this.grafica.value = true
      }, 100);

    },
    graficaData: function (imc) {
      if (imc <= 18.5) {
        return { imcNeedle: 12.5, style: "bajo" };
      }
      if (imc > 18.5 && imc <= 24.9) {
        return { imcNeedle: 37.5, style: "normal" };
      }
      if (imc >= 25 && imc <= 29.9) {
        return { imcNeedle: 62.5, style: "sobrepeso" };
      } else {
        return { imcNeedle: 87.5, style: "obesidad" };
      }
    },

  },
};
</script>






<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

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

span {
  color: #04b579;
}
.containers {
  margin: 150px 9% 0 9%;
  padding-top: 50px;
}

.container-perfil {
  display: flex;
  width: 100%;
}

.screen-1 {
  background-color: rgba(66, 68, 70, 0.397);
  width: 33%;
  height: 500px;
  flex-direction: column;
  border-radius: 30px 30px 30px 30px;
  border: 6px solid rgb(38, 40, 41);
}

.screen-2 {
  background-color: rgba(66, 68, 70, 0.397);
  border: 6px solid rgb(38, 40, 41);
  border-radius: 30px 30px 30px 30px;
  width: 33%;
  height: 500px;
  font-family: "Orbitron", sans-serif;
  color: #04b579;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.screen-3 {
  background-color: rgba(66, 68, 70, 0.397);
  border: 6px solid rgb(38, 40, 41);
  border-radius: 30px 30px 30px 30px;
  width: 33%;
  height: 500px;
  font-family: "Orbitron", sans-serif;
  font-size: 25px;
  display: flex;
  flex-direction: column;
}

.button-registro {
  background-color: #04b579;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border-style: none;
  width: 50%;
  height: 50px;
  margin-top: 120px;
}
.button-registro:hover {
  cursor: pointer;
  background-color: #29c08e;
}

.label-data {
  color: #29c08e;
  font-family: "Orbitron", sans-serif;
}

.input-data:focus {
  outline: none;
}

.input-data {
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 300px;
  font-size: 25px;
  text-align: center;
}

.label2 {
  margin-top: 70px;
}

#tbody {
  font-family: "Orbitron", sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

#tbody td,
#tbody th {
  padding: 8px;
}


.selected{

  background-color: rgba(66, 68, 70, 0.397);
  border-radius: 30px 30px 30px 30px;
}

#tbody th {
  text-align: center;
  background-color: #04b579;
  color: white;
  font-size: 23px;
  height: 40px;
}

#tbody td {
  color: #fff;
  font-size: 19px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.letra-2-data-imc {
  margin-top: -130px;
}
/* tr:nth-child(5){

  border-radius: 30px 30px 30px 30px;
} */
</style>
<template>
  <div>
    <nav v-if="login == null" class="navbar navbar-expand-lg mt-2">
        <div class="position-absolute top-0 end-0">
          <router-link class="btn btn-outline-danger me-2" to="login">Iniciar sesión</router-link>
          <router-link class="btn btn-outline-danger" to="sign-up">Registrarse</router-link>
        </div>
    </nav>
  </div>
  <div class="iconoImagen">
    <img class="mt-5"
      src="https://www.giztab.com/wp-content/uploads/2022/05/Mundial-Qatar-2022-donde-ver-los-partidos-de-futbol-en-internet.jpg"
      style="width: 600px"
    />
  </div>
  <div class="caja">
    <h2>GRUPO A</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <!--<tr v-for="clasificacion in clasificaciones.slice(0,4)" :key="clasificacion.nombre">-->
      <tr v-for="(clasificacion, index) in clasificaciones.slice(0,4)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO B</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <tr v-for="(clasificacion, index) in clasificaciones.slice(4,8)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO C</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>        
      <tr v-for="(clasificacion, index) in clasificaciones.slice(8,12)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO D</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <tr v-for="(clasificacion, index) in clasificaciones.slice(12,16)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
  </div>
  <div class="caja">
    <h2>GRUPO E</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <tr v-for="(clasificacion, index) in clasificaciones.slice(16,20)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO F</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <tr v-for="(clasificacion, index) in clasificaciones.slice(20,24)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO G</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>
      <tr v-for="(clasificacion, index) in clasificaciones.slice(24,28)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
    <h2>GRUPO H</h2>
    <table class="table2">
      <tr id="base">
        <th>Posicion</th>
        <th>Equipo</th>
        <th>puntos</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
      </tr>        <tr v-for="(clasificacion, index) in clasificaciones.slice(28,32)" :key="clasificacion.nombre">
        <th>{{(index+1)}}</th>
        <th>{{clasificacion.nombre}}</th>
        <th>{{clasificacion.puntos}}</th>
        <th>{{clasificacion.golesFavor}}</th>
        <th>{{clasificacion.golesContra}}</th>
        <th>{{clasificacion.diferenciaGoles}}</th>
      </tr>
    </table>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Clasificaciones',
  data() {
      return {
          clasificaciones: Array,
          login: localStorage.getItem('status')
      }
  },
  created() {
      this.getClasificacion()
  }, 
  methods: {
      async getClasificacion() {
        let url = 'https://d6fb-190-87-162-119.ngrok.io/api/tabla-posiciones'
        await axios.get(url).then(response =>{
            this.clasificaciones = response.data
            console.log(this.clasificaciones)
        }).catch(error => {
            console.log(error)
        })
      },
  },
}
</script>

<style>
table{
border-style: solid;
border-color: #9C254D;
border-collapse: collapse;
}

table tr:nth-child(2) {

	background-color: rgb(130, 243, 167);

}
table tr:nth-child(3) {

	background-color: rgb(130, 243, 167);
}

th{
  border-bottom: 1px solid rgb(247, 8, 8);
}

#base{
background: rgb(233, 130, 130);
}

.crear{
  font-family: sans-serif;
  width: 100%;
  text-transform: uppercase;
  background: #9C254D;
  background-size: cover ;
  padding-top: 200px;
}
.cont{
  width: 28%;
  margin: 0 auto;
  background: url(https://ca-times.brightspotcdn.com/dims4/default/9519f14/2147483647/strip/true/crop/8276x5517+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7e%2Fc7%2Fc498f71f4cb78d09e0846c8318a4%2Fsoccer-wcup-qatar-tickets-48888.jpg)no-repeat 0px 0px ;
  background-size: cover;
  background-position: center;
  padding: 30px 33px 67px;
  border-top: 6px solid rgb(212, 175, 55);
  box-shadow: 0px 35px 44 px -22 rgba(0, 0, 0, 0.72);
}
.dbotones{
  float: right;
}

H2{
  text-align: center;

}

.subirImagen{
   
  text-align: center;
  border: 5px dashed #ddd;
  height: auto;
  width: 600px;
  margin: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

.centro{
  background-position: center;
}

.iconoImagen{
  text-align: center;
  
}

.table2{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
td,th,tr{
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}
.tablafinal{
  height: auto;
  width: auto;
  margin: auto;
  color: rgb(0, 0, 0);

}
.fase_final_cuerpo{
  /*background-image: url(https://media-es.almayadeen.tv/archive/image/2020/6/16/1be58323-037b-442b-8cb3-f3022d06a001.png);*/
  background-size: cover;
  background-color: #B9E0FF;
}
.caja{
  display: table-cell;
  padding: 10px;
  text-align: center;
  height: auto;
  width: 1000px;
  margin: auto;
}

</style>
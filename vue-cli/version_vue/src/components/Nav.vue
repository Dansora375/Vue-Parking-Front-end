<template>
  <div class="navegation">
    <nav>
      <li v-for="dato of opciones_nav.values()">
        {{dato}}
      </li>
    </nav>
  </div>
</template>

<script>
let options_nav={
  "1":"Entrada/salida",
  "2":"Vehiculos",
  "3":"Parqueaderos",
  "4":"Residentes",
  "5":"Hogares"
};

export default {
  name:"Navbar",
  data(){
    return {
      opciones_nav: options_nav,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
.navegation{
    display: inline-block;
    position: fixed;
    width: 20%;
    background-color: $main-color;
    height: 100%;
    
}
.navegation nav{
    list-style: none;
    font-weight: 700;
    color: $secondary-color;
    
}
.navegation nav li{
    text-align: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
}

.navegation .completed:hover{
    background-color: $third-color;
    cursor: pointer ;
}

.navegation .uncompleted{
    font-weight:200 ;
    color: $background-color;
}
</style>
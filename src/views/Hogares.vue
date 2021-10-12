<template>


<Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
  <Navbar class="nav"></Navbar>
<div class= 'hogares'> 
  <div class= 'Navigation'>
    <div class = 'Navigation-Buttons'>
    <button class="boton1">Asignar Parqueadero</button>
    <button class="boton2">TORRE A <img class="menu" src="@/assets/menu.svg" alt=""></button>
    </div>
    <div class="buscar">
        <form action="">
          <label for="buscar">Buscar</label>
          <input type="text">
        </form>
      </div>
    </div>    
  <div class= "homes_row">
    <div class="contenedor" v-for="(item, index) of apto" :key="index">
    <Hogares :apto="item"></Hogares>
    
    </div>
  </div>
</div>
    
    

</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import Hogares from '@/components/ListaHogares.vue';
import Infoapto from '@/components/ModalInfoApto.vue';



export default {
  components:{
    Header,
    Navbar,
    Hogares,
    Infoapto
    
  },

  
  data(){
    return{
      showModal: false,
      apto: [
        {
          numero: 102,
          img: "@/assets/Torre.svg",
        
        },
        {
          numero: 102,
          img: "@/assets/Torre.svg",
        
        },
        
        
                
      ]
  }

  
  },
  methods:{
    showApto(){
    this.showModal=true

  }
  },
};
</script>
  

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';

.Navigation{
  background-color: $main-color;
  display: flex;
  height:45px;
  margin: 5px 10px 0 21% ;
  justify-content: space-between;
  border-radius:10px;
  line-height: 20px;
  
  
}
.homes_row{
  display: flex;
  margin: -30px 10px 0 20% ;
  
}


.boton2{
  background-color: $background-color;
  border-radius: 5px;
  line-height: 5px;
  width: 100px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  font-weight: bold;
  justify-content: space-between;
  cursor:pointer;
  
}
.menu{
  margin-left: 95%;
  margin-top: -15%;
  width:10px;
  height:20px;
  font-weight: bolder;
  
}

.boton1{
  background-color: $background-color;
  border-radius: 5px;
  line-height:5px;
  width: 180px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  font-weight: bold;
  cursor:pointer;
}
.Navigation-Buttons{
  line-height: 30px;
  padding-top: 5px;
}
.buscar{
  padding-right: 15px;
  padding-top: 10px;
  line-height: 0;
}
label{
  color:white;
  font-weight : bold;
}
input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  margin-left: 5px;
  border-radius: 20px;
}
.contenedor{
  margin-right: -70px;
  margin-left: -70px;
  padding-bottom: 10%;


  
  
  

}

  
  




// Arreglando algunos detalles

</style>

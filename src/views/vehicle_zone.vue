<template>
    <div class="vehicle_zone">
        <Header></Header>
        <Navbar></Navbar>
            <div class=" cont-flex">            
                <div class="superior-bar">
                     <div class="prue">.</div>
                    <SearchBar class="search"></SearchBar>
                </div>
                <div class="vehicle-list">
                    <ZonaParqueadero></ZonaParqueadero>
                    
                   
                </div>
            </div>
                <!-- <div class="modal">
                     <info_parqueadero/>
                </div>   -->
                <!-- <div class="modal">
                     <Ing_vclo_visitante/>
                </div>  
            -->
            


    </div>
    

</template>

<script>

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import ZonaParqueadero from '@/components/ZonaParqueadero.vue';
import info_parqueadero from '@/components/Modal_Info_parqueadero.vue'
import Ing_vclo_visitante from '@/components/Mdl_Ingreso_vclo_visitante.vue'


export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar,
    ZonaParqueadero,
    info_parqueadero,
    Ing_vclo_visitante
  },
  
  props:{
        
    },

     data(){

        return{

            info_vehicle_zone:[]
        }
    },
    
    created(){


    },

    methods:{

        show_vehicleZ_data(){ 
        this.axios.get()
        }
    }
           
};
</script>

<style  scoped>

    
    .main {
        
        display:flex;
        
    }
    
    .cont-flex{

        margin-left: 20%;
        
        padding: 20px;
       
    }
  
    
    .prue{

        color: transparent;
    }
    

    
    .vehicle-list{
        
        padding-top: 20px;
        /* background: orange; */
        height: 100%;
    }

    .superior-bar{
    display: flex;
    justify-content: space-between;
  }

  .modal{
    position: fixed;
    display: flex; /* establish flex container */
    justify-content: center; /* center flex items horizontally, in this case */
    align-items: center; /* center flex items vertically, in this case */
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    top: 0;
  }



  @media (max-width: 600px){
    .superior-bar{
      display: block;
      /* align-items: flex-start; */
      

    }
    
    #addImage{
        display:block;  
        width: 40px;
    }
    .search{
        
        display: flex;
        justify-content: flex-end;
        
    }
  }

    
    
</style>
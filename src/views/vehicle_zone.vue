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
                    <!-- <ZonaParqueadero></ZonaParqueadero> -->
                    <!-- <ZonaParqueadero></ZonaParqueadero> -->
                   
                </div>
            </div>

    </div>
    
    
  
</template>

<script>

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import ZonaParqueadero from '@/components/ZonaParqueadero.vue';

export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar,
    ZonaParqueadero

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
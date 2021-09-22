<template>
    <div class="vehicle_zone">
        <Header></Header>
        <Navbar></Navbar>
            <div class=" cont-flex">            
                <div class="superior-bar">
                    
                    <img :src=imageAdd alt="" id="addImage">
                    
                    <SearchBar class="search"></SearchBar>
                </div>
                <div class="vehicle-list">
                    <ZonaParqueadero></ZonaParqueadero>
                </div>
            </div>
        </div>
    
    
  
</template>

<script>

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import ZonaParqueadero from '@/components/ZonaParqueadero.vue';
import addImage from '@/assets/add.svg';
// import {mapState} from 'vuex';

export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar,
    ZonaParqueadero

  },
  
  props:{
        imageAdd:{
            type: String,
            default: addImage
        }
    }
           
};
</script>

<style  scoped>

    
    #P_ocupado{
        
        width: 100%;
        max-width: 100px;
    }
    .main {
        
        display:flex;
        
    }
    
    .cont-flex{

        margin-left: 20%;
        
        padding: 20px;
         /* background:white; */
    }
     /* .cont-flex :first-child{
         background:yellow;
     }
     */
   
    
    .superior-bar{
         /* background:red; */
        display: flex;
        justify-content: center;
        
    }
    #addImage{
         width: 100%;
        max-width: 40px;
        
        
        /* background:red; */
        
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
    /* .superior-bar:first-child{

        
    } */
    #addImage{
        display:block;  
    }
    .search{
        display: flex;
        /* margin-left: 85px; */
        justify-content: flex-end;
        
        /* position: relative; */
        /* right: 20px; */
        

    }
  }

    
    
</style>
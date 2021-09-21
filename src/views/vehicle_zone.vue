<template>

    
    <div class="vehicle_zone">
        <Header></Header>

        <div class="main">
            <!-- si se coloca primero el componente nav bar se descuadra la Configuracion con los flex -->
            <div class=" cont-flex">
                <div id="izquierdo-I"></div>
            </div>
            <!-- componenete nav -->
            <Navbar></Navbar>
            
            <div class=" cont-flex">
                
                <div class="add_y_search">
                    <img src="@/assets/add.svg"  alt="add" id="addImage">
                    <SearchBar></SearchBar>
                </div>

                <div class="vehicle-list">
                    <div class="list">
                        <div class="image">
                            <img src="@/assets/Aparcamiento_ocupado.svg" id="P_ocupado" alt="parqueadero ocupado">
                        </div>
                        <div class="estado_P">
                            ocupado
                        </div>
                        <div class="Num_parquedero">
                            
                        </div>
                        <div class="opcions">
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';


export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar
    
  },
};


</script>

<style lang="scss" scoped>

    #P_ocupado{

        
        width: 100%;
        max-width: 100px;
    }
    .main {
        
        display:flex;
        // background: green ;
        z-index: 1;
        
   
    }

    .main :first-child{

        
        flex:25;
        
    }

    #izquierdo-I{
    
        max-width: 40%;
        height: 100%;
       
        // width: 100%; probar si no afecta despues
        // background: red;
    }
    .cont-flex{
        
        flex: 100;
        // background:white;


    }
    // .cont-flex :first-child{

    //     background:yellow;
    // }
    

    .add-popup{

        background:blue;
        
        
    }

    .list{

        background:lightcoral
    }

    .add_y_search{
        // background:red;

        display: flex;
        justify-content: space-between;

    }

    #addImage{

         width: 100%;
        max-width: 50px;
        padding-right:500px ;
        
    }
    .vehicle-list{
        // background:red;

        padding-top: 50px;
    }
    
    
</style>
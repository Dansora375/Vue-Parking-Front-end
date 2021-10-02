<template>
    <div class="vehicle_zone" @click="close_all_opt()">
        <Header ></Header>
        <Navbar></Navbar>
            <div class=" cont-flex" >            
                <div class="superior-bar">
                     <div class="prue">.</div>
                    <SearchBar class="search"></SearchBar>
                </div>
                <div class="vehicle-list" v-for="(item,index) in info_vehicle_zone" :key="item._id">
                    <ZonaParqueadero  :inf_estado="item.ocupado ?  'Lleno':'Vacio'" :parqueadero_numero="item.apartamento.tower + item.apartamento.apto_num" >
                        
                            <div class="modal_2" v-if="item.state_options"  > 
                                <Options_zona_P>
                                    <div class="opcion_M">
                                        Mas informacion
                                    </div>
                                    <div class="opcion_M" v-show="item.ocupado">
                                        Vaciar Parqueadero
                                    </div>
                                    <div class="opcion_M" v-show="!item.ocupado">
                                        Llennar parqueadero
                                    </div>
                                    <div class="opcion_M" id="Bott_cancel" @click="close_option(index)">
                                        Cancelar
                                    </div>
                                </Options_zona_P>   
                                
                            </div>
                            <img class="menu" :src=Img_add alt="" @click=" open_option(index)"  > <!-- @click="changeShowOptions(true) -->
                        

                    </ZonaParqueadero>
                </div>
            </div>
                <!-- <div class="modal" v-for="(item,index) in info_vehicle_zone" :key="index" >
                     <info_parqueadero/>
                </div>   -->
                <!-- <div class="modal">
                     <Ing_vclo_visitante/>
                </div>  
            -->
            


    </div>
    

</template>

<script>
import Options_zona_P from '@/components/Options_zona_P.vue';


import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import ZonaParqueadero from '@/components/ZonaParqueadero.vue';
import info_parqueadero from '@/components/Modal_Info_parqueadero.vue';
import Ing_vclo_visitante from '@/components/Mdl_Ingreso_vclo_visitante.vue';
import Image_add from '@/assets/menu.svg';
import {mapGetters, mapMutations} from 'vuex';




// ---------------------------------------


export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar,
    ZonaParqueadero,
    info_parqueadero,
    Ing_vclo_visitante,
    Options_zona_P
  },
  
    props:{
        
    },

    data(){

        return{

            info_vehicle_zone:[],
            Img_add:Image_add
           
            
        }
    },
    
    created(){

        this.show_vehicleZ_data();
        
    },
    computed: {
        
        // ...mapState('options_zona_p',['showOptions']),
        ...mapGetters('options_zona_p', ['showOptions'])
    },

    methods:{

        ...mapMutations('options_zona_p', [ 'changeShowOptions']),

        show_vehicleZ_data(){ 
            this.axios.get('/vehicle_zone')
            .then(res => {
                // console.log(res.data)
                this.info_vehicle_zone= res.data;
                // return res.data;
            })
            .catch(e => {            
                 console.log(e.response);
            })
    
        },

        open_option(index){
            // this.info_vehicle_zone.state_options=false;
            this.info_vehicle_zone.forEach(element => {
                element.state_options=false;
            });
            this.info_vehicle_zone[index].state_options=true;

        },
        close_option(index){
            this.info_vehicle_zone[index].state_options=false;

        },
        // close_all_opt(){
        //     this.info_vehicle_zone.forEach(element => {
        //         element.state_options=false;
        //     });
        // }
    
    }
}
</script>

<style lang="scss" scoped >
    @import '@/views/scss/_theme.scss';
    
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
  .menu{
      
        width: 30px;
        
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

  .modal_2{
    position: absolute;
    display: flex; /* establish flex container */
    justify-content: center; /* center flex items horizontally, in this case */
    align-items: center; /* center flex items vertically, in this case */
    /* background-color: rgba(0, 0, 0, 0.5); */
    height: 100%;
    width: 100%;
    top: 0;
  }
  .opcion_M{

      
       padding: 5px;
       font-size: 0.9em;
        min-width:49px;
        cursor: pointer;
        color: $main-color;
        border-bottom:1px solid $main-color;
        position: relative;
        z-index: 100;

    }

    #Bott_cancel{

        border-bottom:none;

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
    .menu{
            width: 20px;
        }
     .opcion_M{

            padding: 2.5px;
            font-size: 0.7em;
        }
  }

    
    
</style>
<template>
    <div class="vehicle_zone" >
        <Header ></Header>
        <Navbar></Navbar>
            <div class=" cont-flex" >            
                <div class="superior-bar">
                    <img class='Imageadd' src="@/assets/add.svg"  alt="">  <!-- @click="toggleModal(true)" -->
                    <SearchBar class="search"></SearchBar>
                </div>
                <div class="vehicle_list" v-for="   (item,index) in resident_list" :key="item._id">
                    <ZonaParqueadero  :inf_estado="item.ocupado ?  'Lleno':'Vacio'" :parqueadero_numero="item.tower + item.apto_num" >
                        <img class="menu" :src=Img_add alt="" @click=" open_option(index)"  > 
                    </ZonaParqueadero>
                </div>
                <div class="vehicle-list" v-for="   (item,index) in ListVisitant" :key="item._id">
                    <ZonaParqueadero  :inf_estado="item.ocupado ?  'Lleno':'Vacio'" :parqueadero_numero="item.tower + item.apto_num + ' -V' " >
                        <img class="menu" :src=Img_add alt="" @click=" open_option(index)"  > 
                    </ZonaParqueadero>
                </div>
            </div>
             <!-- <Options_zona_P>
                                    
                                </Options_zona_P>   -->
                <!-- <div class="modal"  >
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
import {mapGetters, mapMutations, mapActions} from 'vuex';




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

            
            Img_add:Image_add
           
            
        }
    },
    
   created() {
       this.$store.dispatch('entrada_salida/cargar_parq_list');
       this.$store.dispatch('inf_resident/cargar_data_resi');
       },
    computed: {
        
        // ...mapState('options_zona_p',['showOptions']),
        ...mapGetters('inf_resident', ['showOptions','resident_list' ]),
        ...mapGetters('entrada_salida', ['ListVisitant'])
    },

    methods:{

        ...mapMutations('inf_resident', ['changeShowOptions']),
        ...mapActions('inf_resident',['cargar_data_resi','addNewResident']),
        ...mapActions('entrada_salida',['cargar_parq_list'])

        // show_vehicleZ_data(){ 
        //     this.axios.get('/entrada_vehiculo')
        //     .then(res => {
        //         // console.log(res.data)
        //         this.info_vehicle_zone= res.data;
        //         // return res.data;
        //     })
        //     .catch(e => {            
        //          console.log(e.response);
        //     })
    
        // },

        // open_option(index){
        //     // this.info_vehicle_zone.state_options=false;
        //     this.info_vehicle_zone.forEach(element => {
        //         element.state_options=false;
        //     });
        //     this.info_vehicle_zone[index].state_options=true;

        // },
        // close_option(index){
        //     this.info_vehicle_zone[index].state_options=false;

        // },
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
     position: sticky;
    top: 0px;
    background:$background-color;
    z-index: 5;
    padding-bottom: 10px;
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
    .Imageadd{
        
        width: 50px;
    }
  
    

  @media (max-width: 600px){
    .superior-bar{
      display: flex;
      
    }
    
     .Imageadd{
        
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
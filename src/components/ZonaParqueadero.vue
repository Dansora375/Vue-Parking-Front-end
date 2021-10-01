<template>
    <div>
        <section class="item" >
            <img v-if="inf_estado==='Lleno'" :src=Img_ocupado class="parking-img"  alt="parqueadero" >
            <img  v-if="inf_estado==='Vacio'" :src=Img_vacio class="parking-img"  alt="parqueadero" >
            <div class="container-double">
                <div class="State-parking" >
                    <p class="sub-title trescuatro-em" >
                        ESTADO DE PARQUEADERO
                    </p>
                    <p class="inf-estado doble-em" >
                        {{inf_estado}} 
                    </p>
                </div>
                <div class="parking-num">
                    <p class="sub-title  trescuatro-em">
                        Parqueadero número
                    </p>
                    <p class="placa-numero doble-em">
                        {{parqueadero_numero}}
                    </p>
                </div>
            </div>
            <slot >
            </slot>
            <!-- <div class="modal" v-if="showOptions"> 
            <Options_zona_P/>   
            </div>
            <img class="menu" src="@/assets/menu.svg" alt=""  @click="changeShowOptions(true)"> -->
        </section>
    </div>     
</template>

<script>
// import Options_zona_P from '@/components/Options_zona_P.vue';
import P_ocupado from '@/assets/P_ocupado.svg';
import P_vacio from '@/assets/P_vacio.svg';
// import {mapGetters, mapMutations} from 'vuex';

export default {
    name: 'ZonaParqueadero',

    data() {
        return {
            Img_ocupado:P_ocupado,
            Img_vacio:P_vacio

        };
    },
    

    // components: {

    //     Options_zona_P
    // },

    // computed: {
        
    //     // ...mapState('options_zona_p',['showOptions']),
    //     ...mapGetters('options_zona_p', ['showOptions'])
    // },
    // methods: {

    //   ...mapMutations('options_zona_p', [ 'changeShowOptions']),
      
    
    //  },
  
  props: {
    
    
    inf_estado: {
      // Se podria pensar en implementar un Boolean
      type: String,
      default: 'vacio',
    },
    parqueadero_numero: {
      type: String,
      default: 'A1',
    },
    index:{
        type: String,
        default: '',
    }
    
  },
};
</script>

<style lang="scss" scoped>
    @import '@/views/scss/_theme.scss';
    .item *{
        margin:0;
        font-size: medium;
    }
    .item{
        margin-top: 10px    ;
        border-radius: 5px;
        padding:10px ;
        position: relative;

        display: flex;
        border: 2px solid $main-color;
        justify-content: space-between;
        align-items: center;
    }

    

    .container-double{

        display: flex;
        // flex-direction:row;
        justify-content: space-between; 
        // flex-direction: column;
        align-items: center;
        width: 50%;

    }

    .state-parking{

        display:block;
        flex-direction: column;
        // margin-right: 20px;
        margin-left: 20px;
     }
        
    .parking-num{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            margin-right: 20px;
        }

    .parking-img{
        width: 70px;
        
        padding-left: 10px;
    }
    .menu{
        width: 30px;
    }

    .sub-title{
        color: $main-color;
        font-weight: bold;
        // display: block;
    }

    .trescuatro-em{
        font-size: 0.75em;
    }
    .doble-em{
        font-size: 2em;
        font-weight: 900;
    }

    .inf-estado {
        color:$secondary-color;
        display: block;
    }
     .modal{
    position: absolute;
    display: flex; /* establish flex container */
    justify-content: center; /* center flex items horizontally, in this case */
    align-items: center; /* center flex items vertically, in this case */
    // background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    top: 0;
  }


    
    @media (max-width: 530px){
        
        .item div{

            flex-direction:column;
        }
        .trescuatro-em{
            font-size: 0.5em;
        }
        .doble-em{
            font-size: 1.5em;
        }
        // .data *{
        //     display: none;
        // }
        .menu{
            width: 20px;
        }
        .parking-img{
            width: 50px;
            padding-left: 0px;
            padding-right: 8px;
        }
        
        
    }
</style>

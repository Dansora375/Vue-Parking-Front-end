<template>
    <div>
        <section class="item">
            <img src="@/assets/aparcamiento.svg" class="parking-img"  alt="parqueadero">
            <div class="container-double">
                <div class="State-parking">
                    <p class="sub-title trescuatro-em">
                        ESTADO DE PARQUEADERO
                    </p>
                    <p class="inf-estado doble-em">
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
            <div class="model-opcions">
                <div class="opcion_M">
                    Mas informacion
                </div>
                <div class="opcion_M">
                    Vaciar Parqueadero
                </div>
                <div class="opcion_M">
                    Llennar parqueadero
                </div>
                <div class="opcion_M" id="Bott_cancel">
                    Cancelar
                </div>
            </div>
            <img class="menu" src="@/assets/menu.svg" alt="">
        </section>
    </div>     
</template>

<script>

export default {
  name: 'ZonaParqueadero',
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


    

    .model-opcions{

        position: absolute;
        display: flex-flow;
        background:white;
        right: 25px;
        top:70%;
        border-radius:10px;
        border:1px solid $main-color;
        min-width:105px;
        width: 25%;
        // max-width: 250px;
        background:$secondary-color;

    }

    .opcion_M{

        color: $main-color;
        border-bottom:1px solid $main-color;
        padding: 5px;
        font-size: 0.9em;
        min-width:49px;
        // border-radius:1.5px;
    }

    #Bott_cancel{

        border-bottom:none;
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
        
        .opcion_M{

            padding: 2.5px;
            font-size: 0.7em;
        }
    }
</style>

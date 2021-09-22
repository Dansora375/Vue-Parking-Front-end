<template>
    <div>
        <section class="item">
            <img :src=img_route class="parking-img"  alt="parqueadero">
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
            <img class="menu" :src=img_opcions alt="">
        </section>
    </div>     
</template>

<script>
    import default_image from '@/assets/aparcamiento.svg';
    import img_opcions from '@/assets/menu.svg';
    export default {
        name:"ZonaParqueadero",
        props: {
            // Mirar si se podria hacer un a arreglo para meter todas lasimagenes
            img_route:{
                
                type:String,
                // default: '@/assets/predefined_list.svg',
                default:default_image
            },
            img_opcions:{
                type:String,
                default:img_opcions
            },
            inf_estado:{
                // Se podria pensar en implementar un Boolean
                type:String, 
                default:"vacio"
            },
            parqueadero_numero:{

                type:String,
                default:"A1"

            }
            
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/views/scss/_theme.scss';
    .item *{
        margin:0;
        font-size: medium;
    }
    .item{
        border-radius: 5px;
        padding:10px ;

        display: flex;
        border: 2px solid $main-color;
        justify-content: space-between; 
        align-items: center;
    }

    .item {
        display: flex;
        // flex-direction:colum ;
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
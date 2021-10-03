<template>
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
</template>

<script>
export default {
  name: 'Options_zona_P',
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';

    .model-opcions{

        position: absolute;
        display: flex-flow ;
        right: 25px;
        top:70%;
        border-radius:10px;
        border:1px solid $main-color;
        min-width:105px;
        width: 25%;
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

        .opcion_M{

            padding: 2.5px;
            font-size: 0.7em;
        }



    }
    
</style>
<template>
<div class="selecttower">
    <div class="open-modal">
     
    
    <div class="modal-mask" id="modalThumbail">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div class="contenido">
              <div class="titulo">
                  Seleccionar Torre
              </div>
              <div class="list">
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="">  
              
              <div class="pie-icono">
                  TORRE A
              </div>
              </div>
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="">  
              
              <div class="pie-icono">
                  TORRE B
              </div>
              </div>
              
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="" class="rectangle">  
              
              <div class="pie-icono">
                  TORRE C
              
              </div>
              </div>
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="" class="rectangle">  
              
              <div class="pie-icono">
                  TORRE D
              
              </div>
              </div>
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="" class="rectangle">  
              
              <div class="pie-icono">
                  Torre E
              
              </div>
              </div>
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="" class="rectangle">  
              
              <div class="pie-icono">
                  TORRE F
              
              </div>
              </div>
              <div class="icono">
                <img src="@/assets/Rectangle43.svg" alt="" srcset="" class="rectangle">  
              
              <div class="pie-icono">
                  TORRE G
              
              </div>
              </div>

            </div>
            </div>
          </div>
          <div class="footer">
<button class="btn-cerrar" @click="$emit('close')" >Aceptar</button>
</div>
        </div>
        <div class="modal-footer">
        </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
    

}
</script>

<style lang="scss" scoppeed>
@import '@/views/scss/_theme.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  vertical-align: middle;
}

.modal-container {
  width: auto;
  margin-left:760px ;
  padding: 20px 30px;
  background-color:$main-color;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.contenido {
  margin-top: 0;
  background-color: $third-color;
  color: $main-color;
  width: 100%;
 
}

.modal-body {
  margin: 20px 0;
}
.titulo{
    display: flex;
    justify-content: center;
    position: relative;
    margin-left: 20%;
    margin-top: 10%;
    top: 10px;
    background-color: $main-color;
    color:$secondary-color ;
    width: 60%;
    height: 30px;
    font-size: 1.1em;

}
.icono{
margin-left: 5%;
margin-top: 5%;
width: 25%;


display:flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: space-between;

}
.btn-cerrar{
    width: 60%;
    background-color: $third-color;
    color:$main-color ;
    font-weight: 300;
    margin-top: 5%;
    font-size: 1.5em;
}


.list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
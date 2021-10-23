<template>
<div class="selecttower">
    <div class="open-modal">
     
    
    <div class="modal-mask" id="modalThumbail">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
              
              <div class="contenido2">
                  
                  <p>Tipo de Vehiculo</p>
                  <p> Automovil</p>
                  <p>Vehiculo </p>
                  <p> Misubichi Lancer</p>
                  <p>Placa</p>
                  <p>HGB-876</p>
                  <p>Zona de parqueo Asignada</p>
                  <p>A-23</p>
                   <div class="footer">
<button class="btn-cerrar" @click="$emit('close')" >Cerrar</button>
</div>
              </div>
              
              
              
 
        
        
      </div>

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
  margin-left:780px ;
  margin-top: 50px;
  padding: 10px 30px;
  background-color:$main-color;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.contenido {
  margin-top: 10%;
  background-color: $third-color;
  color: $main-color;
  width: 100%;
  height: 100px;
  font-size:1.5em;
  text-align: center;
  border-radius: 5px;
 
}
.contenido2 {
  margin-top: 10%;
  background-color: $third-color;
  color: $main-color;
  width: auto;
  height: auto;
  font-size:1.5em;
  border-radius: 5px;
 
}

.modal-body {
  margin: 20px 0;
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
    background-color: $main-color;
    color:$third-color ;
    font-weight: 300;
    margin-top: 5%;
    font-size: 25px;
    margin-bottom: 5%;
}



.list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
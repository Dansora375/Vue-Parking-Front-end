<template>
  <div class="hello">
    <div class="container">
      <div class="buscar">
        <form action="">
          <label for="buscar">Buscar</label>
          <input type="text">
        </form>
      </div>
    </div>
    </div>
<div class="usuario">
  <div class="icono">
    <img :src= imgUser>
  </div>
  <div>
    <div class="nombre-user">{{Nombre}}</div>
  </div>
</div>
</template>

<script>
import user from '@/assets/user.svg'
export default {
  name: 'ListaResidentes',
  components:{

  },
  data(){

        return{

            imgUser:user
           
            
        }
    },
    props:{
      index: {
      type: Number,
    },
    Nombre: {
      type: String,
      default:"Nombre" ,
    },
    
    id: {
      type: String,
    },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  margin-left:20%;
}

.container{
  margin: 20px;
  width: auto;
  border-radius: 10px;
  background-color:$secondary-color ;
  display: flex;
  justify-content:space-between;
}
.boton{
  margin-top: 5px;
}
.btel{
  background-color: $background-color;
  border-radius: 20px;
  width: 100%;
  height: 50px;
  color:$main-color ;
  margin-left: 20px;
}
.buscar{
  padding-right: 15px;
  padding-top: 10px;
}
label{
  color:white;
}
input{
  background-color: $background-color;
  color:$main-color ;
  height: 30px;
  margin-left: 5px;
  border-radius: 20px;
}

.usuario{
  margin: 20px ;
  width: auto;
  border-radius: 10px;
  background-color:$secondary-color ;
  display:flex;
  flex-wrap: wrap;
      

}
.nombre-user{
  font-size: 2em;
  color:$main-color ;
  margin: 5px;
}
// Arreglando algunos detalles

</style>

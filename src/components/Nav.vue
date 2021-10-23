<template>
  <div class="fixed">
    <div class="navegation">
      <nav class="nav">
        <router-link to="/" class="completed">
          <img src="@/assets/iconos-navigation/entrada.svg" alt="">
          <p>
            Entrada y salida
          </p>
        </router-link>
        <router-link to="/Vehicle_zone" class="completed">
          <img src="@/assets/iconos-navigation/parqueadero2.svg" alt="">
          <p>Parqueadero</p>
        </router-link>

        <router-link to="/Residentes">
          <img src="@/assets/iconos-navigation/people.svg" alt="">
          <p>
            Residentes
          </p>
        </router-link>

        <router-link to="/Hogares">
          <img src="@/assets/iconos-navigation/home.svg" alt="">
          <p>
            Hogares
          </p>
        </router-link>
        <router-link to="/vehiculos">
          <img src="@/assets/iconos-navigation/vehicle.svg" alt="">
          <p>
            Vehiculos
          </p>
        </router-link>

        <router-link to="/vehiculos" v-if="isGerente">
          <img src="@/assets/iconos-navigation/vehicle.svg" alt="">
          <p>
            afklsjhdlkfahjsd
          </p>
        </router-link>
      </nav>
      <div>
        <button id="cerrar-sesion" @click="terminarSesionMethod">cerrar sesión</button>
      </div>

    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['getIsNotLogged', 'getUserData']),
    isGerente () {
      const usuario = this.getUserData
      try {
        // console.log('hola')
        // console.log(usuario.type.toLowerCase(), 'hola')
        return usuario.type.toLowerCase() === 'gerente'
        // console.log(usuario);
        // return true;
      } catch (error) {
        console.error(error)
        return false
      }
    }
  },
  methods: {
    ...mapActions(['terminarSesion']),
    terminarSesionMethod () {
      // console.log(this.getUserData);
      const val = 'Error, no se pudo cerrar sesión'
      try {
        this.terminarSesion()
        // console.log(this.getIsNotLogged)
        if (!this.getIsNotLogged) {
          alert(val)
          console.error(val)
        }
      } catch (error) {
        alert(val)
        console.error(error)
      }
    }

  }

  // data(){
  //   return {
  //     opciones_nav: options_nav,
  //   };
  // },
}
</script>

<style scoped lang="scss">
//importando Tema de la app(solo colores)
@import '@/views/scss/_theme.scss';
.fixed{
  position:fixed;
  padding-top: 100px;
  height: 100%;
  top: 0;
  width: 20%;
}
.navegation{

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $main-color;//Llamando a la variable del color
  // align-items: start;
  height: calc(100vh - 100px);
}
.nav{
  display: flex;
  flex-direction: column;

}
#cerrar-sesion{
  color: $third-color;
}
#cerrar-sesion:hover{
  color: $background-color;
}
a{
  width: 100%;
  padding-top:10px ;
  padding-bottom: 10px;
  color: $third-color;
  &:hover{
    color: $background-color;
  }
  &:active{display: flex;
    color: $background-color;
    background-color:$third-color ;
  }
}

p{
  display: none;
}

@media (min-width: 950px){
  img{
    display: none;
  }
  p{
    display: inline-block;
  }
}

img{
  width: 50px;
  // display: none;
}
// .navegation{
//     display: inline-block;
//     // position: fixed;
//     width: 20%;
//     background-color: $main-color;
//     // height: 100%;
// }
// .navegation nav{
//     list-style: none;
//     font-weight: 700;
//     color: $secondary-color;
// }
// .navegation nav li{
//     text-align: center;
//     width: 100%;
//     padding-top: 15px;
//     padding-bottom: 15px;
// }

// .navegation .completed:hover{
//     color: $third-color;
//     cursor: pointer ;
// }

// .navegation .uncompleted{
//     font-weight:200 ;
//     color: $background-color;
// }

#cerrar-sesion{
  display: inline-block;
}
</style>

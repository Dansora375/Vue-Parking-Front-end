<template>
  <div class="main">
    <div class="cont-flex " >
      <form class="formulario" action="" autocomplete="off">
        <input type="text"   placeholder="Nombre de Usuario" v-model="usuario" >
        <input type="password" placeholder="Contraseña" v-model="contraseña">
        <a href="aquiva irecuperar contrasea" class="olvido-contraseña">¿olvido la contraseña?</a>
        <br><br/>
        <!-- <router-link to="/" class="olvido-contraseña"> -->
        <button class="confirmar" @click="loguin()" >Iniciar Sesion</button>
        <!-- </router-link> -->
        <div id="div_final">
            <span id="pregunta">¿Necesita una cuenta?</span>
            <router-link to="/registrer" class="olvido-contraseña"> Cree una aqui</router-link>
        </div>
      </form>
    </div>
    <div class="cont-flex">
      <div >
        <h1 class="contenido__title" >
          VUEPARKING
        </h1>
        <h1 class="contenido__title" >
          SYSTEM
        </h1>
      </div>
      <div >
        <img src="@/assets/car_logo.svg" alt="logo vue  parking" id="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Inicio',
  data() {
    return {
      usuario: '',
      contraseña: '',
    };
  },
  computed: {
    ...mapGetters(['getUserData', 'getIsNotLogged']),
  },
  methods: {
    ...mapActions(['loginWithUser']),
    loguin() {
      try {
        this.loginWithUser({ user: this.usuario, password: this.contraseña });
        // console.log(this.getUserData);
        // alert(this.getUserData);
        if (!this.getIsNotLogged) {
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss" >
@import '@/views/scss/_theme.scss';

button {
  color: $main-color;
  background: none;
  border: none;
  font-size: medium;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.cancelar {
  border: 2px solid $main-color;
}
.confirmar {
  color: $secondary-color;
  background-color: $main-color;
}

.cancelar:hover {
  background-color: $background-color;
}

.cancelar:active {
  color: $secondary-color;
}

.confirmar:hover {
  background-color: $background-color;
}

.confirmar:active {
  color: $main-color;
}

* {
  padding: 0;
  margin: 0;
}

/*
propiedad para responsive */
.main {
  display: flex;
  flex-wrap: wrap-reverse;
}

// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//   transition: background-color 5000s ease-in-out 0s;
// }

// /* Para cambiar el color de la letra despues de seleccionar el atocomplete o autofill */
// /*Change text in autofill textbox*/

// input:-webkit-autofill {
//   -webkit-text-fill-color: $main-color !important;
// }

/*propiedad padding a los dos con clase .cont-flex (formulario y titulo y logo)*/
.cont-flex {
  flex: 1;
  padding-top: 80px;
  /* No permitia que se diera responsive en el titulo y logo,       PROBAR */

  /* margin-left: auto;
    margin-right: auto;
    width:100%;
     */
}

/* Para el padding que contiene al titulo y logo
NO es necesario ya que el anterior le da a los dos*/
.cont-flex:first-child {
  /* Ponerle esto hacia que ocupara mas campo donde se encontraba el titulo */
  /* flex: 2; */

  /*  para que quede centrado el titulo y logo*/
  padding-top: 0px;
  max-width: auto;
}

/* distancia de separacion entre titulo y logo y pantalla */
.cont-flex div {
  padding-top: 125px;
}

.contenido__title {
  text-align: center;
  font-size: 80px;
  padding-left: 55px;
  padding-right: 50px;
}

#logo {
  /* Para que sea posible centrar la imagen */
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 160px;
}

.formulario {
  width: 80%;
  max-width: 400px;
  min-width: 350px;
  margin: auto;
  justify-content: center;

  display: flex;
  padding-left: 30px;
  padding-right: 45px;

  flex-direction: column;
  padding-top: 280px;
}

.formulario input {
  font-size: 1.1rem;
  margin-top: 25px;
  width: 100%;
  border-bottom: 2px solid $main-color;
  color: $main-color;
  padding-top: 40px;
}

/* pseudo elemento placeholder del input */
// ::placeholder {
//   color: $secondary-color;
//   font-size: 1.2 rem;
// }

.formulario select {
  border: 2px solid $main-color;
  border-radius: 7px;
  color: $main-color;
  background: none;
  margin-top: 40px;
  box-shadow: 0 3px 0 1px $main-color;
  width: 100%;

  height: 50px;
  font-size: 1.1rem;
  font-weight: 900;
  text-align-last: center;
  cursor: pointer;

  /* Replace default styling (arrow) para quitarle la flechita */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Poniendo la flecha como fondo del select */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"> <polygon points="0,0 100,0 50,50" style="fill:%23666666;" /></svg>  ');

  background-position: right 10px top 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  padding-right: 30px;
}

.formulario button {
  margin-top: 35px;
  width: 100%;
  text-align: center;
}

.formulario button:hover {
  background-color: $third-color;
  color: $main-color;
}

#div_final {
  text-align: center;
  vertical-align: middle;
  padding-top: 30px;
  margin-bottom: 50px;
}

#pregunta {
  color: $main-color;
}

.olvido-contraseña {
  color: $secondary-color;
  text-align: right;
  padding-top: 10px;
  right: 0px;
}

.olvido-contraseña:hover {
  color: $main-color;
}

/* Cuando el hancho de la pantalla sea menor que 610 se aplicaran las siguientes propiedades */
@media (max-width: 610px) {
  .contenido__title {
    font-size: 36px;
    padding-left: 45px;
  }

  #logo {
    width: 85px;
  }

  .cont-flex{

    padding-top: 20px ;
  }

  .cont-flex div {
    /* distancia de separacion entre titulo y logo */
    padding-top: 60px;
  }

  .formulario {
    width: 50%;
    min-width: 240px;
    /* Solo cambia el font size de el texto de pregunta e iniciar sesion */
    font-size: 0.9rem;
    padding-top: 30px;
  }

  .formulario input,
  .formulario button {
    font-size: 0.9rem;
  }
  .formulario input {
    padding-top: 20px;
  }

  .formulario button {
    margin-top: 25px;
  }
}
</style>

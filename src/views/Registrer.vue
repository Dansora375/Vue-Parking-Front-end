<template>
  <div class="main"  id="mainRegistro">
    <div class="cont-flex">
      <div class="div">
        <h1 class="contenido__title">VUEPARKING</h1>
        <h1 class="contenido__title">SYSTEM</h1>
      </div>

      <div class="div">
        <img src="@/assets/car_logo.svg" alt="logo vue  parking" id="logo" />
      </div>
    </div>

    <div class="cont-flex">
      <form class="formulario" action="">
        <input
          type="text"
          name="identificacion"
          placeholder="Número de identificacion"
          onInput=""
          v-model="dataRegistro.Cc"/>
        <input
          type="text"
          name="nombrecompleto"
          placeholder="Nombre completo"
          v-model="dataRegistro.name"/>
        <input
          type="text"
          name="Usuario"
          placeholder="Usuario"
          v-model="dataRegistro.user"/>

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          v-model="dataRegistro.email"/>
        <input
          type="email"
          name="repcorreo"
          placeholder="Repetir correo"
          v-model="dataRegistro.repEmail"/>

        <input
          type="password"
          name="contraseña"
          :class="{border_red: isSimilarPassword}"
          placeholder="Contraseña"
          v-model="dataRegistro.password"/>

        <input
          type="password"
          name="repcontsaseña"
          placeholder="Repetir contraseña"
          v-model="dataRegistro.repContraseña"/>

        <br />
        <div class="confirmar button" @click="registrar()">
          <p>
             Registrarse
          </p>
        </div>
        <!-- <button class="confirmar" @click="registrar()">Registrarse</button> -->

        <div id="div_final">
          <span id="pregunta">¿Ya tiene una cuenta?</span>
          <!-- <button>
            ingrese aqui
          </button> -->
          <router-link to="/login" id="inicio_sesion"> Ingrese aqui</router-link>
        </div>
        <!-- <div class="button-test button">
          <p>
            ingrese aqui
          </p>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Registrer',
  data() {
    return {
      dataRegistro: {
        Cc: '',
        name: '',
        user: '',
        email: '',
        repEmail: '',
        password: '',
        repContraseña: '',
      },
      isSimilarPassword: true,
    };
  },
  computed: {
    ...mapGetters(['getUserData', 'getIsNotLogged']),
    // dataRegistro: this.dataR,
  },
  methods: {
    ...mapActions(['register']),
    registrar() {
      // console.log(this.dataRegistro);
      this.register(this.dataRegistro);
      // alert(this.dataRegistro);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
/* ----------------------------------------- */

* {
    padding: 0;
    margin: 0;

}

/*
propiedad para responsive */
.main {
    display: flex;
    flex-wrap: wrap;

}

/* las etiquetas input requieren una eliminacion de estilos anterior a su uso */

/* Zona de botones */

/* las etiquetas button requieren una eliminacion de estilos anterior a su uso */

/* distancia de separacion entre titulo y logo y pantalla */
.cont-flex .div{

    padding-top: 145px;

}

.button div{
  margin: 0;
  padding-top: 0;
}

.button {
  color: $main-color;
  background: none;
  border: none;
  font-size: medium;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}
// .button p{
//   // background: black;
//   // height: min-content;
// }

.confirmar {
  color: $secondary-color;
  background-color: $main-color;
}

.confirmar:hover {
  color: $background-color;
  background-color: $secondary-color;
}

.confirmar:active {
  font-size: 0.8em;
  // color: $secondary-color
}

.cancelar:hover {
  background-color: $background-color;
}

.cancelar:active {
  color: $secondary-color
}

// Manejo de tests
.button-test{
  cursor: pointer;
}
.button-test:hover{
  background-color:$third-color ;
}

.button-test:active{
  background-color:$secondary-color ;
}

/*propiedad padding a los dos con clase .cont-flex (formulario y titulo y logo)*/
.cont-flex {

    flex: 1;
    padding-top: 100px;
    /* No permitia que se diera responsive en el titulo y logo,       PROBAR */

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

/* -------------------------------------------- */
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

/* --------------------------------------------- */

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

}

.formulario input {

    font-size: 1.1rem;
    margin-top: 25px;
    width: 100%;
    border-bottom: 2px solid $main-color;
    color: $main-color;
}

.formulario select {
    margin-top: 40px;
}

.formulario button {

    margin-top: 75px;
    // border: 1px solid $background-color;
    width: 100%;
    text-align: center;

}

.formulario button:hover {

    background-color: $third-color;
    color: $main-color;
}

/* --------------------------------- */

#div_final {

    text-align: center;
    vertical-align: middle;
    padding-top: 30px;
    margin-bottom: 50px;
}

#pregunta {

    color: $main-color;

}

#inicio_sesion {

    color: $secondary-color;
}

#inicio_sesion:hover {

    color: $main-color;

}

/* ------------------------------ */

/* Cuando el hancho de la pantalla sea menor que 610 se aplicaran las siguientes propiedades */
@media (max-width:610px) {

    .contenido__title {

        font-size: 36px;
        padding-left: 45px;
    }

    #logo {

        width: 85px;
    }

    .cont-flex div {

        /* distancia de separacion entre titulo y logo */
        padding-top: 70px;

    }
    .cont-flex{

    padding-top: 60px ;
  }

    .formulario {
        width: 50%;
        min-width: 240px;
        /* Solo cambia el font size de el texto de pregunta e iniciar sesion */
        font-size: 0.9rem;
    }

    .formulario input,
    .formulario select,
    .formulario button {

        font-size: 0.9rem
    }
    .formulario button{

        margin-top:40px;
    }

}
</style>


<template>
  <div class="main"  id="mainRegistro">
    <div class="cont-flex">
      <div>
        <h1 class="contenido__title">VUEPARKING</h1>
        <h1 class="contenido__title">SYSTEM</h1>
      </div>

      <div>
        <img :src=Img_logo alt="logo vue  parking" id="logo" />
      </div>
    </div>

    <div class="cont-flex">
      <form class="formulario" action="">
        <input
          type="text"
          name="identificacion"
          placeholder="Número de identificacion"
        />
        <input
          type="text"
          name="nombrecompleto"
          placeholder="Nombre completo"
        />
        <input type="text" name="Usuario" placeholder="Usuario" />

        <input type="email" name="correo" placeholder="Correo electrónico" />
        <input type="email" name="repcorreo" placeholder="Repetir correo" />

        <input type="password" name="contrseña" placeholder="Contraseña" />
        <input
          type="password"
          name="repcontsaseña"
          placeholder="Repetir contraseña"
        />
        <br />

        <select name="rol">
          <option selected disabled id="S_disabled">Rol</option>
          <option value="gerente">Gerente</option>
          <!-- Desactivar en un futuro -->
          <option value="supervisor">Supervisor</option>
          <option value="celador">Celador</option>
        </select>

        <br />
        <button class="confirmar">Registrarse</button>

        <div id="div_final">
          <span id="pregunta">¿Ya tiene una cuenta?</span>
          <router-link to="/inicio_sesion" id="inicio_sesion"> Ingrese aqui</router-link>
          <div id="nav">
             <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>|
            
            

      
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/car_logo.svg';
export default {
    
    
    name:'Registrer',
    props: {

    Img_logo:{

      type: String,
      default:Logo
    }
  }
  
}
</script>


<style scoped lang="scss">
  
@import '@/views/scss/_theme.scss';

/* las etiquetas input requieren una eliminacion de estilos anterior a su uso */

/* Zona de botones */

/* las etiquetas button requieren una eliminacion de estilos anterior a su uso */
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

input {
    color: $main-color;
    font-family: 'PT Sans Caption', sans-serif;
    background: none;
    border: none;
    outline: 0;
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
    color: $secondary-color
}

.confirmar:hover {
    background-color: $background-color;
}

.confirmar:active {
    color: $secondary-color
}

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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

/* Para cambiar el color de la letra despues de seleccionar el atocomplete o autofill */
/*Change text in autofill textbox*/

input:-webkit-autofill {
    -webkit-text-fill-color: $main-color !important;
}

/* ---------------------------------------- */

/*propiedad padding a los dos con clase .cont-flex (formulario y titulo y logo)*/
.cont-flex {

    flex: 1;
    padding-top: 100px;
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

    padding-top: 145px;

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

/* pseudo elemento placeholder del input */
::placeholder {

    color: $secondary-color;
    font-size: 1.2 rem;
}


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

    margin-top: 75px;
    border: 2px solid $main-color;
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






<template>
<div class= 'Hogares'>
    <Header></Header>
    <!-- <Nav/> -->
    <Navbar></Navbar>
    <SearchButton/>
    </div>
    <div class= 'Navigation'>
    <div class = 'Navigation-Buttons'>
    <button class="boton1">Asignar Parqueadero</button>
    <button class="boton2">TORRE A <img class="menu" src="@/assets/menu.svg" alt=""></button>
    </div>
    <div class="buscar">
        <form action="">
          <label for="buscar">Buscar</label>
          <input type="text">
        </form>
      </div>
    </div>
    <div>
      <ul class = "Apt-numbers">
        <li class ="Number">101</li>
        <li class ="Number">102</li>
        <li class ="Number">103</li>
        <li class ="Number">104</li>
        <li class ="Number">105</li>
        <li class ="Number">201</li>
        <li class ="Number">202</li>
        <li class ="Number">203</li>
        <li class ="Number">204</li>
        <li class ="Number">205</li>
      </ul>
    </div>

    <div class= 'apartments'>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    </div>

    <div>
      <ul class = "Apt-numbers">
        <li class ="Number">301</li>
        <li class ="Number">302</li>
        <li class ="Number">303</li>
        <li class ="Number">304</li>
        <li class ="Number">305</li>
        <li class ="Number">401</li>
        <li class ="Number">402</li>
        <li class ="Number">403</li>
        <li class ="Number">404</li>
        <li class ="Number">405</li>
      </ul>
    </div>

    <div class= 'apartments'>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    </div>
    <div>
      <ul class = "Apt-numbers">
        <li class ="Number">501</li>
        <li class ="Number">502</li>
        <li class ="Number">503</li>
        <li class ="Number">504</li>
        <li class ="Number">505</li>
      </ul>
    </div>

    <div class= 'apartments'>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>
    <button class = 'Apt-button'><img class="Buildings" src="@/assets/Buildings.svg" alt=""></button>

    </div>

</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
  },
};
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';

.Navigation{
  background-color: $main-color;
  display: flex;
  height:45px;
  margin: 5px 10px 0 21% ;
  justify-content: space-between;
  border-radius:10px;
  line-height: 20px;

}
.menu{
  width:10px;
  height:10px;
  font-weight: bolder;
}
.boton2{
  background-color: $background-color;
  border-radius: 5px;
  width: 90px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  font-weight: bold;
  justify-content: space-between;
  cursor:pointer;

}
.boton1{
  background-color: $background-color;
  border-radius: 5px;
  width: 180px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  font-weight: bold;
  cursor:pointer;
}
.Navigation-Buttons{
  line-height: 40px;
}
.buscar{
  padding-right: 15px;
  padding-top: 10px;
  line-height: 0;
}
label{
  color:white;
  font-weight : bold;
}
input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  margin-left: 5px;
  border-radius: 20px;
}
.Apt-numbers{
  display:flex;
  justify-content:left;
  color: $main-color;
  font-weight: bold;
  margin: 5px 10px -10px 21%;
  list-style: none;

}

.Number{

  padding-left: 60px;
  padding-right:57px;

}

.apartments{
  display: flex;
  justify-content:left;
  padding: 10px;
  margin: 5px 10px 0 23%;

}
.Apt-button{
  border-radius: 10px;
  margin:0 30px;
  padding-right:10px;

}

.Buildings{
margin: -10px;
cursor:pointer;

}

// Arreglando algunos detalles

</style>

<template>
<!-- <div></div> -->
  <router-view/>
</template>

<style lang="scss">
@import '@/views/scss/_theme.scss';
body{
  background-color: $background-color;
  margin: 0;
}

#app {
  font-family: 'PT Sans Caption', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-color;
}

// #nav {
//   padding: 0px;
  
//   a {
//     font-weight: bold;
//     color: $third-color;
//     :visited{
//       background: #42b983;
//     }

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
a{
  text-decoration: none;
  // color: $background-color;
}

</style>

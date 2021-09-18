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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

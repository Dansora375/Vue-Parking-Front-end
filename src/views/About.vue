<template>
  <div class="about">
    <Header></Header>
    <Navbar></Navbar>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
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

<style lang="scss" scoped>

</style>

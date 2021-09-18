<template>
  <div class="home">
    <Header></Header>
    <!-- <Navbar></Navbar> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
// import Navbar from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Header,
    // Navbar,
  },
};
</script>

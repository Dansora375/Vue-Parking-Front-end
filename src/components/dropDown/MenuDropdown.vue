<template>
  <!-- <div @click="toggle" v-on-clickaway="away"> -->
  <div  class="model-opcions" v-click-away="away">
    <div @click="toggle">
      <slot name ="toggler">
        <img>
      </slot>
    </div>
    <!-- <slot>
    </slot> -->
    <slot/>
  </div>
</template>

<script>
// import { mixin as clickaway } from 'vue3-click-away';

export default {
  name: 'MenuDropDown',
  // mixins: [clickaway],
  provide() {
    return {
      estadoMenu: this.estadoMenu,
    };
  },
  methods: {
    toggle() {
      // console.log(this.estadoMenu);
      this.estadoMenu.activo = !this.estadoMenu.activo;
    },
    away() {
      this.estadoMenu.activo = false;
    },
  },
  data() {
    return {
      estadoMenu: {
        activo: false,
      },
    };
  },
};
</script>

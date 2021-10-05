<template>
  <!-- <div @click="toggle" v-on-clickaway="away"> -->
    <div @click="toggle" class="model-opcions">
    <slot name ="toggler">
      <img>
    </slot>
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
      console.log(this.estadoMenu);
      this.estadoMenu.activo = !this.estadoMenu.activo;
    },
    away() {
      this.estadoMenu.activo = !this.estadoMenu.activo;
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


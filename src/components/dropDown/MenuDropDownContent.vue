<template>
  <div v-if="active">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MenuDropDownContent',
  inject: ['estadoMenu'],
  computed: {
    active() {
      return this.estadoMenu.activo;
    },
  },
};
</script>

<template>
  <div v-if="active" class="model-opcions">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MenuDropDownContent',
  inject: ['estadoMenu'],
  computed: {
    active () {
      return this.estadoMenu.activo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
.model-opcions{

  position: absolute;
  display: flex-flow ;
  right: 25px;
  top:70%;
  border-radius:10px;
  border:1px solid $main-color;
  min-width:105px;
  width: 25%;
  background:$secondary-color;
  z-index: 200;
}
</style>

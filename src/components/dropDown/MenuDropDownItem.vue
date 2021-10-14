<template>
  <div class="opcion_menu">
      <slot/>
  </div>
</template>

<script>
export default {
  name: 'MenuDropDownItem',
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
.opcion_menu{

        color: $main-color;
        border-bottom:1px solid $main-color;
        padding: 5px;
        font-size: 0.9em;
        min-width:49px;
        cursor: pointer;
        // border-radius:1.5px;
}
// .opcion_menu{

//         color: $main-color;
//         border-bottom:10px solid $main-color;
//         padding: 5px;

//         font-size: 0.9em;
//         min-width:49px;
//         cursor: pointer;
//         // border-radius:1.5px;
// }
</style>

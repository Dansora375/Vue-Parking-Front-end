<template>
  <div>
    <div>
      <modal-2>
        <template v-slot:toggler>
          <p class="button" @click="updateContraseña('')">
            Agregar contraseña
          </p>
        </template>
        <modal-content>
          <div >
            <h1>Agregue la contraseña de su usuario</h1>
            <input  :type="fieldTypes.password"
              v-model="password"
              @focus="handleType"
              @blur="handleType"
              class="input">
          </div>
          <template v-slot:confirmar @click="handleType">
            <button @click="handleType">
              Agregar
            </button>
          </template>
          <template v-slot:cancelar>
            <span></span>
          </template>
        </modal-content>
      </modal-2>
    </div>
  </div>
</template>

<script>
import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'

export default {
  name: 'ModalPassword',
  inject: ['contraseña', 'updateContraseña'],
  components: {
    Modal2,
    ModalContent
  },
  computed: {
    password: {
      set (value) {
        this.updateContraseña(value)
      }
      // return this.contraseña;
    }
  },
  data () {
    return {
      fieldTypes: {
        password: 'text'
      }
    }
  },
  methods: {
    handleType (event) {
      const { type } = event
      // const { value } = srcElement;

      if (type === 'blur') {
        this.fieldTypes.password = 'text'
      } else {
        this.fieldTypes.password = 'password'
      }
    },
    emptyPassword () {
      // this.updateContraseña('');
      this.fieldTypes.password = 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';

.input{
  border-bottom: 1px solid $main-color;
}
</style>

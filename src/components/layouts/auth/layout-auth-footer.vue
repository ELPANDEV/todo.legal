<template>
  <v-box-center-container
    tag="footer"
    id="layout-auth-footer"
  >
    <strong
      slot="container"
      class="text"
    >
      Examen by <b>Todo.Legal</b>
    </strong>
  </v-box-center-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: String
  }
})
</script>

<style lang="scss">
#layout-auth-footer {
  * {
    font-size: 10px;
  }
  .text {
    font-weight: 500;
  }
}
</style>

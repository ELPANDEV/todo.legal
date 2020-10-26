<template>
  <v-box-center-container
    tag="header"
    id="layout-auth-header"
  >
    <router-link
      slot="container"
      to="/"
    >
      <v-svg-todo-legal />
    </router-link>
  </v-box-center-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
#layout-auth-header {
  padding-top: 4px;
  svg {
    width: auto;
    height: 46px;
  }
}
</style>
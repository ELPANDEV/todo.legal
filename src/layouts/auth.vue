<template>
  <div id="layout">
    <v-layout-auth-header />

    <section id="body">
      <slot />
    </section>

    <v-layout-auth-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
#layout {
  display: grid;
  grid-template-rows: 76px calc(100vh - 76px - 48px) 48px;
  #body {
    background-color: #f8f8f8;
    border-radius: 0 56px;
    max-width: 360px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
<template>
  <div id="layout">
    <v-layout-auth-header />

    <v-box-center-container
      tag="section"
      :center="false"
    >
      <v-box-half-rounded
        slot="container"
      >
        <slot />
      </v-box-half-rounded>
    </v-box-center-container>

    <v-layout-auth-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss" scoped>
#layout {
  display: grid;
  grid-template-rows: 76px calc(100vh - 76px - 48px) 48px;
  > .box-center-container {
    max-width: 340px;
    width: 100%;
    margin: 0 auto;
    > .box-half-rounded {
      background-color: #f8f8f8;
    }
  }
}
</style>
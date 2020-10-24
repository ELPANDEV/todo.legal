<template>
  <v-box-center-container
    tag="header"
    id="layout-auth-header"
  >
    <router-link
      slot="container"
      to="/"
    >
      <strong class="domain">
        todo<span class="tlc">.legal</span>
      </strong>
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
  .domain, .tlc {
    font-size: 30px;
    font-weight: 500;
  }
  .domain {
    .tlc {
      color: rgb(100, 200, 200);
      background-color: black;
      border-radius: 0 0 0 4px;
      padding: 0 2px 8px 0;
    }
  }
}
</style>
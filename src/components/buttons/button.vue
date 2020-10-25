<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: grid;
  place-items: center;
}
</style>
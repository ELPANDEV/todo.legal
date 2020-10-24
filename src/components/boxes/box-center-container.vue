<template>
  <component
    :is="tag"
    class="box-center-container"
  >
    <slot name="container" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: String
  }
})
</script>

<style lang="scss">
.box-center-container {
  display: grid;
  place-items: center;
}
</style>

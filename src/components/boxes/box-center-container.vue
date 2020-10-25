<template>
  <component
    :is="tag"
    :style="
      center ? {
        display: 'grid',
        placeItems: 'center'
      } : {}
    "
    class="box-center-container"
  >
    <slot name="container" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: String,
    center: {
      type: Boolean,
      required: false,
      default: true
    }
  }
})
</script>

<style lang="scss">
.box-center-container {
  display: grid;
}
</style>

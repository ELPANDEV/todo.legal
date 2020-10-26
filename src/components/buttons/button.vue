<template>
  <button
    :class="{ anim }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    anim: {
      type: Boolean,
      required: false,
      default: true
    }
  }
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
  transition: .1s;
  &.anim {
    &:active {
      transform: scale(1.1);
    }
  }
}
</style>
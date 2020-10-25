<template>
  <v-button class="button-submit">
    {{ name }}
    <slot name="svg" />
  </v-button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String
  }
})
</script>

<style lang="scss" scoped>
.button-submit {
  justify-self: right;
  width: fit-content;
  border: none;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  column-gap: 9px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
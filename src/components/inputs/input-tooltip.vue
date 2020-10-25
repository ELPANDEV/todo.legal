<template>
  <v-input
    :label="label"
    :type="type"
    :value="value"
    @input="(data) => $emit('input', data)"
  >
    <v-button-tooltip
      :tooltip="tooltip"
    />
  </v-input>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    tooltip: String
  }
})
</script>

<style lang="scss" scoped>
.input {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>
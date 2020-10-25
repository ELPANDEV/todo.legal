<template>
  <p class="form-description">
    {{ description }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    description: String
  }
})
</script>

<style lang="scss" scoped>
.form-description {
  text-align: center;
  font-size: 13px;
  padding: 24px 12px;
  line-height: 1.6;
}
</style>
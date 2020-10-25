<template>
  <div class="box-half-rounded">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss" scoped>
.box-half-rounded {
  border-radius: 0 56px;
}
</style>
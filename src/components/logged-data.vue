<template>
  <div class="logged-data">
    <span class="title">
      {{ title }}
    </span>
    <span class="description">
      {{ description }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    description: String
  }
})
</script>

<style lang="scss">
.logged-data {
  display: grid;
  row-gap: 4px;
  .title {
    color: map-get($map: $color, $key: blueUltraDark);
  }
}
</style>
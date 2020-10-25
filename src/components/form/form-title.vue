<template>
  <component
    :is="tag"
    class="form-title"
  >
    {{ title }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    tag: {
      type: String as () => 'h1'|'h2'|'h3',
      required: false,
      default: 'h1'
    }
  }
})
</script>

<style lang="scss">
.form-title {
  text-align: center;
  font-size: 19px;
  position: relative;
  padding-bottom: 12px;
  color: map-get($map: $color, $key: blueUltraDark);
  &::before {
    top: 100%;
    content: ' ';
    width: 96px;
    background-color: map-get($map: $color, $key: blueUltraDark);
    height: 3px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
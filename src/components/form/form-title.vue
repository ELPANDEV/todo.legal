<template>
  <component
    :is="tag"
    :class="{
      'form-title':    true, 
      'border':        ['center', 'left'].includes(border),
      'border-left':   border == 'left',
      'border-center': border == 'center',
      'border-big':    borderWeight >= 3,
      'border-small':  borderWeight <= 2,
    }"
  >
    {{ title }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    border: {
      type: String,
      required: false,
      default: null
    },
    borderWeight: {
      type: Number,
      required: false,
      default: 3
    },
    tag: {
      type: String as () => 'h1'|'h2'|'h3',
      required: false,
      default: 'h1'
    },
  }
})
</script>

<style lang="scss">
.form-title {
  position: relative;
  color: map-get($map: $color, $key: blueUltraDark);
  &.border {
    &::before {
      top: 100%;
      content: ' ';
      width: 96px;
      background-color: map-get($map: $color, $key: blueUltraDark);
      display: block;
      position: absolute;
    }
  }
  &.border-left {
    &::before { 
      left: 0;
    }
  }
  &.border-center {
    &::before { 
      left: 50%;
      transform: translate(-50%);
    }
  }
  &.border-big {
    &::before { 
      height: 3px;
    }
  }
  &.border-small {
    &::before { 
      height: 2px;
    }
  }
}
</style>
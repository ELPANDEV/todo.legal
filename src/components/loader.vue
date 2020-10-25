<template>
  <div class="curtain">
    <div class="dots">
      <span
        v-for="index in 3"
        :key="index"
        :style="{width: size, height: size}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    size: {
      type: String,
      required: false,
      default: '12px'
    }
  }
})
</script>

<style lang="scss" scoped>
.curtain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #fff, $alpha: 0.6);
  z-index: 9;
  .dots {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    span {
      background-color: green;
      line-height: 1;
      display: block;
      animation-name: dots;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.24s;
      }
      &:nth-child(3) {
        animation-delay: 0.38s;
      }
    }
  }
}

@keyframes dots {
  20% {
    transform: scale(1.8);
  }
  40% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

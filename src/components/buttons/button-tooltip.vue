<template>
  <v-button>
    <v-svg-error-outline
      :class="{ active }"
      :rotation="180"
      @click.native="active = !active"
    />

    <transition name="tooltip">
      <v-box-center-container tag="div"
        v-if="active"
        :class="{ active }"
      >
        <p
          slot="container"
          class="description"
        >
          {{ tooltip }}
        </p>
      </v-box-center-container>
    </transition>
  </v-button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tooltip: String
  },
  data: () => ({
    active: false
  }),
})
</script>

<style lang="scss" scoped>
button {
  position: relative;
  .box-center-container {
    position: absolute;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: 0.24);
    padding: 18px 24px;
    width: 224px;
    top: 100%;
    right: -24px;
    transition: .2s;
    z-index: 1;
    .description {
      font-size: 12px;
      font-weight: 500;
    }
  }
  svg {
    fill: #bbb;
    transition: fill .16s;
    &.active, &:hover {
      fill: map-get($map: $color, $key: app);
    }
  }
}

.tooltip-enter-active, .tooltip-leave-active {
  opacity: 1;
  transform: scale(1);
  top: 100%;
}
.tooltip-enter, .tooltip-leave-to{
  opacity: 0;
  transform: scale(0);
  top: -100%;
}
</style>
<template>
  <div :class="`alert ${alert.type}`">
    <v-button-close
      @click.native="$emit('on-closed')"
    />

    <div class="svg-type-container">
      <v-svg-error-outline    v-if="alert.type      == 'warm'" />
      <v-svg-checkmark-circle v-else-if="alert.type == 'ok'"   />
      <v-svg-text-sms         v-else-if="alert.type == 'info'" />
      <v-svg-tag-faces        v-else-if="alert.type == 'welcome'" />
    </div>

    <strong class="title">{{ alert.title }}</strong>

    <p class="description">{{ alert.description }}</p>
  </div>
</template>

<script lang="ts">
import { Alert } from '@/types/alert'
import Vue from 'vue'
export default Vue.extend({
  props: {
    alert: Object as () => Alert
  }
})
</script>

<style lang="scss">
.alert {
  position: relative;
  border-radius: 36px 0 36px 36px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: 0.24);
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 12px;
  row-gap: 2px;
  width: 100%;
  max-width: 320px;
  padding-right: 24px;
  .svg-type-container {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    place-items: center;
    svg {
      width: 46px;
      height: 46px;
    }
  }
  .title {
    font-size: 14px;
  }
  .description {
    font-size: 12px;
    color: rgb(150, 150, 150);
  }
  .button-close {
    position: absolute;
    right: 6px;
    top: 6px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  &.warm {
    .title {
      color: map-get($map: $color, $key: alert-warm);
    }
    .svg-type-container {
      svg {
        fill: map-get($map: $color, $key: alert-warm);
      }
    }
    .button-close {
      svg {
        fill: map-get($map: $color, $key: alert-warm);
      }
    }
  }
  &.ok, &.welcome {
    .title {
      color: map-get($map: $color, $key: alert-ok);
    }
    .svg-type-container {
      svg {
        fill: map-get($map: $color, $key: alert-ok);
      }
    }
    .button-close {
      svg {
        fill: map-get($map: $color, $key: alert-ok);
      }
    }
  }
  &.info {
    .title {
      color: map-get($map: $color, $key: alert-info);
    }
    .svg-type-container {
      svg {
        fill: map-get($map: $color, $key: alert-info);
      }
    }
    .button-close {
      svg {
        fill: map-get($map: $color, $key: alert-info);
      }
    }
  }
}
</style>

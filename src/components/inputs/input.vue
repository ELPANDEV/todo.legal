<template>
  <div
    :class="{
      input: true,
      active
    }"
  >
    <label
      :for="label"
      :class="{ active }"
    >
      {{ label }}
    </label>

    <input
      :id="label"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="focus()"
      @blur="blur()"
    />
    
    <slot />
  </div>
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
  },
  data: () => ({
    active: false
  }),
  methods: {
    focus() {
      this.active = true
    },
    blur() {
      this.active = this.value.trim() != ''
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
  background-color: #e9e9e9;
  padding: 12px;
  border-radius: 4px 4px 0 0;
  position: relative;
  border: 2px solid transparent;
  transition: background-color .1s;
  label {
    font-size: 14px;
    position: absolute;
    top: calc(50% + 1px);
    left: 12px;
    transform: translateY(-50%);
    transition: .3s;
    cursor: text;
    &.active {
      color: map-get($map: $color, $key: app);
      top: 10px;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
  }
  input {
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    z-index: 1;
  }
  &.active {
    background-color: white;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    border-bottom: 2px solid map-get($map: $color, $key: app);
    padding: 16px 12px 8px 12px;
  }
}
</style>
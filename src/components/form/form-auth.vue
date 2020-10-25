<template>
  <div class="form-auth">
    <v-form-title :title="title" border="center" />

    <v-form-description :description="description" />

    <div class="form">
      <slot />

      <v-button-submit
        :name="submitText"
        :class="{ 'submit-active': submitActive }"
        @click.native="onSubmit()"
      >
        <v-svg-arrow-circle-down slot="svg" :rotation="-90" />
      </v-button-submit>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    submitActive: {
      type: Boolean,
      required: false,
      default: true
    },
    onSubmit:    Function,
    title:       String,
    description: String,
    submitText:  String
  }
});
</script>

<style lang="scss" scoped>
.form-auth {
  padding: 64px 32px 0 32px;
  .form-title {
    text-align: center;
    font-size: 20px;
    padding-bottom: 18px;
  }
  .form {
    display: grid;
    row-gap: 18px;
    .create-account-link {
      font-size: 10px;
      text-align: center;
      font-weight: 500;
    }
    .button-submit {
      opacity: 0.3;
      transition: 0.2s;
      margin-top: 18px;
      &.submit-active {
        opacity: 1;
        color: map-get($map: $color, $key: blue);
        svg {
          fill: map-get($map: $color, $key: blue);
        }
      }
    }
  }
}
</style>
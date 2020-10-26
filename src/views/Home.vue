<template>
  <v-layout-auth>
    <v-box-half-rounded>
      <v-form-title
        title="EL PAN DEV"
        border="center"
      />

      <v-form-description
        description="Para continuar dentro de todo.legal, debes hacer login con tu cuenta"
      />
    </v-box-half-rounded>

    <v-button
      class="button-login"
      @click.native="$router.push({ name: 'auth-login' })"
    >
      <v-svg-arrow-right />
    </v-button>
  </v-layout-auth>
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
.box-half-rounded {
  margin: 24px;
  padding: 32px 24px 0 24px;
  background-color: white;
  .form-title {
    text-align: center;
    font-size: 20px;
    padding-bottom: 18px;
  }
}
.button-login {
  margin: 96px auto 0 auto;
  svg {
    width: 128px;
    height: 128px;
    fill: map-get($map: $color, $key: app);
  }
}
</style>
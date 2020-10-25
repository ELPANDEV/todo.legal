<template>
  <main class="auth-login">
    <v-form-title
      title="Bienvenido Usuario"
    />

    <v-form-description
      description="Por favor ingresa a tu cuenta ingresando tu número de cédula y contraseña. Si no tienes una cuenta en TodoLegal, puedes crear una GRATIS"
    />

    <div class="form">
      <v-input-tooltip
        label="Cédula de Identidad"
        tooltip="Tu cédula debe encontrarse vigente para ingresar al sistema"
        v-model="form.dni"
      />

      <v-input
        label="Contraseña"
        type="password"
        v-model="form.password"
      />

      <router-link
        class="create-account-link"
        to="/user"
      >
        No tengo cuenta, crear cuenta GRATIS
      </router-link>

      <v-button-submit
        name="CONTINUAR"
        :class="{ 'submit-active': submitActive }"
      >
        <v-svg-arrow-circle-down slot="svg"
          :rotation="-90"
        />
      </v-button-submit>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      dni: '',
      password: ''
    },
  }),
  computed: {
    submitActive: {
      get() : boolean {
        return (
          this.form.dni      != '' &&
          this.form.password != ''
        )
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.auth-login {
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
      transition: .2s;
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
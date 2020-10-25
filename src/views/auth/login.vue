<template>
  <main class="auth-login">
    <v-pseudo-screen-logged v-if="$auth.loggedIn" />

    <v-form-auth
      v-else
      title="Bienvenido Usuario"
      description="Por favor ingresa a tu cuenta ingresando tu número de cédula y contraseña. Si no tienes una cuenta en TodoLegal, puedes crear una GRATIS"
      submitText="CONTINUAR"
      :submitActive="submitActive"
      :onSubmit="() => ($auth.loggedIn = true)"
    >
      <v-input-tooltip
        label="Cédula de Identidad"
        tooltip="Tu cédula debe encontrarse vigente para ingresar al sistema"
        v-model="form.dni"
      />

      <v-input label="Contraseña" type="password" v-model="form.password" />

      <router-link class="create-account-link" to="/user">
        No tengo cuenta, crear cuenta GRATIS
      </router-link>
    </v-form-auth>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      dni: '',
      password: ''
    }
  }),
  computed: {
    submitActive: {
      get(): boolean {
        return this.form.dni != '' && this.form.password != ''
      }
    }
  }
})
</script>

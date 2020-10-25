<template>
  <main class="auth-login">
    <v-pseudo-screen-logged v-if="$auth.getters.loggedIn" />

    <v-form-auth
      v-else
      title="Bienvenido Usuario"
      description="Por favor ingresa a tu cuenta ingresando tu número de cédula y contraseña. Si no tienes una cuenta en TodoLegal, puedes crear una GRATIS"
      submitText="CONTINUAR"
      :submitActive="submitActive"
      :onSubmit="() => onSubmit()"
    >
      <v-input-tooltip
        label="Cédula de Identidad"
        tooltip="Tu cédula debe encontrarse vigente para ingresar al sistema"
        v-model="form.username"
      />

      <v-input label="Contraseña" type="password" v-model="form.password" />

      <router-link class="create-account-link" :to="{ name: 'auth-register' }">
        No tengo cuenta, crear cuenta GRATIS
      </router-link>

      <v-loader v-if="loader" />
    </v-form-auth>
  </main>
</template>

<script lang="ts">
import { AuthActionTypes } from '@/store/auth/actions'
import { AuthMutationTypes } from '@/store/auth/mutations'
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      username: '1758700024-2',
      password: 'T3sterR0o*'
    },
    loader: false
  }),
  computed: {
    submitActive: {
      get(): boolean {
        return this.form.username != '' && this.form.password != ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.loader = true

      this.$auth
        .dispatch(AuthActionTypes.LOGIN, this.form)
        .then(response => {
          this.$auth.commit(AuthMutationTypes.SET_USER, response.data)
        })
        .catch(response => {
          console.error(response.errors)
        })
        .finally(() => {
          this.loader = false
        })
    }
  }
})
</script>

<template>
  <main class="auth-login">
    <v-pseudo-screen-logged v-if="loggedIn" />

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

      <router-link
        class="create-account-link"
        :to="{ name: 'auth-register' }"
        @click.native="toCreateAccount()"
      >
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
    loader: false,
    loggedIn: false
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

          this.$store.state.alerts.push({
            id: Math.floor((Math.random() * 999999999999) + 1),
            type: 'welcome',
            title: `Hola ${this.$auth.getters.userName}`,
            description: 'Nos alegra mucha tenerte de vuelta en todo.legal'
          })

          this.loggedIn = true
        })
        .catch(error => {
          const data = error.response.data

          this.$store.state.alerts.push({
            id: Math.floor((Math.random() * 999999999999) + 1),
            type: 'warm',
            title: data.status,
            description: data.msg
          })
        })
        .finally(() => {
          this.loader = false
        })
    },
    toCreateAccount() {
      if (!this.$auth.getters.loggedIn) {
        this.$store.state.alerts.push({
          id: Math.floor((Math.random() * 999999999999) + 1),
          type: 'info',
          title: 'No Authorizado',
          description: 'Según el ejercicio: Se necesita el token de login para crear nuevos usuarios'
        })
      }
    }
  },
  mounted() {
    if (this.$auth.getters.loggedIn) {
      this.$store.state.alerts.push({
        id: Math.floor((Math.random() * 999999999999) + 1),
        type: 'info',
        title: 'Ya has iniciado sesión',
        description: 'Tu cuenta ya ha sido verificada, ahora puedes hacer uso de todas nuestras herramientas'
      })
    }
  }
})
</script>

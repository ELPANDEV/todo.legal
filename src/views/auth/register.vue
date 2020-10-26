<template>
  <v-form-auth
    title="Crear Cuenta Gratis"
    description="Ingresa los siguientes datos para registrarte como un nuevo usuario"
    submitText="registrarme"
    :submitActive="submitActive"
    :onSubmit="() => onSubmit()"
  >
    <v-input label="Cédula de Identidad" v-model="form.username" />

    <v-input label="Contraseña" type="password" v-model="form.password" />

    <v-input
      label="Confirmar Contraseña"
      type="password"
      v-model="form.password_confirmation"
    />

    <v-loader v-if="loader" />
  </v-form-auth>
</template>

<script lang="ts">
import { AuthActionTypes } from '@/store/auth/actions'
import { RegisterForm } from '@/types/register-form'
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      username:              `1758700024-${Math.floor((Math.random() * 999999) + 1)}`,
      password:              'T3sterR0o*',
      password_confirmation: 'T3sterR0o*'
    } as RegisterForm,
    loader: false
  }),
  computed: {
    submitActive: {
      get(): boolean {
        return (
          this.form.username != '' &&
          this.form.password != '' &&
          this.form.password_confirmation != ''
        )
      }
    }
  },
  methods: {
    validator() : boolean {
      const passwordConfirmation = this.form.password == this.form.password_confirmation

      if (!passwordConfirmation) {
        this.$store.state.alerts.push({
          id: Math.random(),
          type: 'warm',
          title: 'Contraseña Invalida',
          description: 'La contraseñas no coinciden, verifica y vuelve a intentarlo'
        })
      }

      return (
        this.form.username != '' &&
        this.form.password != '' &&
        passwordConfirmation
      )
    },
    onSubmit() {
      if (this.validator()) {
        this.loader = true

        this.$auth
          .dispatch(AuthActionTypes.REGISTER, this.form)
          .then(response => {
            this.$store.state.alerts.push({
              id: Math.random(),
              type: 'ok',
              title: '¡Registro Exitoso!',
              description: 'Tu registro se ha realizado con éxito'
            })
          })
          .catch(error => {
            const data = error.response.data

            this.$store.state.alerts.push({
              id: Math.random(),
              type: 'warm',
              title: data.status,
              description: data.msg
            })
          })
          .finally(() => {
            this.loader = false
          })
      }
    }
  }
})
</script>

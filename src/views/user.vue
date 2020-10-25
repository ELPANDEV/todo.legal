<template>
  <v-layout-auth>
    <v-form-auth
      title="Crear Cuenta Gratis"
      description="Ingresa los siguientes datos para registrarte como un nuevo usuario"
      submitText="registrarme"
      :submitActive="submitActive"
      :onSubmit="() => onSubmit()"
    >
      <v-input label="Cédula de Identidad" v-model="form.dni" />

      <v-input label="Contraseña" type="password" v-model="form.password" />

      <v-input
        label="Confirmar Contraseña"
        type="password"
        v-model="form.passwordConfirmation"
      />
    </v-form-auth>
  </v-layout-auth>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    form: {
      dni: '',
      password: '',
      passwordConfirmation: ''
    }
  }),
  computed: {
    submitActive: {
      get(): boolean {
        return (
          this.form.dni != '' &&
          this.form.password != '' &&
          this.form.passwordConfirmation != ''
        )
      }
    }
  },
  methods: {
    onSubmit() {
      this.$auth.state.loggedIn = true
    }
  }
})
</script>

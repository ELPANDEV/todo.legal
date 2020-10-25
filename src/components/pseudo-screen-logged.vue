<template>
  <div class="pseudo-screen-logged">
    <v-svg-checkmark-circle />

    <v-form-title
      title="¡Validación Exitosa!"
    />

    <v-box-half-rounded>
      <v-form-title
        title="Datos Verificados"
        border="left"
        :border-weight="2"
      />

      <div class="information">
        <v-logged-data
          title="Nombres y Apellidos"
          :description="$auth.getters.userName"
        />      

        <v-logged-data
          title="Cédula de Identidad"
          :description="$auth.state.user.username"
        />      
      </div>

    </v-box-half-rounded>

    <v-button-submit
      name="FINALIZAR"
    >
      <v-svg-arrow-circle-down
        slot="svg"
        :rotation="-90"
      />
    </v-button-submit>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss" scoped>
.pseudo-screen-logged {
  display: grid;
  padding: 0 28px;
  .checkmark-circle {
    width: 48px;
    height: 48px;
    margin: 18px auto 24px auto;
    fill: map-get($map: $color, $key: greenConfirmation);
  }
  > .form-title {
    text-align: center;
    font-size: 20px;
    padding-bottom: 18px;
  }
  .box-half-rounded {
    background-color: white;
    padding: 24px 32px;
    > .form-title {
      padding-bottom: 12px;
    }
    .information {
      display: grid;
      row-gap: 12px;
      padding: 24px 0;
    }
  }
  .button-submit {
    margin-top: 24px;
    color: map-get($map: $color, $key: blue);
    svg {
      fill: map-get($map: $color, $key: blue);
    }
  }
}
</style>
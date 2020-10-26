<template>
  <div class="alerts">
    <transition-group name="list-complete">
      <v-alert
        class="list-complete-item"
        v-for="alert in $store.state.alerts"
        :key="alert.id"
        :alert="alert"
        @on-closed="removeAlert(alert.id)"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Alert } from '@/types/alert'
import Vue from 'vue'
export default Vue.extend({
  methods: {
    removeAlert(id: number) {
      const index = this.$store.state.alerts.findIndex((alert: Alert) => alert.id == id)

      this.$store.state.alerts.splice(index, 1)
    }
  }
})
</script>

<style lang="scss" scoped>
.alerts {
  > span {
    display: grid;
    row-gap: 12px;
    position: fixed;
    bottom: 24px;
    right: 0;
    left: 0;
    justify-items: center;
    .alert {
      transition: 0.6s;
    }
  }
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media screen and (min-width: 640px) {
  .alerts {
    > span {
      left: auto;
      right: 24px;
    }
  }
}
</style>
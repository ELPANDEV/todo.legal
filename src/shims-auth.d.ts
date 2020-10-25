import { Store } from "./store/auth/store";

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Store
  }
}
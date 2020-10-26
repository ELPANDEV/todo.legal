import { Store as AuthStore } from '@/store/auth/store';
import { NavigationGuardNext, Route } from "vue-router";
import { Store } from 'vuex';

export interface MidlewareContextTypes {
  to: Route,
  from: Route,
  next: NavigationGuardNext,
  store: Store<any>,
  auth: AuthStore
}
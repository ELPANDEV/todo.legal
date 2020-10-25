import { Store } from '@/store/auth/store';
import { NavigationGuardNext, Route } from "vue-router";

export interface MidlewareContextTypes {
  to: Route,
  from: Route,
  next: NavigationGuardNext,
  store: Store,
  auth: Store
}
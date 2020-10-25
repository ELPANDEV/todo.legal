import { GetterTree } from 'vuex'
import { state, State } from './state'

export type Getters = {
  loggedIn(state: State): boolean
  userName(state: State): string
}

export const getters: GetterTree<State, State> & Getters = {
  loggedIn: state => state.user.access_token != null,
  userName: state => {
    return `${state.user.name} ${state.user.lastname}`
  }
}

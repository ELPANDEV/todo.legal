import { GetterTree } from 'vuex'
import { state, State } from './state'

export type Getters = {
  loggedIn(state: State): string
  userName(state: State): string
}

export const getters: GetterTree<State, State> = {
  loggedIn: state => state.user.accessToken != null,
  userName: state => {
    return `${state.user.name} ${state.user.lastname}`
  }
}

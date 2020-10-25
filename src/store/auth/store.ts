import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { State, state } from './state'
import { Actions, actions } from './actions'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'

export const store = new VuexStore({
  state,
  actions,
  getters,
  mutations
})

export type Store = Omit<
  VuexStore<State>,
  'commit'|'getters'|'dispatch'
> &
{
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} &
{
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
import { LoginResponse } from '@/types/login-response'
import { MutationTree } from 'vuex'
import { State } from './state'

export enum AuthMutationTypes {
  SET_USER = 'SET_USER',
}

export type Mutations<S = State> = {
  [AuthMutationTypes.SET_USER](state: S, payload: LoginResponse): void
}

export const mutations: MutationTree<State> & Mutations = {
  [AuthMutationTypes.SET_USER](state, payload: LoginResponse) {
    state.user = payload
  },
}
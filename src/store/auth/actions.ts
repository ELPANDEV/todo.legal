import { LoginForm } from '@/types/login-form'
import Axios from 'axios'

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
}

export const actions = {
  [AuthActionTypes.LOGIN]({ commit } : any, form: LoginForm) {
    const api = 'https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/auth/login'

    return Axios.post(api, form).then()
  },
}

export type Actions = typeof actions
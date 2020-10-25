import { LoginForm } from '@/types/login-form'
import { RegisterForm } from '@/types/register-form'
import Axios from 'axios'
import { state } from './state'

export enum AuthActionTypes {
  LOGIN    = 'LOGIN',
  REGISTER = 'REGISTER',
}

export const actions = {
  [AuthActionTypes.LOGIN]({ commit } : any, form: LoginForm) {
    const api = 'https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/auth/login'

    return Axios.post(api, form).then()
  },
  [AuthActionTypes.REGISTER]({ commit } : any, form: RegisterForm) {
    const api   = 'https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/user'
    const token = state.user.access_token
    const type  = state.user.token_type

    form.name         = state.user.name
    form.last_name    = state.user.lastname
    form.phone_number = '123456789'
    form.email        = state.user.email

    return Axios.post(api, form, {
      headers: {
        Authorization: `${type} ${token}`
      }
    })
  },
}

export type Actions = typeof actions
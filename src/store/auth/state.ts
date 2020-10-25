import { LoginResponse } from '@/types/login-response'

export const state = {
  loggedIn: false,
  user: {
    access_token: null,
    token_type: 'Bearer',
    name: '',
    lastname: '',
    username: ''
  } as LoginResponse
}

export type State = typeof state

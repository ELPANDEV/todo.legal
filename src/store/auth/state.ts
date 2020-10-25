import { LoginResponse } from '@/types/login-response'

export type State = {
  loggedIn: boolean,
  user: {
    accessToken: string|null,
    tokenType:   string,
    name:        string,
    lastname:    string,
    username:    string
  }
}

export const state: State = {
  loggedIn: false,
  user: {
    accessToken: null,
    tokenType: 'Bearer',
    name: '',
    lastname: '',
    username: ''
  }
}
import { MidlewareContextTypes } from '@/types/midleware-context'

const auth = ({ next, auth } : MidlewareContextTypes) => {
  if(!auth.getters.loggedIn){
      return next({
         name: 'auth-login'
      })
  }
 
  return next()
}

export default auth
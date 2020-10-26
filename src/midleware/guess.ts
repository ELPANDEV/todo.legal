import { MidlewareContextTypes } from '@/types/midleware-context'

const guess = ({ next, auth } : MidlewareContextTypes) => {
  if(auth.getters.loggedIn){
      return next({
         name: 'home'
      })
  }
 
  return next()
}

export default guess
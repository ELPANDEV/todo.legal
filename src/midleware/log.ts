import { MidlewareContextTypes } from '@/types/midleware-context'

const log = ({ next, to } : MidlewareContextTypes) => {
  console.log(to.name)

  return next()
}

export default log
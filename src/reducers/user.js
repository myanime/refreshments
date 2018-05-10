import C from '../constants'

const user = (state = "admin", action) => {
  switch (action.type){
    case C.CHANGE_USERNAME:
      return action.username
    default:
      return state
  }
}

export default user
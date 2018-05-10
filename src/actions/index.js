import C from '../constants'

export const changeUserName = (username) => ({
  type: C.ADD_USER,
  username: username
})

export const changeLocation = (location) => ({
  type: C.CHANGE_LOCATION,
  location: location
})

export const removeItem = (id) => ({
  type: C.REMOVE_ITEM,
  id: id
})

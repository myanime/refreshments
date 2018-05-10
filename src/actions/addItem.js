import C from '../constants'
import {v4} from 'uuid'
import axios from 'axios'
export const addItem = (product) => {
  const newUser = {
    type: C.ADD_ITEM,
    id: v4(),
    product: product
  }
  return newUser
}

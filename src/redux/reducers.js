import { TYPE_ACTIONS } from '../utils/constants'
import { inicialState } from './store'

function newArray (dataArray, i, eleEdited) {
  const newArray = []
  dataArray.map((elem, index, arr) => {
    index === i ? newArray[index] = eleEdited : newArray[index] = elem
    return arr
  })
  return newArray
}

const reducers = (state = inicialState, action) => {
  console.log('estoy en reducers')
  console.log('state ', state)
  console.log('actions ', action)
  switch (action.type) {
    case TYPE_ACTIONS.ADD_REGISTER_BRAND:
      return Object.assign({}, state, {
        registerBrandData: action.data
      })
    default:
      return state
  }
}
export default reducers

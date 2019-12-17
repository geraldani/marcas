import { TYPE_ACTIONS } from '../utils/constants'
import { inicialState } from './store'

const reducers = (state = inicialState, action) => {
  switch (action.type) {
    case TYPE_ACTIONS.ADD_REGISTER_BRAND:
      return Object.assign({}, state, {
        registerBrandData: action.data
      })
    case TYPE_ACTIONS.ADD_PASSWORD:
      return Object.assign({}, state, {
        password: action.pass
      })
    case TYPE_ACTIONS.ADD_PAPERWORK:
      return Object.assign({}, state, {
        allPaperWorks: action.paperworks
      })
    default:
      return state
  }
}
export default reducers

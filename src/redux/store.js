import { createStore } from 'redux'
import reducers from './reducers'

const user = JSON.parse(window.localStorage.getItem('user'))
export const initialState = user ? { loggedIn: true, user } : {}

const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store

import { createStore } from 'redux'
import reducers from './reducers'
import { createBrowserHistory } from 'history'
import { LocalStorage } from '../utils/constants'

const user = JSON.parse(window.localStorage.getItem(LocalStorage.user))
export const initialState = user ? { loggedIn: true, user } : {}
export const history = createBrowserHistory()
const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store

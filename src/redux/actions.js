import { ROUTES, TYPE_ACTIONS } from '../utils/constants'
import { userService } from './services'
import { history } from './store'

/*const success = (message) => ({ type: ALERT_ACTIONS.SUCCESS, message })
const error = (message) => ({ type: ALERT_ACTIONS.ERROR, message })
const clear = () => ({ type: ALERT_ACTIONS.CLEAR })*/

function login (email, password) {
  return dispatch => {
    dispatch(request({ email }))

    userService.login(email, password)
     /* .then(
        user => {
          dispatch(success(user))
          history.push(ROUTES.dashboard)
        },
        error => {
          dispatch(failure(error))
          // dispatch(alertActions.error(error))
        }
      )*/
  }

  function request (user) { return { type: TYPE_ACTIONS.LOGIN_REQUEST, user } }
  function success (user) { return { type: TYPE_ACTIONS.LOGIN_SUCCESS, user } }
  function failure (error) { return { type: TYPE_ACTIONS.LOGIN_FAILURE, error } }
}

export const userActions = {
  login
}

/*export const alertActions = {
  success, error, clear
}*/

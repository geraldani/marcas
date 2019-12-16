import { TYPE_ACTIONS, ALERT_ACTIONS } from '../utils/constants'

/*
const addRegisterBrand = (data) => {
  if (data) {
    return { type: TYPE_ACTIONS.ADD_REGISTER_BRAND, data }
  }
}

const addPassword = (pass) => {
  return { type: TYPE_ACTIONS.ADD_PASSWORD, pass }
}

const addPaperWorks = (paperworks) => {
  return { type: TYPE_ACTIONS.ADD_PAPERWORK, paperworks }
}
*/

/* alert actions */

const success = (message) => ({ type: ALERT_ACTIONS.SUCCESS, message })
const error = (message) => ({ type: ALERT_ACTIONS.ERROR, message })
const clear = () => ({ type: ALERT_ACTIONS.CLEAR })

// export { addRegisterBrand, addPassword, addPaperWorks }
export const alertActions = {
  success, error, clear
}

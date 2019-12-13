import { TYPE_ACTIONS } from '../utils/constants'

const addRegisterBrand = (data) => {
  if (data) {
    return {
      type: TYPE_ACTIONS.ADD_REGISTER_BRAND,
      data
    }
  }
}

const addPassword = (pass) => {
  return {
    type: TYPE_ACTIONS.ADD_PASSWORD,
    pass
  }
}

const addPaperWorks = (paperworks) => {
  return {
    type: TYPE_ACTIONS.ADD_PAPERWORK,
    paperworks
  }
}

export { addRegisterBrand, addPassword, addPaperWorks }

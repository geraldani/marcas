import { TYPE_ACTIONS } from '../utils/constants'

const addRegisterBrand = (data) => {
  if (data) {
    return {
      type: TYPE_ACTIONS.ADD_REGISTER_BRAND,
      data
    }
  }
}

export { addRegisterBrand }

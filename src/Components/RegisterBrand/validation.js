import { isEmailValid } from '../utils'

const validation = (state, actualStep) => {
  const errors = {}
  switch (actualStep) {
    case 1:
      if (state.countryRegister.value.length === 0) errors.countryRegister = 'Seleccione al menos un pais'
      break
    case 2:
      if (!state.email.value) errors.email = 'Debe proporcionar un email'
      else if (!isEmailValid(state.email.value)) errors.email = 'El correo introducido no es valido'
      break
  }
  return errors
}
export default validation

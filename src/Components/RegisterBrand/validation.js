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

      if (!state.name.value) errors.name = 'Debe proporcionar un nombre'
      if (!state.surname.value) errors.surname = 'Debe proporcionar un apellido'
      if (!state.countryGestor.value) errors.countryGestor = 'Seleccione un pais'
      if (!state.cuit.value) errors.cuit = 'Introduzca su cuit'
      break
  }
  return errors
}
export default validation

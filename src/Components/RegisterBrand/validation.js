import { isEmailValid, isHexColor } from '../../utils'

const hayMarcaSelected = (marcas) => {
  let checked = false
  marcas.forEach(elem => {
    if (elem.value) checked = true
  })
  return checked
}

export const validateRegisterUser = (data) => {
  const errors = {}
  Object.keys(data).forEach(e => {
    if (!data[e]) {
      errors[e] = 'Campo requerido'
    } else if (e === 'email' && !isEmailValid(data[e])) {
      errors[e] = 'El correo introducido no es valido'
    } else if (e === 'password' || e === 'repeatPassword') {
      if (data.password && data.repeatPassword) {
        if (data.password !== data.repeatPassword) {
          errors.passDontMatch = 'Las contraseñas no coinciden'
        }
      }
    }
  })
  return errors
}

const validation = (state, actualStep) => {
  const errors = {}
  switch (actualStep) {
    case 1:
      if (state.countryRegister.value.length === 0) errors.countryRegister = 'Seleccione al menos un pais'
      break
    case 2:
      // validacion del correo
      if (!state.email.value) errors.email = 'Introduzca un email'
      else if (!isEmailValid(state.email.value)) errors.email = 'El correo introducido no es valido'

      if (!state.name.value) errors.name = 'Introduzca un nombre'
      if (!state.surname.value) errors.surname = 'Introduzca un apellido'
      if (!state.countryGestor.value) errors.countryGestor = 'Seleccione un pais'
      if (!state.cuit.value) errors.cuit = 'Introduzca su Cuit'
      if (state.registerType.value === 'empresa' && !state.razonSocial.value) errors.razonSocial = 'Introduzca la razon social'
      break
    case 3:
      if (!state.brandName.value) errors.brandName = 'Introduzca el nombre de su marca'
      if (!state.file.value) errors.file = 'Por favor, suba un archivo'
      if (!state.width.value) errors.width = 'Introduzca el ancho de su logo'
      if (!state.height.value) errors.height = 'Introduzca el alto de su logo'
      if (!hayMarcaSelected(state.marcaType.options)) errors.marcaType = 'Seleccione al menos un tipo de registro'
      // validacion del color
      if (!state.color.value) errors.color = 'Seleccione un color'
      else if (!isHexColor(state.color.value)) errors.color = 'Color no válido'
      break
    case 4:
      if (!state.countryPrevious.value) errors.countryPrevious = 'Seleccione un pais'
      if (!state.nroRegistro.value) errors.nroRegistro = 'Introduzca un número de registro o acta'
      break
    case 5:
      if (!state.productService.value) errors.productService = 'Introduzca el nombre de su producto o servicio'
      break
  }
  return errors
}
export default validation

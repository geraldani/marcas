// funciones de utlidades para el resto de los componentes

const setViewUp = () => window.scroll(0, 0) // pone el viewport al principio de la pagina
const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email) // para validar si el correo es valido

const isHexColor = hex => {
  const regex = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/
  return typeof hex === 'string' && regex.test(hex)
  // return typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
}

export {
  setViewUp,
  isEmailValid,
  isHexColor
}

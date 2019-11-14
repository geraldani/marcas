// funciones de utlidades para el resto de los componentes

const setViewUp = () => window.scroll(0, 0) // pone el viewport al principio de la pagina
const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email) // para validar si el correo es valido

export {
  setViewUp,
  isEmailValid
}

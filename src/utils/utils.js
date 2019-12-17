/** funciones de utlidades para el resto de los componentes */

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

/* pone el viewport al principio de la pagina */
const setViewUp = () => window.scroll(0, 0)

/* valida si un correo es valido siguiendo un patron */
const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email)

/* valida si una cadena es un color en hexadecimal valido */
const isHexColor = hex => {
  const regex = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/
  return typeof hex === 'string' && regex.test(hex)
  // return typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
}

/* habilita el scroll de una pagina */
const enableScroll = () => {
  window.onscroll = () => {}
  // document.removeEventListener('scroll', () => window.scrollTo(scrollLeft, scrollTop))
}

/* desabilita el scroll de una pagina */
const disableScroll = () => {
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
  // document.addEventListener('scroll', () => window.scrollTo(scrollLeft, scrollTop))
}

/* formatea una fecha con el siguiente formato: Dia hora:minutos */
const dateFormattedTable = (date) => `${DAYS[date.getDay()].substr(0, 3)} ${date.getHours()}:${date.getMinutes()}`

/* formatea una fecha con el siguiente formato: dia/mes/año */
const dateFormattedNormal = (date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

/* retorna si un objeto esta vacio */
const isEmptyObject = (obj) => Object.keys(obj).length === 0

/* retorna si un array esta vacio */
const isEmptyArray = (arr) => arr.length === 0

/* funcion que ordena un vector */
const sortArray = (array, order = 'asc', key) => { // el key es por si el vector esta compuesto por objetos, el key sera la clave para ordernar el vector
  const compare = (a, b) => {
    let bandA
    let bandB
    if (key) {
      bandA = typeof (a[key]) === 'string' ? a[key].toUpperCase() : a[key]
      bandB = typeof (b[key]) === 'string' ? b[key].toUpperCase() : b[key]
    } else {
      bandA = a
      bandB = b
    }
    let comparision = 0

    if (bandA > bandB) comparision = 1
    if (bandB > bandA) comparision = -1

    return (order === 'desc' ? comparision * -1 : comparision)
  }

  return array.slice().sort(compare)
}

/* funcion que pone una palabra con la primera le tra en mayuscula */
const upperFirstLetter = (word) => word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase())

export {
  enableScroll,
  disableScroll,
  setViewUp,
  isEmailValid,
  isHexColor,
  dateFormattedTable,
  dateFormattedNormal,
  isEmptyArray,
  isEmptyObject,
  sortArray,
  upperFirstLetter
}

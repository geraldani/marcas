// funciones de utlidades para el resto de los componentes

const setViewUp = () => window.scroll(0, 0) // pone el viewport al principio de la pagina
const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email) // para validar si el correo es valido

const isHexColor = hex => {
  const regex = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/
  return typeof hex === 'string' && regex.test(hex)
  // return typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
}

const enableScroll = () => {
  window.onscroll = () => {}
  // document.removeEventListener('scroll', () => window.scrollTo(scrollLeft, scrollTop))
}

const disableScroll = () => {
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
  // document.addEventListener('scroll', () => window.scrollTo(scrollLeft, scrollTop))
}

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const dateFormattedTable = (date) => `${days[date.getDay()].substr(0, 3)} ${date.getHours()}:${date.getMinutes()}`
const dateFormattedNormal = (date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
const isEmptyObject = (obj) => Object.keys(obj).length === 0
const isEmptyArray = (arr) => arr.length === 0

//funcion que ordena un vector
const sortArray = (array, order = 'asc', key) => {
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

//funcion que pone una palabra con la primera le tra en mayuscula
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

const COLOR = {
  // primary: '#8e2efd',
  primary: '#6d2e80',
  white: '#ffffff',
  black: '#000',
  transparent: 'transparent',
  darkGrey: '#4a4a4a',
  grey: '#eee',
  lightGrey: '#f5f5f5',
  textColor: '#6c757d',
  mediumGray: '#d1d5e0',
  aqua: '#5cf8ea',
  blue: '#4990e2',
  lighBlue: '#b5d2f2',
  mediumBlue: '#8bb9ed',
  darkBlue: '#303e5b',
  red: 'rgba(171,1,0,0.82)',
  border: 'rgba(0, 0, 0, 0.125)'
}

const ROUTES = {
  home: '/',
  registerBrand: '/registrar-marca',
  finishRegister: '/finish-register',
  beginBrand: '/inicio-tramite',
  moreInfo: '/info',
  orderDetail: '/order-detail',
  faq: '/faqs',
  terms: '/terms-and-conditions',
  login: '/signin',
  register: '/signup',
  contact: '/contact-with-us',
  otherTrams: '/otros-tramites',
  searchBrand: '/busca-tu-tramite',
  writeContact: '/write-us',
  domain: '/disputa-dominio',
  seeRegister: '/registro',
  dashboard: '/dashboard'
}

const EDNPOINTS = {
  registerUserWithBrand: 'https://marcas-api-test.herokuapp.com/paperwork/new',
  login: 'https://marcas-api-test.herokuapp.com/user/authenticate',
  registerUser: 'https://marcas-api-test.herokuapp.com/user/register'
}

// for media queries screens
const SCREEN = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const TYPE_ACTIONS = {
  ADD_REGISTER_BRAND: 'REGISTER_DATA',
  ADD_PASSWORD: 'ADD_PASSWORD_TO_BRAND',
  ADD_PAPERWORK: 'ADD_PAPERWORKS'
}

export { ROUTES, COLOR, SCREEN, TYPE_ACTIONS, EDNPOINTS }

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
  seeRegister: '/registro-detalle',
  dashboard: '/dashboard'
}

const BASE_URL = 'https://marcas-api-test.herokuapp.com'

const ENDPOINTS = {
  registerUserWithBrand: BASE_URL + '/paperwork/new',
  login: BASE_URL + '/user/authenticate',
  registerUser: BASE_URL + '/user/register',
  searchClass: BASE_URL + '/clase/withScore?keyword='
}

// for media queries screens
const SCREEN = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

// actions constraints

const TYPE_ACTIONS = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  REGISTER_USER_REQUEST: 'USER_REGISTER_REQUEST',
  REGISTER_USER_SUCCESS: 'USER_REGISTER_SUCCESS',
  REGISTER_USER_FAILURE: 'USER_REGISTER_FAILURE',

  REGISTER_USER_PAPERWORK_REQUEST: 'USER_REGISTER_PAPERWORK_REQUEST',
  REGISTER_USER_PAPERWORK_SUCCESS: 'USER_REGISTER_PAPERWORK_SUCCESS',
  REGISTER_USER_PAPERWORK_FAILURE: 'USER_REGISTER_PAPERWORK_FAILURE',

  REGISTER_PAPERWORK_REQUEST: 'PAPERWORK_REGISTER_REQUEST',
  REGISTER_PAPERWORK_SUCCESS: 'PAPERWORK_REGISTER_SUCCESS',
  REGISTER_PAPERWORK_FAILURE: 'PAPERWORK_REGISTER_FAILURE',

  LOGOUT: 'USER_LOGOUT'

}

const LocalStorage = {
  registerBrand: 'paperworkRegister',
  user: 'userRegistered',
  paperworks: 'allPaperworks',
  token: 'jwt'
}

const ALERT_ACTIONS = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
}

export { ROUTES, COLOR, SCREEN, TYPE_ACTIONS, ENDPOINTS, ALERT_ACTIONS, LocalStorage }

import { ENDPOINTS } from '../utils/constants'

export const userService = {
  login
}

function login (email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }


  /*  return window.fetch(ENDPOINTS.login, requestOptions)
      .then(handleResponse)
      .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))

        return user
      })*/
}

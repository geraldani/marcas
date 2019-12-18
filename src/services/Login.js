import { ENDPOINTS, LocalStorage, ROUTES } from '../utils/constants'
import { history } from '../helpers/history'

export const userLogin = async (email, password, setLoading, setErrorFetch) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    setLoading(true)
    const res = await window.fetch(ENDPOINTS.login, requestOptions)
    const response = await res.json()
    if (response.error) {
      setErrorFetch(response.error)
    } else {
      window.localStorage.setItem(LocalStorage.token, JSON.stringify(response.token))
      window.localStorage.setItem(LocalStorage.user, JSON.stringify({
        name: response.name,
        id: response.userId,
        role: response.role
      }))
      window.localStorage.setItem(LocalStorage.paperworks, JSON.stringify(response.paperworks))
      history.push(ROUTES.dashboard)
    }
    setLoading(false)
  } catch (error) {
    setLoading(false)
    setErrorFetch(error.message)
    console.log('Ocurrio un error: ', error)
  }
}

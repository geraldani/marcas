import { ENDPOINTS, ROUTES } from '../utils/constants'
import { history } from '../redux/store'

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
    setLoading(false)
    window.localStorage.setItem('token', JSON.stringify(response.token))
    window.localStorage.setItem('user', JSON.stringify({
      name: response.name,
      id: response.userId,
      role: response.role
    }))
    window.localStorage.setItem('paperworks', JSON.stringify(response.paperworks))
    history.push(ROUTES.dashboard)
  } catch (error) {
    setLoading(false)
    setErrorFetch(error.message)
    console.log('Ocurrio un error: ', error)
  }
}

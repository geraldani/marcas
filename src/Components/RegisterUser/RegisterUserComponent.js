import React, {useState} from 'react'
import RegisterUserView from '../../Views/SignUp/RegisterUserView'
import { useFormRegisterLoginUser } from '../../hooks/useFormLoginRegister'

const formStrucute = [
  { label: 'Nombre', name: 'name', type: 'text' },
  { label: 'Apellido', name: 'surname', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Contraseña', name: 'password', type: 'password' },
  { label: 'Repite la contraseña', name: 'repeatPassword', type: 'password' }
]

const RegisterUserComponent = () => {
  const formValues = {}
  const [errorFetch, setErrorFetch] = useState('')
  formStrucute.forEach(el => { formValues[el.name] = '' })

  const finish = () => {
    console.log('Ahora me tengo q loguear o registrar')
  }

  const [data, handleInputChange, handleClick, errors] = useFormRegisterLoginUser(formValues, finish)

  /*const registerUser = async () => {
    const url = 'https://marcas-api-test.herokuapp.com/user/register'
    const dataSend = {
      email: data.email,
      password: data.password,
      description: '',
      name: `${data.name} ${data.surname}`,
      permission: 'USER'
    }

    let fetchBody = {
      method: 'POST',
      body: JSON.stringify(dataSend),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      setLoading(true)
      console.log(fetchBody)
      const res = await window.fetch(url, fetchBody)
      const response = await res.text()

      const loginInfo = {
        email: dataSend.email,
        password: dataSend.password
      }

      fetchBody = {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const resLogin = await window.fetch('https://marcas-api-test.herokuapp.com/user/login', fetchBody)
      const responseLogin = await res.json()

      console.log('la respuesta fue ', responseLogin)

      setLoading(false)
      history.push(ROUTES.dashboard)
    } catch (e) {
      setLoading(false)
      setErrorFetch(e.message)
      console.log('Ocurrio un error ', e)
    }
  }*/

  const commonProps = {
    onClick: handleClick,
    onChange: handleInputChange,
    form: formStrucute,
    value: data,
    errors,
    errorFetch
  }

  return (
    <RegisterUserView {...commonProps} />
  )
}


export default RegisterUserComponent

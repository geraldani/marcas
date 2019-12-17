import React, { useState } from 'react'
import RegisterUserView from '../../Views/SignUp/RegisterUserView'
import { useFormRegisterLoginUser } from '../../hooks/useFormLoginRegister'
import { ENDPOINTS } from '../../utils/constants'
import { userLogin } from '../../hooks/useLogin'

const formStrucute = [
  { label: 'Nombre', name: 'name', type: 'text' },
  { label: 'Apellido', name: 'surname', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Contraseña', name: 'password', type: 'password' },
  { label: 'Repite la contraseña', name: 'repeatPassword', type: 'password' }
]

const RegisterUserComponent = (props) => {
  const formValues = {}
  const [errorFetch, setErrorFetch] = useState('')
  const [loading, setLoading] = useState(false)
  formStrucute.forEach(el => { formValues[el.name] = '' })

  const finish = async () => {
    const { name, surname, email, password } = data
    console.log('la data regsiter ', data)

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ email, password, description: '', name: `${name} ${surname}`, permission: 'USER' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      setLoading(true)
      const res = await window.fetch(ENDPOINTS.registerUser, requestOptions)
      const response = await res.text()
      console.log(response)
      if (response) {
        await userLogin(email, password, setLoading, setErrorFetch)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrorFetch(error.message)
      console.log('Ocurrio un error: ', error)
    }
  }

  const [data, handleInputChange, handleClick, errors] = useFormRegisterLoginUser(formValues, finish)

  const commonProps = {
    onClick: handleClick,
    onChange: handleInputChange,
    form: formStrucute,
    value: data,
    errors,
    errorFetch,
    loading
  }

  return (
    <RegisterUserView {...commonProps} />
  )
}

export default RegisterUserComponent

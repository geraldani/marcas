import React, { useEffect, useState } from 'react'
import FinishRegister from '../../Views/RegisterBrand/finish-register/FinishRegister'
import { useFormRegisterLoginUser } from '../../hooks/useFormLoginRegister'
import { ENDPOINTS, LocalStorage, ROUTES } from '../../utils/constants'
import { history } from '../../redux/store'
import { userLogin } from '../../hooks/useLogin'

const formStructure = [
  { label: 'Contraseña', name: 'password', type: 'password' },
  { label: 'Repetir contraseña', name: 'repeatPassword', type: 'password' }
]

const RegisterUserWithBrand = (props) => {
  const formValues = {}
  formStructure.forEach(el => { formValues[el.name] = '' })
  const [errorFetch, setErrorFetch] = useState('')
  const [loading, setLoading] = useState(false)

  const registerUser = async () => {
    const dataPaperwor = JSON.parse(window.localStorage.getItem(LocalStorage.registerBrand))
    const newObject = { ...dataPaperwor, password: data.password }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(newObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      console.log(window.localStorage.getItem(LocalStorage.registerBrand))
      setLoading(true)
      const res = await window.fetch(ENDPOINTS.registerUserWithBrand, requestOptions)
      const response = await res.json()
      if (response) {
        await userLogin(newObject.email, newObject.password, setLoading, setErrorFetch)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrorFetch(error.message)
      console.log('Ocurrio un error: ', error)
    }
  }

  const [data, handleInputChange, handleClick, errors] = useFormRegisterLoginUser(formValues, registerUser)

  const commonProps = {
    form: formStructure,
    onClick: handleClick,
    onChange: handleInputChange,
    value: data,
    loading,
    errors
  }
  return (
    <FinishRegister {...commonProps} />
  )
}

export default RegisterUserWithBrand

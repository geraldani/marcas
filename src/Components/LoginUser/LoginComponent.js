import React, { useState, useEffect } from 'react'
import Login from '../../Views/SignUp/Login'
import { useFormRegisterLoginUser } from '../../hooks/useFormLoginRegister'
import { userLogin } from '../../hooks/useLogin'

const formStructure = [
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Contraseña', name: 'password', type: 'password' }
]

const LoginComponent = (props) => {
  const formValues = {}
  formStructure.forEach(el => { formValues[el.name] = '' })
  const [loading, setLoading] = useState(false)
  const [errorFetch, setErrorFetch] = useState('')

  const finish = async () => {
    await userLogin(data.email, data.password, setLoading, setErrorFetch)
  }

  const [data, handleChange, handleClick, errors] = useFormRegisterLoginUser(formValues, finish)
  const commonProps = { handleChange, data, errors, handleClick, formStructure, loading, errorFetch }
  return (
    <Login {...commonProps} />
  )
}

export default LoginComponent

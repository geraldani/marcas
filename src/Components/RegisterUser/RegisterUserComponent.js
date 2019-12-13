import React, { useState, useEffect } from 'react'
import RegisterUser from '../../Views/SignUp/RegisterUser'
import { validateRegisterUser } from '../RegisterBrand/validation'
import { ROUTES } from '../../utils/constants'
import { isEmptyObject } from '../../utils'

const RegisterUserComponent = ({ history }) => {
  const formStrucute = {
    header: 'Registrate',
    buttonName: 'Crear cuenta',
    inputs: [
      {
        label: 'Nombre',
        name: 'name',
        type: 'text'
      },
      {
        label: 'Apellido',
        name: 'surname',
        type: 'text'
      },
      {
        label: 'Email',
        name: 'email',
        type: 'email'
      },
      {
        label: 'Contraseña',
        name: 'password',
        type: 'password'
      }
    ]
  }

  const formValues = {}
  formStrucute.inputs.forEach(el => { formValues[el.name] = '' })
  const [data, setData] = useState(formValues)
  const [errors, setErrors] = useState({})
  const [errorFetch, setErrorFetch] = useState(false)
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setData({
      ...data,
      [name]: value
    })
  }

  useEffect(() => { // validar el formulario
    if (click) {
      if (isEmptyObject(errors)) { // si el objeto error esta vacio
        registerUser()
      }
    }
  }, [errors])

  useEffect(() => { // quitar mensaje de error
    if (!isEmptyObject(errors)) { // si el objeto error no esta vacio
      setErrors(validateRegisterUser(data))
      setClick(false)
    }
  }, [data])

  const registerUser = async () => {
    const url = 'https://marcas-api-test.herokuapp.com/user/register'
    const dataSend = {
      email: data.email,
      password: data.password,
      description: '',
      name: `${data.name} ${data.surname}`,
      permission: 'USER'
    }

    const fetchBody = {
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
      console.log('la respuesta fue ', response)
      setLoading(false)
      history.push(ROUTES.dashboard)
    } catch (e) {
      setLoading(false)
      setErrorFetch(e.message)
      console.log('Ocurrio un error ', e)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    setErrors(validateRegisterUser(data))
    setClick(true)
  }

  const commonProps = {
    onClick: handleClick,
    onChange: handleInputChange,
    form: formStrucute,
    value: data,
    loading,
    errors,
    errorFetch
  }

  return (
    <RegisterUser {...commonProps} />
  )
}

export default RegisterUserComponent

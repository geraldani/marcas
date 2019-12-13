import React, { useEffect, useState } from 'react'
import FinishRegister from '../../Views/RegisterBrand/finish-register/FinishRegister'
import { isEmptyObject } from '../../utils'
import { validateRegisterUserWithBrand } from '../RegisterBrand/validation'
import { connect } from 'react-redux'
import { addPassword, addPaperWorks } from '../../redux/actions'
import { ROUTES } from '../../utils/constants'

const RegisterUserWithBrand = (props) => {
  const [pass, setPass] = useState({ password: '', repeatPassword: '' })
  const [errors, setErrors] = useState({})
  const [errorFetch, setErrorFetch] = useState('')
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(false)

  const formStructure = [
    { label: 'Contraseña', name: 'password', type: 'password' },
    { label: 'Repetir contraseña', name: 'repeatPassword', type: 'password' }
  ]

  const registerUser = async () => {
    await props.dispatch(addPassword(pass.password))

    const obj = Object.assign({}, props.data, {
      ...props.data,
      password: pass.password
    })
    const url = 'https://marcas-api-test.herokuapp.com/paperwork/new'
    const fetchBody = {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      setLoading(true)
      console.log(JSON.stringify(props.data))
      const res = await window.fetch(url, fetchBody)
      const response = await res.json()

      setLoading(false)
      props.dispatch(addPaperWorks(response.paperworks))
      props.history.push({
        pathname: ROUTES.dashboard,
        state: {
          paperworks: response.paperworks,
          user: 'Usuario'
        }
      })
    } catch (e) {
      setLoading(false)
      setErrorFetch('Ocurrió un error al hacer la solicitud')
      console.log('Ocurrio un error ', e.message)
    }
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
      setErrors(validateRegisterUserWithBrand(pass))
      setClick(false)
    }
  }, [pass])

  const onAccept = (e) => {
    e.preventDefault()
    setErrors(validateRegisterUserWithBrand(pass))
    setClick(true)
  }

  const onChangeInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    setPass({
      ...pass,
      [name]: value
    })
  }

  const commonProps = {
    form: formStructure,
    onClick: onAccept,
    onChange: onChangeInput,
    value: pass,
    loading,
    errors,
    errorFetch
  }
  return (
    <FinishRegister {...commonProps} />
  )
}

const mapStateToProps = (state) => ({ data: state.registerBrandData })

export default connect(mapStateToProps)(RegisterUserWithBrand)

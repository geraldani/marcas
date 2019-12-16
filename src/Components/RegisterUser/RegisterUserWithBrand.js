import React, { useEffect, useState } from 'react'
import FinishRegister from '../../Views/RegisterBrand/finish-register/FinishRegister'
import { isEmptyObject } from '../../utils/utils'
import { validateRegisterUserWithBrand } from '../RegisterBrand/validation'
import { connect } from 'react-redux'
import { addPassword, addPaperWorks } from '../../redux/actions'
import { ROUTES } from '../../utils/constants'
import { useFormRegisterLoginUser } from '../../hooks/useFormLoginRegister'

const formStructure = [
  { label: 'Contraseña', name: 'password', type: 'password' },
  { label: 'Repetir contraseña', name: 'repeatPassword', type: 'password' }
]

const RegisterUserWithBrand = (props) => {
  const formValues = {}
  formStructure.forEach(el => { formValues[el.name] = '' })

  // const [errorFetch, setErrorFetch] = useState('')

  const registerUser = async () => {
    console.log('ahora me registro')
    /*    await props.dispatch(addPassword(pass.password))

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
        }*/
  }

  const [data, handleInputChange, handleClick, errors] = useFormRegisterLoginUser(formValues, registerUser)

  const commonProps = {
    form: formStructure,
    onClick: handleClick,
    onChange: handleInputChange,
    value: data,
    errors
  }
  return (
    <FinishRegister {...commonProps} />
  )
}

const mapStateToProps = (state) => ({ data: state.registerBrandData })

export default connect(mapStateToProps)(RegisterUserWithBrand)

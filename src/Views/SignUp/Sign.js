import React from 'react'
import Header from '../common/header/Header'
import FormCard from '../common/miniForm'
import Footer from '../common/footer/Footer'
import ConstructionPage from '../common/Warnings/constructioPage'
import PageNotFound from '../common/Warnings/PageNotFound'
import { ROUTES } from '../../utils/constants'
import { setViewUp } from '../../utils'

const dataRegister = {
  header: 'Registrate',
  buttonName: 'Crear cuenta',
  inputs: [
    {
      name: 'Nombre',
      type: 'text'
    },
    {
      name: 'Apellido',
      type: 'text'
    },
    {
      name: 'Email',
      type: 'email'
    },
    {
      name: 'Contraseña',
      type: 'password'
    },
    {
      name: 'Repetir contraseña',
      type: 'password'
    }
  ]
}
const dataLogin = {
  header: 'Ingresa',
  buttonName: 'Ingresar',
  inputs: [
    {
      name: 'Email',
      type: 'email'
    },
    {
      name: 'Contraseña',
      type: 'password'
    }
  ]
}

const existRoute = (param) => {
  let exist = false
  Object.values(ROUTES).forEach(route => {
    if (param === route.slice(1)) exist = true
  })
  return exist
}

const Sign = (props) => {
  let elem
  let other = false
  let doesntexist = false
  const param = props.match.params.contain

  if (param === ROUTES.signup.slice(1)) elem = dataRegister
  else if (param === ROUTES.signin.slice(1)) elem = dataLogin
  else if (existRoute(param)) other = true
  else doesntexist = true

  setViewUp()
  const CardLogin = () => (
    <div className='margin-header row justify-content-center pt-0 pt-md-5 px-4 px-md-5 mx-5'>
      <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
        <FormCard data={elem.inputs} title={elem.header} buttonName={elem.buttonName} />
      </div>
    </div>
  )

  if (doesntexist) return <PageNotFound />

  return (
    <>
      <Header showMenu page={param} />
      {
        other
          ? <ConstructionPage />
          : <CardLogin />
      }
      <Footer />
    </>
  )
}

export default Sign

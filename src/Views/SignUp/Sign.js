import React from 'react'
import Header from '../common/header/Header'
import LoginCard from '../common/login'
import Footer from '../common/footer/Footer'
import ConstructionPage from '../common/Warnings/constructioPage'
import PageNotFound from '../common/Warnings/PageNotFound'

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

const Sign = (props) => {
  let elem
  let other = false
  let doesntexist = false
  const param = props.match.params.contain
  if (param === 'signup') elem = dataRegister
  else if (param === 'signin') elem = dataLogin
  else if (param === 'domain' || param === 'contact-with-us' || param === 'otros-tramites' || param === 'write-us') other = true
  else doesntexist = true

  const CardLogin = () => (
    <div className='margin-header row justify-content-center pt-0 pt-md-5 px-4 px-md-5 mx-5'>
      <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
        <LoginCard data={elem.inputs} title={elem.header} buttonName={elem.buttonName} />
      </div>
    </div>
  )

  if (doesntexist) return <PageNotFound />

  return (
    <>
      <Header showMenu />
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

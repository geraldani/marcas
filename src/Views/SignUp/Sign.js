import React from 'react'
import Header from '../common/header/Header'
import LoginCard from '../common/login'
import Footer from '../common/footer/Footer'

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
  if (props.match.params.contain === 'signup') elem = dataRegister
  else if (props.match.params.contain === 'signin') elem = dataLogin

  return (
    <>
      <Header showMenu />
      <div className='margin-header row justify-content-center pt-0 pt-md-5 px-4 px-md-5'>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <LoginCard data={elem.inputs} title={elem.header} buttonName={elem.buttonName} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Sign

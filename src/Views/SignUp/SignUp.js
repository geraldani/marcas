import React from 'react'
import RegisterCard from '../common/cards/register/RegisterCard'
import { StyledTitle } from './styles'
import Header from '../common/header/Header'

const fakeData = [
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

const SignUp = () => {
  return (
    <>
      <Header showMenu />
      <RegisterCard data={fakeData} buttonName='Crear cuenta'>
        <StyledTitle className='px-4'>Registrate</StyledTitle>
      </RegisterCard>
    </>
  )
}

export default SignUp

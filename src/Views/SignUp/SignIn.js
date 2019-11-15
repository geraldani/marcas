import React from 'react'
import Header from '../common/header/Header'
import RegisterCard from '../common/cards/register/RegisterCard'
import { StyledTitle } from './styles'

const fakeData = [
  {
    name: 'Email',
    type: 'email'
  },
  {
    name: 'Contraseña',
    type: 'password'
  }
]

const SignIn = () => {
  return (
    <>
      <Header showMenu />
      <RegisterCard data={fakeData} buttonName='Ingresar'>
        <StyledTitle className='px-4'>Registrate</StyledTitle>
      </RegisterCard>
    </>
  )
}

export default SignIn

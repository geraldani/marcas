import React from 'react'
import RegisterCard from '../utilities/RegisterCard'
import { StyledLabelName } from '../GlobalStyles'
import styled from 'styled-components'
import { COLOR } from '../utilities/constants'

const SignUp = () => {
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

  return (
    <RegisterCard data={fakeData} buttonName='Crear cuenta'>
      <StyledTitle className='px-4'>Registrate</StyledTitle>
    </RegisterCard>
  )
}

const StyledTitle = styled.h3`
  margin-top: 2rem;
  text-align: left;
  padding-bottom: 0.8em;
  border-bottom: solid 1px rgba(0, 0, 0, 0.125);;
`

export default SignUp

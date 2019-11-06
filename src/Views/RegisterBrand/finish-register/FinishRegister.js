import React from 'react'
import RegisterCard from '../../common/cards/register/RegisterCard'
import Header from '../../common/header/Header'
import { ROUTES } from '../../common/constants'
import { StyledImage, StyledSubtitle, StyledTitle } from './styles'
import { StyledLabelName } from '../../GlobalStyles'
import imageUrl from '../../../assets/img/svg/icon-confirm.svg'

const FinishRegister = () => {
  const fakeData = [
    { name: 'Contraseña', type: 'password' },
    { name: 'Repetir contraseña', type: 'password' }
  ]

  return (
    <>
      <Header />
      <RegisterCard data={fakeData} buttonName='Aceptar' link={ROUTES.signup}>
        <StyledImage src={imageUrl} alt='image' />
        <StyledTitle>¡Felicitaciones!</StyledTitle>

        <StyledTitle>
          Estas a un paso de finalizar<br />tu trámite
        </StyledTitle>

        <StyledSubtitle>
          En este momento estamos gestionando tu pedido.
        </StyledSubtitle>

        <StyledSubtitle>
          Te estaremos enviando un mail con los avances
        </StyledSubtitle>

        <StyledLabelName className='mt-md-5 mt-4'>
          Crea tu clave para luego ver el estado de tu trámite
        </StyledLabelName>
      </RegisterCard>
    </>
  )
}

export default FinishRegister

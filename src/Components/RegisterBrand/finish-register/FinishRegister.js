import React from 'react'
import RegisterCard from '../../common/cards/register/RegisterCard'
import Header from '../../common/header/Header'
import { ROUTES } from '../../common/constants'
import { StyledImage, StyledSubtitle } from './styles'
import { StyledLabelName } from '../../GlobalStyles'

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/000/504/333/non_2x/vector-beer-icon-in-flat-line-style-beer-mug-logo-for-social-media-banner-party-poster-corporate-identity-and-app-icon-design.jpg'
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
        <h3>¡Felicitaciones!</h3>
        <h3>Estas a un paso de finalizar<br />tu trámite</h3>
        <StyledSubtitle>
          En este momento estamos gestionando tu pedido.
        </StyledSubtitle>

        <StyledSubtitle>
          Te estaremos enviando un mail con los avances
        </StyledSubtitle>

        <StyledLabelName style={{ marginTop: '4rem' }}>
          Crea tu clave para luego ver el estado de tu trámite
        </StyledLabelName>
      </RegisterCard>
    </>
  )
}

export default FinishRegister

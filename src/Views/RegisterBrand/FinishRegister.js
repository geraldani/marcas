import React from 'react'
import styled from 'styled-components'
import { COLOR, ROUTES } from '../utilities/constants'
import { StyledLabelName } from '../GlobalStyles'
import RegisterCard from '../utilities/RegisterCard'

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/000/504/333/non_2x/vector-beer-icon-in-flat-line-style-beer-mug-logo-for-social-media-banner-party-poster-corporate-identity-and-app-icon-design.jpg'

const FinishRegister = () => {
  const fakeData = [
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
  )
}

const StyledImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin: 3em auto 2em auto;
  border-radius: 50%;
`

const StyledSubtitle = styled.p`
  margin-bottom: 0;
  color: ${COLOR.textColor};
  line-height: 1.2;
`

export default FinishRegister

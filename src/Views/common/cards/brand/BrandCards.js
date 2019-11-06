import React from 'react'
import { StyledContainer, StyledCheckIcon, StyledDescription, StyledNumber } from './styles'

const BrandCards = ({ number, description }) => {
  return (
    <StyledContainer>
      <StyledNumber>{number}</StyledNumber>
      <StyledDescription>{description}</StyledDescription>
      <StyledCheckIcon size='22px' />
    </StyledContainer>
  )
}

export default BrandCards

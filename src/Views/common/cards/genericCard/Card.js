import React from 'react'
import { StyledCard } from './styles'

const Card = ({ children, shadow = false, color }) => {
  return (
    <StyledCard shadow={shadow} color={color}>
      {children}
    </StyledCard>
  )
}

export default Card

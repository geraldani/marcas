import React from 'react'
import { StyledHeaderCard } from './styles'

const CardHeader = ({ children, style, className }) => (
  <StyledHeaderCard {...{ style, className }}>
    {children}
  </StyledHeaderCard>
)

export default CardHeader

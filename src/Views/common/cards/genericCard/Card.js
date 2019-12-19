import React from 'react'
import { StyledCard } from './styles'

const Card = (props) => {
  const { shadow, color, style, className, children } = props
  const commonProps = { shadow, color, style, className }
  return (
    <StyledCard {...commonProps}>
      {children}
    </StyledCard>
  )
}

Card.defaultProps = {
  shadow: false
}

export default Card

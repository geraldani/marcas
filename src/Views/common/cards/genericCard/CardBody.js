import React from 'react'
import { StyledHeaderBody } from './styles'

const CardBody = ({ children, className }) => {
  return (
    <StyledHeaderBody className={className}>
      {children}
    </StyledHeaderBody>
  )
}

export default CardBody

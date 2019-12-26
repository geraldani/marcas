import React from 'react'
import { StyledHeaderFooter } from './styles'

const CardFooter = ({ children, className }) => {
  return (
    <StyledHeaderFooter className={className}>
      {children}
    </StyledHeaderFooter>
  )
}

export default CardFooter

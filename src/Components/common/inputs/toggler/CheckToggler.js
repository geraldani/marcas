import React from 'react'
import { StyledSwitch, StyledContainer } from './styles'

const CheckToggler = ({ checked }) => {
  return (
    <StyledContainer>
      <input type='checkbox' defaultChecked={checked} />
      <StyledSwitch />
    </StyledContainer>
  )
}

export default CheckToggler

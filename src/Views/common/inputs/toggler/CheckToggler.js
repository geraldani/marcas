import React from 'react'
import { StyledSwitch, StyledContainer } from './styles'

const CheckToggler = ({ value, onChange, name, type }) => {
  return (
    <StyledContainer>
      <input type={type} defaultChecked={value} name={name} onChange={onChange} />
      <StyledSwitch />
    </StyledContainer>
  )
}

export default CheckToggler

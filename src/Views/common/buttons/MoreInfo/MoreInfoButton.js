import React from 'react'
import { StyledContainer } from './styles'

const MoreInfoButton = ({ onClick }) => {
  return (
    <StyledContainer className='d-flex justify-content-end mb-3'>
      <button onClick={onClick}>
        Más info
      </button>
    </StyledContainer>
  )
}

export default MoreInfoButton

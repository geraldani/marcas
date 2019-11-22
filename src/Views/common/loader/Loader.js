import React from 'react'
import uuid from 'uuid'

import { StyledContainer } from './styles'

const Loader = () => {
  return (
    <StyledContainer>
      {
        [...Array(9)].map(() => <div key={uuid()} />)
      }
    </StyledContainer>
  )
}

export default Loader

import React from 'react'
import styled from 'styled-components'
import { COLOR } from './constants'
import { IoIosCheckmarkCircle as CheckIcon } from 'react-icons/io'

const BrandCards = ({ number, description }) => {
  return (
    <StyledContainer>

      <StyledNumber>
        {number}
      </StyledNumber>

      <StyledDescription>
        {description}
      </StyledDescription>

      <StyledCheckIcon size='22px' />

    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border: solid 3px ${COLOR.grey};
  border-bottom-color: ${COLOR.purple};
  border-radius: 5px;
  height: 165px;
  position: relative;
`
const StyledNumber = styled.h4`
  color: ${COLOR.purple};
  font-size: 3.1rem;
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 0;
`
const StyledDescription = styled.p`
  text-align: center;
  color: ${COLOR.textColor};
  font-weight: normal;
  line-height: 1;
`
const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 10px auto;
  color: ${COLOR.purple};
`

export default BrandCards

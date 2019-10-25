import React from 'react'
import styled from 'styled-components'
import COLORS from './colors'
import { IoIosCheckmarkCircle as CheckIcon } from 'react-icons/io'

const BrandCards = ({ number, description }) => {
  return (
    <Styled.div>
      <Styled.h4>{number.toLocaleString()}</Styled.h4>
      <Styled.p>{description}</Styled.p>
      <Styled.CheckIcon size='22px' />
    </Styled.div>
  )
}

export default BrandCards

const Styled = {
  div: styled.div`
    border: solid 3px ${COLORS.grey};
    border-bottom-color: ${COLORS.purple};
    border-radius: 5px;
    height: 165px;
    position: relative;
  `,
  h4: styled.h4`
    color: ${COLORS.purple};
    font-size: 3.1rem;
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 0;
  `,
  p: styled.p`
    text-align: center;
    color: ${COLORS.textColor};
    font-weight: normal;
    line-height: 1;
  `,
  CheckIcon: styled(CheckIcon)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto 10px auto;
    color: ${COLORS.purple};
  `
}

import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from './constants'
import { IoIosCheckmark as CheckIcon } from 'react-icons/io'
import PropTypes from 'prop-types'

const CircleSteps = ({ actualStep, totalSteps }) => {
  return (
    <div className='d-flex'>
      {
        [...Array(totalSteps)].map((ele, index) => (
          <CircleNumber key={index} number={index + 1} actualStep={actualStep} />
        ))
      }
    </div>
  )
}

const CircleNumber = ({ number, actualStep }) => {
  if (number === actualStep) {
    return <Circle.Full>{number}</Circle.Full>
  } else if (actualStep > number) {
    return <Circle.Full><CheckIcon size='30px' /></Circle.Full>
  } else {
    return <Circle.Empty>{number}</Circle.Empty>
  }
}

const commonStyles = css`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: normal;
  position: relative;
  &:not(:last-child){
      margin-right: 48px;
  }
  &:not(:last-child):after{
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    top:0;
    bottom: 0;
    margin: auto;
    left: 28px;
    background-color: ${COLORS.purple};
  }
`
const Circle = {
  Full: styled.p`
    ${commonStyles};
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    box-shadow: 0 2px 7px -2px rgba(0,0,0,.7);
`,
  Empty: styled.p`
    ${commonStyles};
    border: solid 2px ${COLORS.purple};
    color: ${COLORS.purple};
    font-weight: 500;
`
}

CircleSteps.propTypes = {
  actualStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
}

export default CircleSteps

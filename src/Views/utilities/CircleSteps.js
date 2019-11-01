import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR } from './constants'
import { IoIosCheckmark as CheckIcon } from 'react-icons/io'
import PropTypes from 'prop-types'

const CircleSteps = ({ actualStep, totalSteps }) => {
  return (
    <div className='d-flex'>
      {
        [...Array(totalSteps)].map((ele, index) => (
          <CircleNumber
            key={index}
            number={index + 1}
            actualStep={actualStep}
          />
        ))
      }
    </div>
  )
}

const CircleNumber = ({ number, actualStep }) => {
  if (number === actualStep) {
    return (
      <StyledCircleFull>
        {number}
      </StyledCircleFull>
    )
  } else if (actualStep > number) {
    return (
      <StyledCircleFull>
        <CheckIcon size='30px' />
      </StyledCircleFull>
    )
  } else {
    return (
      <StyledCircleEmpty>
        {number}
      </StyledCircleEmpty>
    )
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
    background-color: ${COLOR.purple};
  }
`

const StyledCircleFull = styled.p`
  ${commonStyles};
  background-color: ${COLOR.purple};
  color: ${COLOR.white};
  box-shadow: 0 2px 7px -2px rgba(0,0,0,.7);
`

const StyledCircleEmpty = styled.p`
  ${commonStyles};
  border: solid 2px ${COLOR.purple};
  color: ${COLOR.purple};
  font-weight: 500;
`

CircleSteps.propTypes = {
  actualStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
}

export default CircleSteps

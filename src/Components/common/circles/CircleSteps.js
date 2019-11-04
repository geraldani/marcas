import React from 'react'
import { StyledCircleFull, StyledCircleEmpty } from './styles'
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

CircleSteps.propTypes = {
  actualStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
}

export default CircleSteps

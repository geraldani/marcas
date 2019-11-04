import React from 'react'
import { StyledSquare, StyledWidth, StyledLabelName, StyledLabel, StyledHeight } from './styles'

const Measurement = () => {
  const measure = ['Ancho', 'Alto']

  const SquareMeasure = () => {
    return (
      <div className='position-relative'>
        <StyledSquare>
          <StyledWidth>{measure[0]}</StyledWidth>
          <StyledHeight>{measure[1]}</StyledHeight>
        </StyledSquare>

      </div>
    )
  }

  return (
    <div className='d-flex'>
      {
        measure.map(elem => (
          <StyledLabel key={elem}>
            <StyledLabelName>
              {elem} (cm)
            </StyledLabelName>
            <input type='number' className='form-control' />
          </StyledLabel>
        ))
      }
      <SquareMeasure />
    </div>
  )
}

export default Measurement

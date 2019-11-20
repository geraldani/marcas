import React from 'react'
import { StyledSquare, StyledWidth, StyledLabelName, StyledLabel, StyledHeight } from './styles'
import InputText from '../inputs/text/InputText'

const Measurement = (props) => {
  const { state, onChange, errors } = props
  const measure = [state.width, state.height]

  const SquareMeasure = () => { // el recuadro explicando las medidas requeridas
    return (
      <div className='position-relative'>
        <StyledSquare>
          {
            measure.map((elem, index) => {
              const WrappedComponenet = index === 0 ? StyledWidth : StyledHeight
              return <WrappedComponenet key={elem.name}>{elem.label}</WrappedComponenet>
            })
          }
        </StyledSquare>
      </div>
    )
  }

  return (
    <div className='d-flex flex-md-row flex-column'>
      <div className='d-flex'>
        {
          measure.map(elem => (
            <StyledLabel key={elem.name}>
              <StyledLabelName>
                {elem.label} (cm)
              </StyledLabelName>
              <InputText label='' onChange={onChange} name={elem.name} type={elem.type} value={elem.value} error={errors[elem.name]} />
            </StyledLabel>
          ))
        }
      </div>
      <SquareMeasure />
    </div>
  )
}

export default Measurement

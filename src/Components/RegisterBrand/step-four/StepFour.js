import React from 'react'
import CheckToggler from '../../common/inputs/toggler/CheckToggler'
import { StyledLabelName, StyledLegend, StyledSublabel, marginBottom } from '../../GlobalStyles'
import SelectCountry from '../../common/inputs/select/SelectCountry'
import { StyledOption, ClearLegend } from './styles'

const StepFour = (props) => {
  return (
    <>
      <div className='col-10 px-4 mt-5'>
        <StyledLabelName className='mb-4'>
          Registros anteriores
        </StyledLabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-12 px-4 d-flex align-items-center'>
        <label className='d-flex mb-0'>
          <StyledOption>Si</StyledOption>
          <CheckToggler checked />
          <StyledOption>No</StyledOption>
        </label>
        <ClearLegend>
          ¿Ha presentado su solicitud de marca en otro país en los últimos 6 meses?
        </ClearLegend>
      </div>

      <div className='col-7 px-4' style={marginBottom}>
        <StyledSublabel>País</StyledSublabel>
        <SelectCountry country={props.country} setCountry={props.setCountry} />

        <StyledSublabel>Numero de registro/acta</StyledSublabel>
        <input type='text' className='form-control' name='nombre' />
      </div>
    </>
  )
}

export default StepFour

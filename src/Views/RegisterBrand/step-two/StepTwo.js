import React, { useState } from 'react'
import styled from 'styled-components'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import { StyledLegend, StyledLabelName, StyledSublabel, StyledDivMarginBottom } from '../../GlobalStyles'
import { COLOR } from '../../common/constants'
import SelectCountry from '../../common/inputs/select/SelectCountry'

const StepTwo = (props) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div className='col-12 px-4 mt-3 mt-md-5'>
        <StyledLabelName>
          Datos del estudio encargado del seguimiento del trámite
        </StyledLabelName>
      </div>
      <div className='col-lg-7 col-12 px-4 '>
        <div className='mr-lg-5'>
          <StyledSublabel>Email</StyledSublabel>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className='col-12 px-4 mt-4'>
        <StyledLabelName>Datos personales del titular marcario</StyledLabelName>
        <StyledLegend>
          Para darle seguimiento a su solicitud de registro de marca, complete el siguiente formulario.
        </StyledLegend>
      </div>
      <div className='col-lg-5 col-12 px-4 mt-3'>
        <div className='form-group'>
          <RadioButttons
            className='mb-3'
            value='empresa'
            name='CheckBrand'
            description='Registrarme como una empresa'
          />
          <RadioButttons
            className='mb-3'
            value='persona'
            name='CheckBrand'
            description='Registrarme como persona física'
          />
        </div>
      </div>
      <StyledDivMarginBottom className='col-lg-7 col-12 px-4'>
        <div className='form-group mr-md-5 position-relative'>
          <StyledSublabel>Nombre</StyledSublabel>
          <input type='text' className='form-control' name='nombre' />

          <StyledSublabel>Apellido</StyledSublabel>
          <input type='text' className='form-control' name='apellido' />

          <StyledSublabelDisabled>Razon social</StyledSublabelDisabled>
          <input type='text' className='form-control' name='razon' disabled />

          <StyledSublabel>País apoderado/Gestor</StyledSublabel>
          <SelectCountry country={props.country} setCountry={props.setCountry} />

          <StyledSublabel>CUIT</StyledSublabel>
          <input type='text' className='form-control' name='cuit' />
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

const StyledSublabelDisabled = styled(StyledSublabel)`
  color: ${COLOR.darkGrey};
`

export default StepTwo

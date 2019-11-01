import React, { useState } from 'react'
import styled from 'styled-components'
import CheckButttons from '../utilities/CheckButtton'
import { StyledLegend, StyledLabelName, StyledSublabel, marginBottom } from '../GlobalStyles'
import { COLOR } from '../utilities/constants'
import SelectCountry from '../utilities/SelectCountry'

const StepTwo = (props) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div className='col-12 px-4 mt-5'>
        <StyledLabelName>
          Datos del estudio encargado del seguimiento del trámite
        </StyledLabelName>
      </div>
      <div className='col-7 px-4 '>
        <div className='mr-5'>
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
      <div className='col-5 px-4 mt-3'>
        <div className='form-group'>
          <CheckButttons
            className='mb-3'
            value='empresa'
            name='CheckBrand'
            description='Registrarme como una empresa'
          />
          <CheckButttons
            className='mb-3'
            value='persona'
            name='CheckBrand'
            description='Registrarme como persona física'
          />
        </div>
      </div>
      <div className='col-7 px-4' style={marginBottom}>
        <div className='form-group mr-5 position-relative'>
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
      </div>
    </>
  )
}

const StyledSublabelDisabled = styled(StyledSublabel)`
  color: ${COLOR.darkGrey};
`

export default StepTwo

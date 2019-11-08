import React, { useState } from 'react'
import styled from 'styled-components'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import { StyledLegend, StyledLabelName, StyledSublabel, StyledDivMarginBottom } from '../../GlobalStyles'
import { COLOR } from '../../common/constants'
import SelectCountry from '../../common/inputs/select/SelectCountry'
import InputText from '../../common/inputs/text/InputText'

const StepTwo = (props) => {
  return (
    <>
      <div className='col-12 px-4 mt-3 mt-md-5'>
        <StyledLabelName>
          Datos del estudio encargado del seguimiento del trámite
        </StyledLabelName>
      </div>

      <div className='col-lg-7 col-12 px-4 '>
        <div className='mr-lg-5'>
          <InputText
            label='Email'
            name='email'
            type='email'
            {...props}
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
            onChange={props.onChange}
            name='tipoRegistro'
            checked={props.value.tipoRegistro === 'empresa'}
            description='Registrarme como una empresa'
          />
          <RadioButttons
            className='mb-3'
            value='persona'
            name='tipoRegistro'
            onChange={props.onChange}
            checked={props.value.tipoRegistro === 'persona'}
            description='Registrarme como persona física'
          />
        </div>
      </div>

      <StyledDivMarginBottom className='col-lg-7 col-12 px-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText label='Nombre' name='nombre' type='text' {...props} />
          <InputText label='Apellido' name='apellido' type='text' {...props} />
          <InputText label='Razón social' name='ra-social' type='text' disabled {...props} />
          {/*<SelectCountry label='País apoderado/Gestor' country={props.country} setCountry={props.setCountry} />*/}
          <InputText label='CUIT' name='cuit' type='text' {...props} />
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepTwo

import React, { useState } from 'react'
import styled from 'styled-components'
import { Styled } from './StepOne'
import CheckButttons from '../utilities/CheckButtton'
import { COLOR } from '../utilities/constants'
import { countries } from '../../data'

const StepTwo = (props) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div className='col-12 px-4 mt-5'>
        <Styled.LabelForm htmlFor='countrySelect'>Datos del estudio encargado del seguimiento del
          trámite
        </Styled.LabelForm>
      </div>
      <div className='col-7 px-4 '>
        <div className='form-group mr-5 position-relative'>
          <Styled.SubLabel>Email</Styled.SubLabel>
          <input type='email' className='form-control' name='email' value={email}
                 onChange={event => setEmail(event.target.value)} />
        </div>
      </div>
      <div className='col-12 px-4 mt-4'>
        <Styled.LabelForm>Datos personales del titular marcario</Styled.LabelForm>
        <StyledLegend>Para darle seguimiento a su solicitud de registro de marca, complete el siguiente
          formulario.</StyledLegend>
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
      <div className='col-7 px-4 '>
        <div className='form-group mr-5 position-relative'>
          <Styled.SubLabel className='mt-3 mb-0'>Nombre</Styled.SubLabel>
          <input type='text' className='form-control' name='nombre' />
          <Styled.SubLabel className='mt-3 mb-0'>Apellido</Styled.SubLabel>
          <input type='text' className='form-control' name='apellido' />
          <SubLabelDisabled className='mt-3 mb-0'>Razon social</SubLabelDisabled>
          <input type='text' className='form-control' name='razon' disabled />
          <Styled.SubLabel className='mt-3 mb-0'>País apoderado/Gestor</Styled.SubLabel>
          <select className='custom-select'> TODO {/* TODO implementar el onchange del select */}
            <option value=''>Seleccione su pais</option>
            {countries.map(country => <option value={country} key={country}>{country}</option>)}
          </select>
          <Styled.SubLabel className='mt-3 mb-0'>CUIT</Styled.SubLabel>
          <input type='text' className='form-control' name='cuit' />
        </div>
      </div>

      {/* input con hook local
      <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />

      input con hook pasado por props
      <input type='email' onChange={props.onChange} name='email' /> */}
    </>
  )
}

const SubLabelDisabled = styled(Styled.SubLabel)`
  color: ${COLOR.darkGrey};
`
const StyledLegend = styled.p`
  color: ${COLOR.darkGrey};
  font-size: 0.75em;
  width: 50%;
`

export default StepTwo

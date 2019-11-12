import React, { useState } from 'react'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import { StyledLegend, StyledLabelName, StyledDivMarginBottom } from '../../GlobalStyles'
import Select from '../../common/inputs/select/SelectCountry'
import InputText from '../../common/inputs/text/InputText'

const inputRadioName = 'tipoRegistro'

const StepTwo = (props) => {
  const { state, onChange } = props
  const [disableInput, setDisableInput] = useState(state.regiterType.value === 'persona')
  const handleChange = (e) => {
    props.onChange(e)
    e.target.value === 'persona'
      ? setDisableInput(true)
      : setDisableInput(false)
  }

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
            label={state.email.label}
            name={state.email.name}
            type={state.email.type}
            value={state.email.value}
            onChange={props.onChange}
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
          {
            state.regiterType.options.map(elem => (
              <RadioButttons
                className='mb-3'
                value={elem.value}
                key={elem.value}
                onChange={handleChange}
                name={state.regiterType.name}
                description={elem.label}
                defaultCheked={elem.value === state.regiterType.value}
              />
            ))
          }
        </div>
      </div>

      <StyledDivMarginBottom className='col-lg-7 col-12 px-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText {...state.name} onChange={onChange} />
          <InputText {...state.surname} onChange={onChange} />
          <InputText{...state.razonSocial} disabled={disableInput} onChange={onChange} />
          <Select {...state.countryGestor} onChange={onChange} />
          <InputText {...state.cuit} onChange={onChange} />
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepTwo

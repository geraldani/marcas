import React, { useState, useRef } from 'react'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import { StyledLegend, StyledLabelName, StyledDivMarginBottom } from '../../GlobalStyles'
import Select from '../../common/inputs/select/SelectCountry'
import InputText from '../../common/inputs/text/InputText'
import MoreInfoButton from '../../common/buttons/MoreInfo/MoreInfoButton'

const StepTwo = (props) => {
  const { state, onChange, errors } = props
  const [disableInput, setDisableInput] = useState(state.registerType.value === 'persona')
  // para deshabilitar o no el campo de razon social
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
            {...state.email}
            onChange={props.onChange}
            error={errors.email}
            moreInfo='El email con el que se logueara el interesado'
          />
        </div>
      </div>

      <div className='col-12 px-4 mt-4'>
        <StyledLabelName>Datos personales del titular marcario</StyledLabelName>
        <StyledLegend>Para darle seguimiento a su solicitud de registro de marca, complete el siguiente formulario.</StyledLegend>
      </div>

      <div className='col-lg-5 col-12 px-4 mt-3'>
        <div className='form-group'>
          {
            state.registerType.options.map(elem => (
              <RadioButttons
                className='mb-3'
                value={elem.value}
                key={elem.value}
                onChange={handleChange}
                name={state.registerType.name}
                description={elem.label}
                defaultCheked={elem.value === state.registerType.value}
              >
                <MoreInfoButton info={elem.value + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dapibus est, sit amet mattis urna. Sed laoreet egestas est, consectetur vehicula mi cursus ut. Nullam elementum volutpat quam ac dapibus. Quisque imperdiet orci purus, vel mattis turpis euismod vitae. Duis eget purus nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sagittis venenatis lorem eu commodo. Nam aliquet pulvinar nulla id vulputate. Integer dictum sagittis nunc quis commodo. Donec lacus arcu, tincidunt faucibus nisl a, auctor vulputate nunc. Sed sed nisi tempor augue tempor porta. Maecenas metus urna, facilisis id ipsum in, ultricies vestibulum urna. Curabitur viverra quam eget elit pharetra maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'} showInModal />
              </RadioButttons>
            ))
          }
        </div>
      </div>

      <StyledDivMarginBottom className='col-lg-7 col-12 px-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText {...state.name} onChange={onChange} error={errors.name} tooltip='El nombre del propietario de la marca' />
          <InputText {...state.surname} onChange={onChange} error={errors.surname} moreInfo='algo mas que me guste' />
          <InputText {...state.razonSocial} disabled={disableInput} onChange={onChange} error={errors.razonSocial} />
          <Select {...state.countryGestor} onChange={onChange} error={errors.countryGestor} />
          <InputText {...state.cuit} onChange={onChange} error={errors.cuit} />
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepTwo

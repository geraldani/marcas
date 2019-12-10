import React, { useState } from 'react'
import { IoIosCloseCircleOutline as IconCloseCircle, IoIosClose as IconClose } from 'react-icons/io'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import Select from '../../common/inputs/select/SelectCountry'
import { countries } from '../../../data'
import { StyledLabelName, StyledDivMarginBottom } from '../../styles/GlobalStyles'
import { StyledCountrySelected, StyledAlert, StyledPrice, StyledCircle } from './styles'

const CountrySelected = ({ country, name, removeCountry }) => {
  return (
    <StyledCountrySelected>
      <span>{country}</span>
      <IconCloseCircle size='25px' className='ml-1' />
      <StyledCircle onClick={(e) => removeCountry(e, name)} />
    </StyledCountrySelected>
  )
}

const Alert = ({ showAlert }) => {
  return (
    <StyledAlert>
      <p>Te recomendamos que hagas la <strong>"Búsqueda de antecedentes"</strong> antes de hacer una solicitud</p>
      <span onClick={() => showAlert(false)}>
        Cerrar
        <IconClose size='1.8rem' />
      </span>
    </StyledAlert>
  )
}

const StepOne = ({ state, onChange, removeCountry, errors }) => {
  const [showAlert, setShowAlert] = useState(false)

  const showRegisterAlert = (e) => {
    onChange(e)
    !showAlert && e.target.value === 'registro'
      ? setShowAlert(true)
      : setShowAlert(false)
  }

  return (
    <>
      <StyledDivMarginBottom className='col-12 px-4 mt-md-5 mt-3'>
        <div className='form-group mr-lg-5 mr-0 position-relative'>
          <div className='col-lg-7 col-12 px-0'>
            <StyledLabelName>En qué pais quiero registrar mi marca</StyledLabelName>
            <Select
              {...state.countryRegister}
              onChange={onChange}
              error={errors.countryRegister}
              options={countries}
              info='El pais donde se hara el registro'
            />
          </div>
          {
            // label con el pais seleccionado
            state.countryRegister.value &&
            state.countryRegister.value.map(country => (
              <CountrySelected
                removeCountry={removeCountry}
                country={country}
                name={state.countryRegister.name}
                key={country}
              />
            ))
          }
        </div>
      </StyledDivMarginBottom>

      <div className='col-12 px-0'>
        <div className='border-top my-4' />
        {
          showAlert && <Alert showAlert={setShowAlert} />
        }
      </div>
      <StyledDivMarginBottom className='col-lg-7 col-12 px-4 mt-3'>
        <div className='form-group'>
          {
            state.searchRequest.options.map(elem => (
              <RadioButttons
                key={elem.value}
                value={elem.value}
                label={elem.label}
                name={state.searchRequest.name}
                description={elem.description}
                onChange={showRegisterAlert}
                defaultCheked={elem.value === state.searchRequest.value}
              >
                <StyledPrice to={`price-${elem.value}`}>Ver precio</StyledPrice>
              </RadioButttons>
            ))
          }
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepOne

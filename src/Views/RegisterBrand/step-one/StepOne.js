import React, { useState } from 'react'
import { IoIosCloseCircleOutline as IconCloseCircle, IoIosClose as IconClose } from 'react-icons/io'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import Select from '../../common/inputs/select/SelectCountry'
import { StyledLabelName, StyledDivMarginBottom } from '../../GlobalStyles'
import { StyledCountrySelected, StyledAlert, StyledPrice, StyledCircle } from './styles'
import { steoOne } from '../../../data.json'

const CountrySelected = ({ country, name, removeCountry }) => {
  return (
    <StyledCountrySelected>
      <span>{country.charAt(0).toUpperCase() + country.slice(1)}</span>
      <IconCloseCircle size='25px' className='ml-1' />
      <StyledCircle onClick={(e) => removeCountry(e, name)} />
    </StyledCountrySelected>
  )
}

const Alert = ({ showAlert }) => {
  return (
    <StyledAlert>
      <p>
        Te recomendamos que hagas la <strong>"Búsqueda de antecedentes"</strong> antes de hacer una solicitud
      </p>
      <span onClick={() => showAlert(false)}>
        Cerrar
        <IconClose size='1.8rem' />
      </span>
    </StyledAlert>
  )
}

const StepOne = ({ value, onChange, removeCountry }) => {
  const [showAlert, setShowAlert] = useState(false)
  const selectName = 'countryRegister'

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
              label='Paises'
              value={value}
              onChange={onChange}
              name={selectName}
              multiple
            />
          </div>
          {
            // label con el pais seleccionado
            value[selectName] &&
              value[selectName].map(country => (
                <CountrySelected
                  removeCountry={removeCountry}
                  country={country}
                  name={selectName}
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
            steoOne.checkButtons.map(elem => (
              <RadioButttons
                key={elem.id}
                value={elem.value}
                title={elem.title}
                name='busquedaSolicitud'
                description={elem.description}
                onChange={showRegisterAlert}
                defaultCheked={elem.value === 'antecedentes'}
              >
                <StyledPrice to={`price${1}`}>
                  Ver precio
                </StyledPrice>
              </RadioButttons>
            ))
          }
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepOne

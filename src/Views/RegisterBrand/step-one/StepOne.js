import React, { useState } from 'react'
import { IoIosCloseCircleOutline as IconCloseCircle, IoIosClose as IconClose } from 'react-icons/io'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import SelectCountry from '../../common/inputs/select/SelectCountry'
import { StyledLabelName, StyledSublabel, StyledDivMarginBottom } from '../../GlobalStyles'
import { StyledCountrySelected, StyledAlert, StyledPrice } from './styles'
import { steoOne } from '../../../data.json'

const Alert = ({ showAlert }) => {
  return (
    <StyledAlert>
      <p>
        Te recomendamos que hagas la
        <strong>"Búsqueda de antecedentes"</strong>
        antes de hacer una solicitud
      </p>
      <span onClick={() => showAlert(false)}>
        Cerrar
        <IconClose size='1.8rem' />
      </span>
    </StyledAlert>
  )
}

const StepOne = (props) => {
  const [showAlert, setShowAlert] = useState(false)

  const showRegisterAlert = (e) => {
    !showAlert && e.target.value === 'registro'
      ? setShowAlert(true)
      : setShowAlert(false)
  }

  return (
    <>
      <StyledDivMarginBottom className='col-lg-7 col-12 px-4 mt-md-5 mt-3'>
        <div className='form-group mr-lg-5 mr-0 position-relative'>
          <StyledLabelName>En qué pais quiero registrar mi marca</StyledLabelName>
          <StyledSublabel>Paises</StyledSublabel>
          <SelectCountry
            country={props.country}
            setCountry={props.setCountry}
            error={props.error}
            setError={props.setError}
          />
          {
            props.country && // label con el pais seleccionado
              <StyledCountrySelected>
                {props.country}
                <IconCloseCircle size='25px' className='ml-1' />
              </StyledCountrySelected>
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
            steoOne.checkButtons.map((elem, index) => (
              <RadioButttons
                key={elem.id}
                value={elem.value}
                title={elem.title}
                name='buttonCheck'
                description={elem.description}
                onChange={showRegisterAlert}
                checked={index === 0}
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

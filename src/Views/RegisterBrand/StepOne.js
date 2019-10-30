import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../utilities/constants'
import { countries, steoOne } from '../../data.json'
import { IoIosCloseCircleOutline as IconCloseCircle, IoIosClose as IconClose } from 'react-icons/io'
import CheckButttons from '../utilities/CheckButtton'
import { Link } from 'react-router-dom'

const Alert = ({ showAlert }) => {
  return (
    <Styled.Alert>
      <p>
        Te recomendamos que hagas la <strong>"Búsqueda de antecedentes"</strong> antes de hacer una solicitud
      </p>
      <span onClick={() => showAlert(false)}>
        Cerrar
        <IconClose size='1.8rem' />
      </span>
    </Styled.Alert>
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
      <div className='col-7 px-4 mt-5'>
        <div className='form-group mr-5 position-relative' style={{ marginBottom: '7em' }}>
          <Styled.LabelForm htmlFor='countrySelect'>En qué pais quiero registrar mi marca</Styled.LabelForm>
          <Styled.SubLabel>Paises</Styled.SubLabel>
          <select className='custom-select' onChange={(e) => props.setCountry(e.target.value)}>
            <option value=''>Seleccione su pais</option>
            {countries.map(country => <option value={country} selected={country === props.country} key={country}>{country}</option>)}
          </select>
          {
            props.country &&
              <Styled.CountrySelected>
                {props.country}
                <IconCloseCircle size='25px' className='ml-1' />
              </Styled.CountrySelected>
          }
        </div>
      </div>
      <div className='col-12 px-0'>
        <div className='border-top my-4' />
        {
          showAlert &&
            <Alert showAlert={setShowAlert} />
        }
      </div>
      <div className='col-7 px-4 mt-3'>
        <div className='form-group'>
          {
            steoOne.checkButtons.map((elem) => (
              <CheckButttons
                key={elem.id}
                value={elem.value}
                title={elem.title}
                name='buttonCheck'
                description={elem.description}
                onChange={showRegisterAlert}
              >
                <Styled.Price to={`price${1}`}>
                  Ver precio
                </Styled.Price>
              </CheckButttons>
            ))
          }
        </div>
      </div>
    </>
  )
}

export const Styled = {
  LabelForm: styled.label`
    font-size: 1.15em;
  `,
  SubLabel: styled.p`
    /* color: ${COLOR.darkGrey};*/
    font-size: .9em;
    margin-top: 1.5rem;
  `,
  CountrySelected: styled.p`
    font-size: 1.1em;
    display: inline-block;
    padding: 5px 12px;
    border-radius: 15px;
    bottom:0;
    margin-bottom: -50px;
    position: absolute;
    left: 0;
    background-color: ${COLOR.aqua};
    color: ${COLOR.darkGrey}
  `,
  Alert: styled.div`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    background-color: ${COLOR.lighBlue};
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    & p{
      margin-bottom: 0;
    }
    & span{
      color: ${COLOR.blue};
      font-style: italic;
      font-weight: normal;
      font-size: 0.8em;
      cursor: pointer;
    }
  `,
  Price: styled(Link)`
    text-align: right;
    margin-bottom: 10px;
    font-weight: normal;
    font-style: italic;
    font-size: .8em;
`
}

export default StepOne

import React from 'react'
import { countries } from '../../../../data'
import ErrorAlert from '../alerts/ErrorAlert'
import { StyledSublabel } from '../../../GlobalStyles'

const SelectCountry = ({ value, onChange, error, setError, label, name }) => {
/*  const handleChange = e => {
    setCountry(e.target.value)
    setError(false)
  } */

  const defaultOption = 'Seleccione su pais'

  return (
    <>
      <StyledSublabel>
        {label}
        <select
          className={`custom-select ${error ? 'error' : ''}`}
          onChange={onChange}
          defaultValue={value}
          name={name}
        >
          <option value=''>{defaultOption}</option>
          {
            countries.map(contry => <option value={contry} key={contry}>{contry}</option>)
          }
        </select>
        {{/* error && <ErrorAlert message='Por favor, introduzca un valor' /> */}}
      </StyledSublabel>
    </>
  )
}

export default SelectCountry

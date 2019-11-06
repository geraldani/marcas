import React from 'react'
import { countries } from '../../../../data'
import { StyledSelect, StyledError } from './styles'

const SelectCountry = ({ country, setCountry, error, setError }) => {
  const handleChange = e => {
    setCountry(e.target.value)
    setError(false)
  }

  return (
    <>
      <StyledSelect
        className={`custom-select ${error ? 'error' : ''}`}
        onChange={handleChange}
        defaultValue={country}
      >
        <option value=''>Seleccione su pais</option>
        {
          countries.map(contry =>
            <option
              value={contry}
              key={contry}
            >
              {contry}
            </option>
          )
        }
      </StyledSelect>
      {
        error && <StyledError>Por favor, introduzca un valor</StyledError>
      }
    </>
  )
}

export default SelectCountry

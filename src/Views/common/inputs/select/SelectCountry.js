import React from 'react'
import { countries } from '../../../../data'
import ErrorAlert from '../../alerts/ErrorAlert'
import { StyledSelect } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import PropTypes from 'prop-types'

const Select = ({ value, onChange, error, label, name, type }) => {
  /*  const handleChange = e => {
      setCountry(e.target.value)
      setError(false)
    } */

  // console.log('hay errores en el select? ', error)
  const multiple = type === 'select-multi'

  const defaultOption = 'Seleccione su pais'
  return (
    <>
      <StyledSublabel>
        {label}
        <StyledSelect
          className={`custom-select ${error ? 'error' : ''}`}
          onChange={onChange}
          value={multiple ? value[value.length - 1] ? value[value.length - 1] : '' : value}
          name={name}
        >
          <option value={multiple ? [] : ''}>{defaultOption}</option>
          {
            countries.map(contry => (
              <option
                value={contry}
                key={contry}
                disabled={multiple ? value.find(elem => elem === contry) === contry : false}
              >
                {contry}
              </option>
            ))
          }
        </StyledSelect>
        <ErrorAlert message={error} />
      </StyledSublabel>
    </>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
}

export default Select

import React from 'react'
import { countries } from '../../../../data'
import ErrorAlert from '../alerts/ErrorAlert'
import { StyledSelect } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import PropTypes from 'prop-types'

const Select = ({ value, onChange, error, setError, label, name, multiple }) => {
  /*  const handleChange = e => {
      setCountry(e.target.value)
      setError(false)
    } */
  const defaultOption = 'Seleccione su pais'
  // TODO estilar el multiselect para que se vea igual al single select
  return (
    <>
      <StyledSublabel>
        {label}
        <StyledSelect
          className={`custom-select ${error ? 'error' : ''}`}
          onChange={onChange}
          defaultValue={value[name] || multiple ? [] : ''}
          name={name}
          multiple={multiple}
        >
          <option value={multiple ? [] : ''}>{defaultOption}</option>
          {
            countries.map(contry => (
              <option
                value={contry.toLowerCase()}
                key={contry}
                disabled={multiple ? value[name] && value[name].find(elem => elem === contry.toLowerCase()) === contry.toLowerCase() : false}
              >
                {contry}
              </option>
            ))
          }
        </StyledSelect>
        {/* error && <ErrorAlert message='Por favor, introduzca un valor' /> */}
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

import React from 'react'
import { data } from '../../../../data.js'
import ErrorAlert from '../../alerts/ErrorAlert'
import { StyledSelect } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import PropTypes from 'prop-types'
import Tooltip from '../../tooltip/Tooltip'

const { countries } = data

const Select = ({ value, onChange, error, label, name, type, tooltip }) => {
  const multiple = type === 'select-multi'
  const valueDefault = multiple ? value[value.length - 1] ? value[value.length - 1] : '' : value
  const defaultOption = 'Seleccione su pais'

  return (
    <StyledSublabel>
      <span className='d-flex'>
        {label}
        {tooltip && <Tooltip title={tooltip} style={{ marginTop: '0.5em' }} />}
      </span>

      <StyledSelect
        className={`custom-select ${error ? 'error' : ''}`}
        onChange={onChange}
        value={valueDefault}
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
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
}

export default Select

import React from 'react'
import ErrorAlert from '../../alerts/ErrorAlert'
import { StyledSublabel } from '../../../GlobalStyles'
import PropTypes from 'prop-types'
import Tooltip from '../../tooltip/Tooltip'

const Input = ({ type, classname, name, disabled, value, onChange, initialValue }) => (
  <input
    type={type}
    className={classname}
    name={name}
    disabled={disabled}
    defaultValue={initialValue}
    value={value}
    onChange={onChange}
  />
)

const InputWithLabel = (props) => (
  <StyledSublabel disabled={props.disabled}>
    <span className='d-flex'>
      {props.label}
      {props.tooltip && <Tooltip title={props.tooltip} style={{ marginTop: '0.5em' }} />}
    </span>
    <Input {...props} />
  </StyledSublabel>
)

const InputText = ({ type, name, value, onChange, error, label, disabled, className, initialValue, errorStyle, tooltip }) => {
  const errorClass = error ? 'error' : ''
  const classname = className ? `form-control ${className} ${errorClass}` : `form-control ${errorClass}`
  const prop = { type, classname, name, disabled, value, onChange, label, initialValue, tooltip }

  return (
    <>
      {label ? <InputWithLabel {...prop} /> : <Input {...prop} />}
      <ErrorAlert message={error} style={errorStyle} />
    </>
  )
}
InputText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
}

export default InputText

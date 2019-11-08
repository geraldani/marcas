import React from 'react'
import ErrorAlert from '../alerts/ErrorAlert'
import { StyledSublabel } from '../../../GlobalStyles'
import PropTypes from 'prop-types'

const Input = ({ type, classname, name, disabled, value, onChange, initialValue }) => (
  <input
    type={type}
    className={classname}
    name={name}
    disabled={disabled}
    defaultValue={initialValue}
    value={value ? value[name] : ''}
    onChange={onChange}
  />
)

const InputWithLabel = (props) => (
  <StyledSublabel disabled>
    {props.label}
    <Input {...props} />
  </StyledSublabel>
)

const InputText = ({ type, name, value, onChange, errorAlert, label, disabled, className, initialValue }) => {
  const classname = className ? `form-control ${className}` : 'form-control'

  const prop = { type, classname, name, disabled, value, onChange, label, initialValue }

  return (
    <>
      {label ? <InputWithLabel {...prop} /> : <Input {...prop} />}
      {errorAlert && <ErrorAlert message={errorAlert} />}
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

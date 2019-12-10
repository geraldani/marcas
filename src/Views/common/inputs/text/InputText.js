import React from 'react'
import ErrorAlert from '../../alerts/ErrorAlert'
import { StyledSublabel } from '../../../styles/GlobalStyles'
import PropTypes from 'prop-types'
import Tooltip from '../../tooltip/Tooltip'
import MoreInfoButton from '../../buttons/MoreInfo/MoreInfoButton'

const Input = (props) => (
  <input
    {...props}
  />
)

const InputWithLabel = (props) => (
  <StyledSublabel disabled={props.disabled} color={props.colorLabel}>
    <span className='d-flex'>
      {props.label}
      {props.tooltip && <Tooltip title={props.tooltip} style={{ marginTop: '0.5em' }}/>}
      {props.moreInfo && <MoreInfoButton info={props.moreInfo} showInModal/>}
    </span>
    <Input {...props} />
  </StyledSublabel>
)

const InputText = ({ type, name, value, onChange, error, label, disabled, className, initialValue, errorStyle, tooltip, moreInfo, onKeyDown, colorLabel, style }) => {
  const errorClass = error ? 'error' : ''
  const classname = className ? `form-control ${className} ${errorClass}` : `form-control ${errorClass}`
  const commonProps = {
    type,
    className: classname,
    name,
    disabled,
    value,
    onChange,
    label,
    defaultValue: initialValue,
    tooltip,
    colorlabel: colorLabel,
    moreinfo: moreInfo,
    onKeyDown,
    style
  }

  return (
    <>
      {label ? <InputWithLabel {...commonProps} /> : <Input {...commonProps} />}
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

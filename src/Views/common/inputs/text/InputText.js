import React from 'react'
import ErrorAlert from '../../alerts/ErrorAlert'
import { StyledSublabel } from '../../../styles/GlobalStyles'
import PropTypes from 'prop-types'
import Tooltip from '../../tooltip/Tooltip'
import MoreInfoButton from '../../buttons/MoreInfo/MoreInfoButton'

const Input = ({ value, onChange, type, name, defaultValue, className, style, placeholder, disabled, ...props }) => {
  const commonPropsInput = { value, onChange, type, defaultValue, name, className, style, placeholder, disabled }
  if (props.label) {
    return (
      <StyledSublabel
        disabled={props.disabled}
        inline={props.inline}
        className={props.classnameLabel}
        style={props.styleLabel}
      >
        <span className='d-flex'>
          {props.label}
          {props.tooltip && <Tooltip title={props.tooltip} style={{ marginTop: '0.5em' }}/>}
          {props.moreInfo && <MoreInfoButton info={props.moreInfo} showInModal/>}
        </span>
        <input {...commonPropsInput} />
      </StyledSublabel>
    )
  }
  return <input {...commonPropsInput} />
}

const InputText = (props) => {
  const {
    type, name, value, onChange, error, label, disabled, className, placeholder, styleLabel,
    defaultValue, errorStyle, tooltip, moreInfo, onKeyDown, style, inline, classnameLabel
  } = props

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
    defaultValue,
    tooltip,
    moreInfo,
    onKeyDown,
    style,
    inline,
    classnameLabel,
    placeholder,
    styleLabel
  }

  return (
    <>
      <Input {...commonProps} />
      <ErrorAlert message={error} style={errorStyle} />
    </>
  )
}

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  inline: PropTypes.bool
}

export default InputText

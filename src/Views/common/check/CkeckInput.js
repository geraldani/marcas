import React from 'react'
import Tooltip from '../tooltip/Tooltip'
import { StyledLabel, StyledCheckbox, StyledCheckboxIcon } from './styles'
import PropTypes from 'prop-types'

const CkeckInput = ({ label, tooltipTitle, name, styles, onChange, checked, error }) => {
  return (
    <StyledLabel styles={styles}>
      <StyledCheckbox type='checkbox' name={name} onChange={onChange} checked={checked} />
      <StyledCheckboxIcon error={error} />
      <p className='ml-4 mb-0'>{label}</p>
      {
        tooltipTitle && <Tooltip title={tooltipTitle} />
      }
    </StyledLabel>
  )
}

CkeckInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CkeckInput

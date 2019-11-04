import React from 'react'
import Tooltip from '../tooltip/Tooltip'
import { StyledLabel, StyledCheckbox, StyledCheckboxIcon } from './styles'

const CkeckInput = ({ title, tooltipTitle, value, styles, controller }) => {
  return (
    <StyledLabel styles={styles}>
      <StyledCheckbox type='checkbox' value={value} />
      <StyledCheckboxIcon />
      <p className='ml-4 mb-0'>{title}</p>
      {
        tooltipTitle &&
        <Tooltip title={tooltipTitle} />
      }
    </StyledLabel>
  )
}

export default CkeckInput

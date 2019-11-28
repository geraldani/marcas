import React, { useEffect } from 'react'
import $ from 'jquery'
import { StyledTooltip } from './styles'
import PropTypes from 'prop-types'
import { IoMdHelpCircle as IconHelp } from 'react-icons/io'
import { COLOR } from '../../../utils/constants'

const Tooltip = ({ title, style }) => {
  // effect para cargar el tooltip.. esquivalente a llamarlo en ComponentDidMount
  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip()
  }, [])

  return (
    <StyledTooltip
      data-toggle='tooltip'
      data-placement='right'
      title={title}
      style={style}
    >
      <IconHelp color={COLOR.blue} size='100%' />
    </StyledTooltip>
  )
}

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Tooltip

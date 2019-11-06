import React, { useEffect } from 'react'
import $ from 'jquery'
import { StyledTooltip } from './styles'

const Tooltip = ({ title }) => {
  // effect para cargar el tooltip.. esquivalente a llamarlo en ComponentDidMount
  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip()
  }, [])

  return (
    <StyledTooltip
      data-toggle='tooltip'
      data-placement='right'
      title={title}
    />
  )
}

export default Tooltip

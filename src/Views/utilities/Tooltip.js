import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { COLOR } from './constants'

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

const StyledTooltip = styled.div`
  position: relative;
  top:-7px;
  height: 9px;
  width: 9px;
  background-color: ${COLOR.blue};
  border-radius: 50%;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after{
    content: '?';
    position: absolute;
    color: ${COLOR.white};
    font-size: 9px;
    text-align: center;
  }
`

export default Tooltip

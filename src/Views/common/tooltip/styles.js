import styled from 'styled-components'
import { COLOR } from '../constants'

export const StyledTooltip = styled.div`
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

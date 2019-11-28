import styled from 'styled-components'
import { COLOR } from '../../../utils/constants'

export const StyledTooltip = styled.div`
  position: relative;
  top:-7px;
  height: 15px;
  width: 15px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border-radius: 50%;
  background-color: ${COLOR.blue};*/
  /*&:after{
    content: '?';
    position: absolute;
    color: ${COLOR.white};
    font-size: 9px;
    text-align: center;
  }*/
`

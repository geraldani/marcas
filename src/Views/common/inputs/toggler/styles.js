import styled from 'styled-components'
import { COLOR } from '../../../../utils/constants'

const SwitchWidth = 50
const SwitchHeight = 25
const circleSize = 20
const circleMarginX = 3

const StyledSwitch = styled.div`
  position: relative;
  cursor: pointer;
  width: ${SwitchWidth}px;
  height: ${SwitchHeight}px;
  background-color: ${COLOR.mediumGray};
  transition: .4s;
  border-radius: 10px;
  &:before {/* Bola de si esta en true o no */
    content: "";
     position: absolute;
     height: ${circleSize}px;
     width: ${circleSize}px;
     bottom: calc(50% - ${circleSize / 2}px + 0.5px );
     background-color: ${COLOR.white};
     transition: .4s;
     border-radius: 50%;
    left: calc(100% - ${circleSize}px - ${circleMarginX}px);
  }
`

const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-bottom: 0;
  & input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
    &:checked + ${StyledSwitch} {
      background-color: ${COLOR.mediumBlue};
    }
    &:checked + ${StyledSwitch}:before {
      left: ${circleMarginX}px;
      background-color: ${COLOR.blue};
    }
  }
`

export { StyledSwitch, StyledContainer }

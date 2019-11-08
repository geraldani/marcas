import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../constants'

const StyledPickerContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 450px;
  & .photoshop-picker{
    width: inherit!important;
  }
  @media (max-width: ${SCREEN.sm}px){
    width: 340px;
  }
`
const StyledColorSquare = styled.span`
  height: 36px;
  width: 55px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.isHexColor ? props.color : 'transparent'};
  border: ${props => props.isHexColor ? 'none' : `solid 1px ${COLOR.darkGrey}`};
  &:after{
  ${props => !props.isHexColor &&
    css`
      content: '';
      width: 1px;
      height: 58px;
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${COLOR.black};
      transform-origin: top center;
      transform: rotate(55deg); `
    }
  }
`

export { StyledPickerContainer, StyledColorSquare }

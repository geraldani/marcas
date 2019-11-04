import styled from 'styled-components'
import { COLOR } from '../constants'

const StyledLabel = styled.label`
  position: relative;
 font-size: .9em;
 display: inline-flex;
 align-items: center;
 cursor: pointer;
 ${props => props.styles}
 &:hover{
  color: ${COLOR.darkGrey};
 }
`

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:hover + span{
    background-color: ${COLOR.lightGrey};
  }
  &:checked + span {
    background-color: ${COLOR.lighBlue};
    border-color: ${COLOR.blue}
  }
   &:checked + span:after{
    display: block;
  }
`
const StyledCheckboxIcon = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  height: 15px;
  width: 15px;
  border: solid 2px ${COLOR.mediumGray};
  border-radius: 2px;
  transition: 0.4s;
  &:after{
    content: "";
    position: absolute;
    display: none;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export { StyledLabel, StyledCheckbox, StyledCheckboxIcon }

import styled, {css} from 'styled-components'
import { COLOR } from '../../../utils/constants'

const StyledPageItem = styled.button`
  border: none;
  color: ${COLOR.primary};
  background: none;
  text-align: center;
  font-weight: normal;
  transition: transform 100ms;
  margin: 0 .25em;
  &:hover{
    font-weight: bold;
  }
  &:active{
    transform: scale(.9);
  }
  ${props => props.active && css`
    background-color: ${COLOR.primary};
    font-weight: bold;
    color: ${COLOR.white};
    width: 37px;
    height: 37px;
    border-radius: 50%;
  `};


  &:first-child,
  &:last-child{
    color: ${COLOR.darkGrey};
    ${props => props.disabled && css`
      color: ${COLOR.mediumGray};
    `}
    &:hover{
      opacity: 0.8;
    }
  }
`
export {
  StyledPageItem
}

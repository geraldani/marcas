import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const StyledNavItem = styled.li`
  a.nav-link:hover:before,
  &.active:before{
    content: '';
    width: 100%;
    border-bottom: solid 4px ${COLOR.primary};
    position: absolute;
    left: 0;
    bottom: -12px;
  }
   a.nav-link:hover, 
   &.active a.nav-link {
    color: ${COLOR.primary}!important;
    position: relative;
  }
  @media (max-width: ${SCREEN.lg}px){
    a.nav-link:hover:before,
    &.active:before{
      border-bottom: none;
    }
  }
`
const StyledLink = styled(Link)`
  color: ${COLOR.darkGrey}!important;
  display: flex;
  justify-content: center;
  align-items: center;
  &.dropdown-toggle:after{
    width: 10px;
    height: 10px;
    vertical-align: middle;
    margin-left: 5px;
    border-right: solid 2px ${COLOR.darkGrey};
    border-bottom: solid 2px ${COLOR.darkGrey};
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    transform-origin: 100%;
    /*transform: rotate(225deg);
    transform-origin: 50% 50%;*/
  }
`
const StyledSubLink = styled(Link)`
  &:hover{
    background-color: ${COLOR.primary}!important;
    color: ${COLOR.white}!important;
 }
`

export { StyledLink, StyledNavItem, StyledSubLink }

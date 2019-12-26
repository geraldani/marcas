import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const StyledNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -250px;
  right: ${props => props.fixed ? '10px' : '20px'};
  background-color: ${COLOR.grey};
  box-shadow: 0 2px 7px -2px rgba(0,0,0,.7);
  border-radius: 5px;
  padding: 0.4em 0.8em;
  width: 180px;
  z-index: 1029;
  transition: all 400ms;
  ${props => {
    if (props.show) {
      if (props.fixed) return 'top: 0px'
      else return 'top: 66px'
    }
  }}
  button{
    background: none;
    border: none;
    padding: .5em 0;
    color: ${COLOR.darkGrey};
    &:hover{
      font-weight: bold;
    }
  }
  a{
    color: ${COLOR.darkGrey};
    font-weight: normal;
    padding: .5em 0;
    &:hover{
      text-decoration: none;
      color: ${COLOR.darkGrey};
      font-weight: bold;
    }
  }
  a, button{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
      margin-right: 10px;
    }
  }
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  svg{
   transition: all 400ms;
    ${props => props.show && css`
      transform: rotate(180deg);
  `}
  }
`

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

export { StyledLink, StyledNavItem, StyledSubLink, StyledNav, StyledButton }

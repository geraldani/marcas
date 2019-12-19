import styled, { css } from 'styled-components'
import { COLOR } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'

const StyledNav = styled.nav`
  height: ${props => props.viewPortHeight >= props.height ? 'calc(100vh - 66px)' : '100%'};
  background: ${COLOR.darkBlue};
`
const commonStyles = css`
  padding: 0.7rem 1rem;
  font-weight: normal;
  color: ${COLOR.white}!important;
  width: 100%;
  &:hover{
    text-decoration: none;
    font-weight: bold;
  }
  &.active{
    background-color: rgba(255,255,255,0.2);
    font-weight: bold;
  }
`

const StyledLink = styled(NavLink)`
  ${commonStyles};
`
const StyledButton = styled.button`
  ${commonStyles};
  background-color: transparent;
  border: none; 
  text-align: left;
`
export { StyledNav, StyledLink, StyledButton }

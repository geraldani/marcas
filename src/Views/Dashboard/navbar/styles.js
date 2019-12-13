import styled, { css } from 'styled-components'
import { COLOR } from '../../../utils/constants'
import { HashLink as Link } from 'react-router-hash-link'

const StyledNav = styled.nav`
  height: ${props => props.viewPortHeight >= props.height ? 'calc(100vh - 66px)' : '100%'};
  background: ${COLOR.darkBlue};
`
const StyledLink = styled(Link)`
  padding: 0.7rem 1rem;
  font-weight: normal;
  color: ${COLOR.white}!important;
  &:hover{
    text-decoration: none;
    font-weight: bold;
  }
  ${props => props.active === 'true' && css`
    background-color: rgba(255,255,255,0.2);
    font-weight: bold;
  `}
`
export { StyledNav, StyledLink }

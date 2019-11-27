import styled from 'styled-components'
import { COLOR } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const StyledNavItem = styled.li`
  & a.nav-link:hover:before,
  &.active:before{
    content: '';
    width: 100%;
    border-bottom: solid 4px ${COLOR.purple};
    position: absolute;
    left: 0;
    bottom: -12px;
  }
  &.active a.nav-link,
  & a.nav-link:hover {
    color: ${COLOR.purple}!important;
    position: relative;
  }
`
const StyledLink = styled(Link)`
  color: ${COLOR.mediumGray}
`

export { StyledLink, StyledNavItem }

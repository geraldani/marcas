import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, SCREEN } from '../../../utils/constants'

const StyledCopyright = styled.p`
  color: ${COLOR.darkGrey};
  font-weight: normal;
  font-size: .8rem;
  margin-bottom: 0;
  @media (max-width: ${SCREEN.md}px){
    text-align: center;
    margin-bottom: 1rem;
  }
`
const StyledLink = styled(Link)`
  color: ${COLOR.darkGrey};
  font-size: .8rem;
  &:hover{
    text-decoration: none;
    color: ${COLOR.darkGrey};
    opacity: .8;
  }
  &:not(:last-child){
    margin-right: 1.5em
  }
  @media (max-width: ${SCREEN.md}px){
    margin-right: 0!important;
  }
`

export { StyledCopyright, StyledLink }

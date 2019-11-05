import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR } from '../../constants'
import Button from '../../buttons/Button'

const StyledLink = styled(Link)`
  font-style: italic;
  color: ${COLOR.purple};
  font-weight: 500;
  ${props => props.margin};
  transition: all 200ms;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  &:hover{
    text-decoration: none;
    color: ${COLOR.purple};
    opacity: 0.6;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: 768px){
    width: 100%;
  }

`

export { StyledLink, StyledButton }

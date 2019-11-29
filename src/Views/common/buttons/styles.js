import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const ButtonStylesTypes = {
  primary: css`
    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    border-color: ${COLOR.primary}!important;
  `,
  'outline-white': css`
    background-color: ${COLOR.transparent};
    color: ${COLOR.white};
    border-color: ${COLOR.white};
  `,
  'outline-primary': css`
    background-color: ${COLOR.transparent};
    color: ${COLOR.primary};
    border-color: ${COLOR.primary};
  `,
  'simple-primary': css`
    background-color: ${COLOR.transparent};
    color: ${COLOR.primary};
    border-color: ${COLOR.transparent};
  `
}

const commonStyles = css`
  ${props => ButtonStylesTypes[Object.keys(ButtonStylesTypes).find(style => style === props.styles)]};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid;
  vertical-align: middle;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  font-size: 1.25rem;
  transition: all 0.15s ease-in-out, 
              background-color 0.15s ease-in-out, 
              border-color 0.15s ease-in-out, 
              box-shadow 0.15s ease-in-out;
  &:hover{
    transform: scale(1.05);
    text-decoration: none;
    color: white; 
    cursor: pointer;
  }
  @media (max-width: ${SCREEN.md}px){
    &:hover{
      transform: scale(1);
      opacity: 0.7;
    }
  }
`
const StyledButton = styled.button`${commonStyles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${commonStyles}` // para renderizar un link (a) con los mismos estilos

export { StyledButton, StyledLink }

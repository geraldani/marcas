import styled, { css } from 'styled-components'
import { COLOR } from '../constants'
import { Link } from 'react-router-dom'

const commonStyles = css`
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: ${({ styles }) => {
    switch (styles) {
      case 'purple':
        return COLOR.purple
      case 'outline-white':
        return COLOR.transparent
      case 'outline-purple':
        return COLOR.transparent
      default:
        return COLOR.white
  }
  }};
  border: 2px solid;
  border-color: ${({ styles }) => {
    switch (styles) {
      case 'purple':
        return COLOR.transparent
      case 'outline-white':
        return COLOR.white
      case 'outline-purple':
        return COLOR.purple
      default:
        return COLOR.transparent
    }
  }};
  vertical-align: middle;
  border-radius: 0.25rem;
  color: ${({ styles }) => styles === 'outline-purple' ? COLOR.purple : COLOR.white}!important;
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
  @media (max-width: 768px){
    &:hover{
      transform: scale(1);
      opacity: 0.7;
    }
  }
`

export const StyledButton = styled.button`${commonStyles}` // para renderizar un boton con los mismos estilos
export const StyledLink = styled(Link)`${commonStyles}` // para renderizar un link (a) con los mismos estilos

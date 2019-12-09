import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const btnPaddingX = {
  sm: 1.5 + 'rem',
  md: 1.9 + 'rem',
  lg: 2.667 + 'rem'
}

const btnPaddingY = {
  sm: 0.2 + 'rem',
  md: 0.6667 + 'rem',
  lg: 1.067 + 'rem'
}

const btnFont = {
  sm: 15 + 'px',
  md: 1 + 'rem',
  lg: 1.2 + 'rem'
}

const ButtonStylesTypes = {
  primary: css`
    background-color: ${props => props.color || COLOR.primary};
    color: ${COLOR.white};
    border-color: ${props => props.color || COLOR.primary}!important;
    &:hover{
      color: ${COLOR.white}!important;
    }
  `,
  'outline-white': css`
    background-color: ${COLOR.transparent};
    color: ${COLOR.white};
    border-color: ${COLOR.white};
    &:hover{
      color: ${COLOR.white}!important;
    }
  `,
  'outline-primary': css`
    background-color: ${COLOR.transparent};
    color: ${props => props.color || COLOR.primary};
    border-color: ${props => props.color || COLOR.primary};
     &:hover{
      color: ${props => props.color || COLOR.primary}!important;
    }
  `,
  'simple-primary': css`
    background-color: ${COLOR.transparent};
    color: ${props => props.color || COLOR.primary};
    border: none!important;
     &:hover{
      color: ${props => props.color || COLOR.primary}!important;
    }
  `
}

const buttonSize = (paddingX, paddingY, fontSize) => css`
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};
`

const findButtonSize = (size) => {
  const elem = ['xs', 'sm', 'md', 'lg', 'xg'].find(e => e === size)
  return buttonSize(btnPaddingX[elem], btnPaddingY[elem], btnFont[elem])
}

const commonStyles = css`
  ${props => ButtonStylesTypes[Object.keys(ButtonStylesTypes).find(style => style === props.styles)]};
  font-weight: 500;
  border: 2px solid;
  vertical-align: middle;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  transition: all 0.15s ease-in-out, 
              background-color 0.15s ease-in-out, 
              border-color 0.15s ease-in-out, 
              box-shadow 0.15s ease-in-out;
              
  //buttonSize
    ${props => findButtonSize(props.size)};
    
  &:hover{
    transform: scale(1.05);
    text-decoration: none;
    cursor: pointer;
  }
  &:active{
    transform: scale(0.9);
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

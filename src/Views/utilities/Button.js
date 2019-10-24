import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from './colors'

const Button = ({ title, styled = 'purple', children, link, onClick, className }) => {
  const ButtonLink = link ? StyledLink : StyledButton

  return (
    <ButtonLink className={className} styles={styled} to={link} onClick={onClick}>
      {title}
      {children}
    </ButtonLink>
  )
}

export default Button

/* STYLES */
const styles = css`
    font-weight: 500;
    padding: 0.5rem 1rem;
    background-color: ${({ styles }) => {
  switch (styles) {
    case 'purple': return COLORS.purple
    case 'outline-white': return COLORS.transparent
    case 'outline-purple': return COLORS.transparent
    default: return COLORS.white
  }
}};
    border: 2px solid;
    border-color: ${({ styles }) => {
  switch (styles) {
    case 'purple': return COLORS.transparent
    case 'outline-white': return COLORS.white
    case 'outline-purple': return COLORS.purple
    default: return COLORS.transparent
  }
}};
    vertical-align: middle;
    border-radius: 0.25rem;
    color: ${({ styles }) => styles === 'outline-purple' ? COLORS.purple : COLORS.white}!important;
    text-align: center;
    display: inline-block;
    font-size: 1.25rem;
    //box-shadow: 0 0 11px -1px rgba(0, 0, 0, 0.75);
    transition: all 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
const StyledButton = styled.button`${styles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${styles}` // para renderizar un link (a) con los mismos estilos

Button.propTypes = {
  title: PropTypes.string.isRequired
}

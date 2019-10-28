import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR } from './constants'

const Button = ({ title, styled = 'purple', children, link, onClick, className }) => {
  const StyledButtonLink = link ? Styled.Link : Styled.Button

  return (
    <StyledButtonLink className={className} styles={styled} to={link} onClick={onClick}>
      {title}
      {children}
    </StyledButtonLink>
  )
}

export default Button

/* STYLES */
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
    }`
const Styled = {
  Button: styled.button`${commonStyles}`, // para renderizar un boton con los mismos estilos
  Link: styled(Link)`${commonStyles}` // para renderizar un link (a) con los mismos estilos
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
}

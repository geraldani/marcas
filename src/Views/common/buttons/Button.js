import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink, StyledButton } from './styles'

const Button = ({ title, styled = 'purple', children, link, onClick, className }) => {
  const StyledButtonLink = link ? StyledLink : StyledButton

  return (
    <StyledButtonLink
      className={className}
      styles={styled}
      to={link}
      onClick={onClick}
      title={title}
    >
      {title}
      {children}
    </StyledButtonLink>
  )
}

export default Button

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
}

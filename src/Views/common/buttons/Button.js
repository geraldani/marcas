import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink, StyledButton } from './styles'

const Button = ({ title, styled = 'primary', children, link, onClick, className, style, childrenFirst }) => {
  const StyledButtonLink = link ? StyledLink : StyledButton
  return (
    <StyledButtonLink
      className={className}
      styles={styled}
      to={link}
      onClick={onClick}
      title={title}
      style={style}
    >
      {childrenFirst && children}
      {title}
      {!childrenFirst && children}
    </StyledButtonLink>
  )
}

export default Button

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  styled: PropTypes.oneOf(['primary', 'outline-white', 'outline-primary', 'simple-primary']),
  className: PropTypes.string,
  childrenFirst: PropTypes.bool
}

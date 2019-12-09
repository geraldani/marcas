import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink, StyledButton } from './styles'

const Button = ({ title, styled = 'primary', children, link, onClick, className, style, childrenFirst, size = 'md', color }) => {
  const commonProps = {
    className,
    styles: styled,
    to: link,
    onClick,
    title,
    style,
    size,
    color
  }
  const StyledButtonLink = link ? StyledLink : StyledButton
  return (
    <StyledButtonLink
      {...commonProps}
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

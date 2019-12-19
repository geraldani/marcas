import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ title, color = 'black', className = '', size }) => (
  <StyledTitle
    className={className}
    {...{ color, size }}
  >
    {title}
  </StyledTitle>
)
export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired
}

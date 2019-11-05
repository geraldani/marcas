import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ title, color = 'black', className = '' }) => (
  <StyledTitle
    className={className}
    style={{ color }}
  >
    {title}
  </StyledTitle>
)
export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired
}

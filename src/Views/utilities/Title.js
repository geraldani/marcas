import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, color = 'black', className = '' }) => (
  <h2 className={`text-center main-title ${className}`} style={{ color }}>{title}</h2>
)
export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired
}

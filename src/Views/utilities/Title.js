import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, color = 'black' }) => (
  <h2 className='text-center main-title mb-4' style={{ color }}>{title}</h2>
)
export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired
}

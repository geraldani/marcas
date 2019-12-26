import React from 'react'
import { StyledCircleLoader } from './styles'
import Proptypes from 'prop-types'

const CircleLoader = (props) => <StyledCircleLoader {...props} />

CircleLoader.defaultProps = {
  size: '20px',
  width: '3px'
}

CircleLoader.propTypes = {
  size: Proptypes.string,
  width: Proptypes.string
}
export default CircleLoader

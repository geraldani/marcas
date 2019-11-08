import React from 'react'
import PropTypes from 'prop-types'
import { StyledError } from './styles'

const ErrorAlert = ({ message }) => <StyledError>{message}</StyledError>

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorAlert

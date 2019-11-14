import React from 'react'
import { StyledError } from './styles'

const ErrorAlert = ({ message = '' }) => message ? <StyledError>{message}</StyledError> : null

export default ErrorAlert

import React from 'react'
import { StyledError } from './styles'

const ErrorAlert = ({ message = '', style }) => message ? <StyledError style={style}>{message}</StyledError> : null

export default ErrorAlert

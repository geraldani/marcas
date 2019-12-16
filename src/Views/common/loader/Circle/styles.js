import styled, { keyframes } from 'styled-components'
import { COLOR } from '../../../../utils/constants'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const StyledCircleLoader = styled.div`
  border: ${props => props.width} solid ${COLOR.lightGrey}; 
  border-top-color: ${COLOR.blue}; 
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spin} 1.3s ease infinite;
`

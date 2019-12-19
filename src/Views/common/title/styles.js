import styled from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'

const StyledTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.size || '24px'};
  margin-top: 5rem;
  color: ${props => props.color || COLOR.black};
  @media (max-width: ${SCREEN.md}px) {
    margin-top: 1.5rem;
  }
`
export { StyledTitle }

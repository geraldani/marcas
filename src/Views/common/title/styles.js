import styled from 'styled-components'
import { SCREEN } from '../../../utils/constants'

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-top: 5rem;
  @media (max-width: ${SCREEN.md}px) {
    margin-top: 1.5rem;
  }
`
export { StyledTitle }

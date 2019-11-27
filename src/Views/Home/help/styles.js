import styled from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'

const StyledText = styled.p`
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.3;
  color: ${COLOR.textColor};
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  @media (max-width: ${SCREEN.lg}px) {
    margin-left: 1.8rem;
    margin-right: 1.8rem;
    margin-bottom: 1rem;
  }
`

export { StyledText }

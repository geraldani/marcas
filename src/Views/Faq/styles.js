import styled from 'styled-components'
import { COLOR } from '../common/constants'

export const StyledContainer = styled.div`
  & p{
  color: ${COLOR.darkGrey};
  font-weight: normal;
  font-size: .95rem;
  }
  & h4{
    color: ${COLOR.darkGrey};
    margin-top: 1em;
  }
`

import styled from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'

const StyledContainer = styled.div`
  text-align: center;
  div{
    border-bottom: solid 2px ${COLOR.primary};
  }
  h2{
    color: ${COLOR.primary};
    font-size: 2.1rem;
    margin-top: 0.7rem;
    margin-bottom: 0;
    @media (min-width: ${SCREEN.md}px) and (max-width: ${SCREEN.lg}px){
        font-size: 2.1rem;
    }
  }
  p{
    font-weight: normal;
    font-size: 0.9rem;
    margin-top: 0.7em;
    margin-bottom: 1em;
  }

`

export {
  StyledContainer
}

import styled from 'styled-components'
import Button from '../../common/buttons/Button'
import { SCREEN } from '../../common/constants'

const StyledButton = styled(Button)`
  @media (max-width: ${SCREEN.md}px){
      width: 100%;
      margin-top: 2rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
`
export { StyledButton }

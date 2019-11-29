import styled from 'styled-components'
import { SCREEN } from '../../../../utils/constants'
import Button from '../../buttons/Button'

const StyledButton = styled(Button)`
  @media (max-width: ${SCREEN.md}px){
    width: 100%;
  }

`
export { StyledButton }

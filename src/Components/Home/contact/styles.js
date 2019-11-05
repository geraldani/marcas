import styled from 'styled-components'
import Button from '../../common/buttons/Button'

const StyledButton = styled(Button)`
  @media (max-width: 768px){
      width: 100%;
      margin-top: 2rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
`
export { StyledButton }

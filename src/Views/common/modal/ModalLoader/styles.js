import styled from 'styled-components'
import { LoaderSize } from '../../loader/styles'
import { COLOR } from '../../../../utils/constants'

const StyledLoader = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  bottom: calc(50vh - ${LoaderSize / 2}px);
  left: calc(50vw - ${LoaderSize / 2}px);
  p{
    margin-bottom: 0;
    color: ${COLOR.white};
  }
`
export { StyledLoader }

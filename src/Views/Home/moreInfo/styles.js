import styled, { css } from 'styled-components'
import { COLOR } from '../../../utils/constants'

const StyledContainer = styled.div`
  & p{
    color: ${COLOR.textColor};
    margin-bottom: 0.5em;
    line-height: 1.3;
    ${props => props.isEnum &&
      css`
      text-indent: -30px;
      margin-left: 30px; `
    }
  }
  & h3{
    margin-top: 1.1em;
  }
`

export { StyledContainer }

import styled, { css } from 'styled-components'
import { COLOR } from '../../utils/constants'

const commonStyles = css`
  color: ${COLOR.darkGrey};
  font-weight: normal;
  font-size: .95rem;

`

const StyledContainer = styled.div`
  & p{
    ${commonStyles}
  }
  & h4{
    font-size: 1.2rem;
    color: ${COLOR.darkGrey};
    margin-top: 1em;
  }
`

const StyledParagraph = styled.p`
  ${commonStyles}
  & span {
    text-decoration: underline;
  }
`

export { StyledContainer, StyledParagraph }

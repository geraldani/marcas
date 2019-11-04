import styled from 'styled-components'
import { COLOR } from './common/constants'

const StyledLegend = styled.p`
  color: ${COLOR.darkGrey};
  font-size: 0.78em;
  font-weight: normal;
  line-height: 1.2;
  width: 65%;
`

const StyledLabelName = styled.label`
  font-size: 1.15em;
`
const StyledSublabel = styled.p`
 /* color: ${COLOR.darkGrey};*/
    font-size: 15px;
    margin-top: 1.5rem;
    margin-bottom: 0.7rem;
    text-align: left;
`

const marginBottom = { marginBottom: '7rem' }

export {
  StyledLegend,
  StyledSublabel,
  StyledLabelName,
  marginBottom
}

import styled from 'styled-components'
import { COLOR } from './utilities/constants'

const StyledLegend = styled.p`
  color: ${COLOR.darkGrey};
  font-size: 0.75em;
  //width: 50%;
`

const LabelName = styled.label`
  font-size: 1.15em;
`
const Sublabel = styled.p`
 /* color: ${COLOR.darkGrey};*/
    font-size: .9em;
    margin-top: 1.5rem;
    margin-bottom: 0.7rem;
`

const marginBottom = { marginBottom: '7rem' }

export {
  StyledLegend,
  Sublabel,
  LabelName,
  marginBottom
}

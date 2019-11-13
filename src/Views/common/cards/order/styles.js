import styled from 'styled-components'
import { COLOR } from '../../constants'

const StyledType = styled.span`
  color: ${COLOR.textColor};
  font-size: .9em;
  opacity: .8;
  margin-left: 1em;
`
const StyledValue = styled.span`
  font-size: .9em;
  opacity: .9;
  margin-right: 1em;
  text-align: right;

`
const StyledNoOrder = styled.p`
  margin-bottom: 0;
  color: ${COLOR.darkGrey};
  font-size: .95em;
  line-height: 1.2;
`
const StyledIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
  margin: auto;
`

export { StyledType, StyledValue, StyledNoOrder, StyledIcon }

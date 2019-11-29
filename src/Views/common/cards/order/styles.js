import styled, {css} from 'styled-components'
import { COLOR } from '../../../../utils/constants'

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

const StyledButtonIcon = styled.button`
  padding: 0;
  background: none;
  border: navajowhite;
  transition: all 200ms;
  ${props => props.drop && css`
    transform: rotate(180deg);
  `}
  svg{
    fill: ${COLOR.primary}
  }
  :focus{
    outline: none;
    // outline: dotted 1px ${COLOR.primary};
  }
`

export { StyledType, StyledValue, StyledNoOrder, StyledIcon, StyledButtonIcon }

import styled from 'styled-components'
import { COLOR } from '../../../../utils/constants'

const iconSize = 15

const StyledButtonInfo = styled.button`
  margin-top: -3px;
  margin-left: 3px;
  width: ${props => props.type === 'text' ? 'auto' : iconSize + 'px'};
  height: ${props => props.type === 'text' ? 'auto' : iconSize + 'px'};
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  color: ${COLOR.primary};
  font-size: 0.7em;
`

export { StyledButtonInfo }

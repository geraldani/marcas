import styled from 'styled-components'
import { COLOR } from '../../../utils/constants'
import { StyledLegend } from '../../styles/GlobalStyles'

const StyledButton = styled.button`
  width: 98%;
  text-align: left;
  border: none;
  background-color: ${COLOR.lightGrey};
  color: ${COLOR.black};
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
  padding: 10px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledItalicLegend = styled(StyledLegend)`
  font-weight: 500;
  font-style: italic;
`
export { StyledButton, StyledItalicLegend }

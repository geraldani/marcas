import styled from 'styled-components'
import { StyledLegend } from '../../styles/GlobalStyles'

const StyledOption = styled.span`
  font-weight: normal;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  &:first-child{
    margin-right: 10px;
  }
  &:last-child{
    margin: 0 10px;
  }
`

const ClearLegend = styled(StyledLegend)`
  opacity: 0.7;
  width: 60%;
  margin-bottom: 0;
  margin-left: 1em;
`

export { StyledOption, ClearLegend }

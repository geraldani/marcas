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

const StyledSearchButton = styled.button`
  width: 35px;
  height: 45px;
  border: none;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background: ${COLOR.blue};
  svg{
    fill: ${COLOR.white};
  }
  &:hover{
    background-color: ${COLOR.blue + 'c7'};
  }
`

const StyledItalicLegend = styled(StyledLegend)`
  font-weight: 500;
  font-style: italic;
`

export {
  StyledButton,
  StyledItalicLegend,
  StyledSearchButton
}

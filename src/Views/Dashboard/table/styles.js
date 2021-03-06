import styled, {css}  from 'styled-components'
import { COLOR } from '../../../utils/constants'

const StyledTable = styled.table`
  border-radius: 7px;
  thead th{
    border-top: none;
    color: ${COLOR.darkGrey};
    font-size: 1rem;
  }
  
  svg{
    cursor: pointer;
  }
  
  tbody{
    td{
      font-weight: normal;
      color: ${COLOR.darkGrey};
      font-size: 0.9rem;
      &:first-child{
        color: ${COLOR.textColor};
        font-size: 0.85rem;
      }
    }
    tr:hover{
      ${props => props.hoverable && css`box-shadow: inset 5px 0 ${COLOR.primary}`};
    }
  }
`

export { StyledTable }

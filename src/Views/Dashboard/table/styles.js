import styled, { css } from 'styled-components'
import { COLOR } from '../../../utils/constants'

const StyledTable = styled.table`
  border-radius: 10px;
  thead th{
    border-top: none;
    color: ${COLOR.darkGrey};
  }

  tbody{
    td{
      font-weight: normal;
      color: ${COLOR.darkGrey};
    }
    tr:hover{
      //border-left: solid 4px ${COLOR.primary};
      box-shadow: -5px 0 0 0 ${COLOR.primary};
    }
  }
`

export { StyledTable }

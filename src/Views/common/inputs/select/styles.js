import styled from 'styled-components'

const RED = 'rgba(171,1,0,0.82)'

const StyledSelect = styled.select`
  &.error{
    border: solid 1px ${RED};
    outline: none;
  }
`

const StyledError = styled.p`
  color: ${RED};
  //color: #d24c49;
  margin-top: 8px;
  font-size: 0.8rem;
  font-weight: normal;
  position: absolute;
`

export { StyledSelect, StyledError }

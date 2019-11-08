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
  font-size: 0.75rem;
  font-weight: normal;
  position: absolute;
`

export { StyledSelect, StyledError }

import styled from 'styled-components'

const StyledPickerContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 450px;
  & .photoshop-picker{
    width: inherit!important;
  }
`
const StyledColorSquare = styled.span`
  height: 36px;
  width: 55px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.color};
`

export { StyledPickerContainer, StyledColorSquare }

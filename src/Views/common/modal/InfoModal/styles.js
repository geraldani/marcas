import styled from 'styled-components'
import { COLOR } from '../../../../utils/constants'
import { StyledScroll } from '../../../GlobalStyles'

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top:calc(50vh - 250px);
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${COLOR.white};
  padding: 30px;
  border-radius: 10px;
  width: 800px; 
  height: 500px;
  svg{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`

const StyledTextContainer = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  overflow-y: auto;
  padding-right:20px;
  ${StyledScroll}
`

export { StyledModal, StyledTextContainer }

import styled from 'styled-components'
import { COLOR } from '../../../../utils/constants'
import { StyledScroll } from '../../../GlobalStyles'

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top:calc(50vh - 45%);
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${COLOR.white};
  padding: 30px;
  border-radius: 10px;
  width: 80%; 
  height: 90%;
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
  font-size: 0.8em;
  font-weight: normal;
  ${StyledScroll}
`

export { StyledModal, StyledTextContainer }

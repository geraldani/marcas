import styled from 'styled-components'

const StyledModal = styled.div`
  background-color: rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
   height: ${props => props.height}px;
  &>*:nth-child(2),
  &>*:nth-child(3){
    position: fixed;
    //bottom: calc(50vh - px);
    bottom: calc(50vh - 100px);
    left: calc(50vw - 400px);
  }
`

const StyledButton = styled.button`
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  position: fixed;
  &:before,
  &:after{
      border-radius: 5px;
      content: '';
      height: 100%;
      width: 3px;
      background-color: black;
      position: absolute;
      top: 0;
      transition: all 0.2s;
    }
  &:before{
      transform: rotate(45deg);
    }
  &:after{
      transform: rotate(-45deg);
    }
  &:hover:after{ transform: scale(1.1) rotate(-45deg);}
  &:hover:before{ transform: scale(1.1) rotate(45deg); }
`

export { StyledModal, StyledButton }

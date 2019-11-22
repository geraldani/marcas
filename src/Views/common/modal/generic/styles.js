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
  & button{
    background: none;
    border: none;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
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
  }
`

export { StyledModal }

import styled, { css } from 'styled-components'
import { COLOR, SCREEN } from '../../../utils/constants'

const commonStyles = css`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: normal;
  position: relative;
  &:not(:last-child){
      margin-right: 48px;
  }
  &:not(:last-child):after{
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    top:0;
    bottom: 0;
    margin: auto;
    left: 28px;
    background-color: ${COLOR.primary};
  }
  @media (max-width: ${SCREEN.sm}px){
    &:not(:last-child){
      margin-right: 20px;
    }
     &:not(:last-child):after{
      width: 22px;
     }
  }
`

const StyledCircleFull = styled.p`
  ${commonStyles};
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  box-shadow: 0 2px 7px -2px rgba(0,0,0,.7);
`

const StyledCircleEmpty = styled.p`
  ${commonStyles};
  border: solid 2px ${COLOR.primary};
  color: ${COLOR.primary};
  font-weight: 500;
`

export { StyledCircleFull, StyledCircleEmpty }

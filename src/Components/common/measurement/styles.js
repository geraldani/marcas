import styled from 'styled-components'
import { COLOR } from '../constants'

const squareWidth = 80
const squareHeight = 100
const hyp = Math.sqrt((squareWidth * squareWidth) + (squareHeight * squareHeight))
const angle = Math.asin(squareWidth / hyp)

const StyledSquare = styled.div`
  width: ${squareWidth}px;
  height: ${squareHeight}px;
  background-color: ${COLOR.lightGrey};
  border: solid 2px ${COLOR.mediumGray};
  position: relative;
  &:after,
  &:before{
    content: '';
    position:absolute;
    width: 2px;
    height: ${hyp - 3}px;
    top: 0;
    background-color: ${COLOR.mediumGray};
    transform-origin: 50% 0;
  }
  &:before{
    right: 0;
    transform: rotate(${angle}rad);
  }
  &:after{
    left: 0;
    transform: rotate(-${angle}rad);
  }
`
const StyledWidth = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: normal;
  bottom:100%;
  color: ${COLOR.darkGrey};
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  opacity: 0.7;
  &:after{
    content: '';
    width: 100%;
    height: 10px;
    border-right: solid 1px ${COLOR.darkGrey};
    border-top: solid 1px ${COLOR.darkGrey};
    border-left: solid 1px ${COLOR.darkGrey};
    position:absolute;
    opacity: 0.7;
    z-index: 5;
    top:100%;
    left: 0;
  }
`
const StyledHeight = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  color: ${COLOR.darkGrey};
  left: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  opacity: 0.7;
  margin-left: 20px;
  &:before{
    content: '';
    height: 100%;
    width: 10px;
    border-right: solid 1px ${COLOR.darkGrey};
    border-top: solid 1px ${COLOR.darkGrey};
    border-bottom: solid 1px ${COLOR.darkGrey};
    position:absolute;
    opacity: 0.7;
    right: calc(100% + 5px);
  }
`
const StyledLabel = styled.label`
  margin-right: 30px;
  &:first-child{
    position: relative;
    &:after{
      content: 'x';
      position: absolute;
      vertical-align: middle;
      bottom: 28px;
      right: -19px;
      color: ${COLOR.darkGray};
      opacity: 0.6;
    }
  }
  
`
const StyledLabelName = styled.span`
  font-size: .8em;
  font-weight: normal;
  color: ${COLOR.darkGray};
  opacity: 0.6;
`

export { StyledSquare, StyledWidth, StyledLabelName, StyledLabel, StyledHeight }

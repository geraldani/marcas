import React from 'react'
import styled from 'styled-components'
import { COLOR } from './constants'

const Measurement = () => {
  const measure = ['Ancho', 'Alto']

  const SquareMeasure = () => {
    return (
      <div className='position-relative'>
        <Styled.Square>
          <Styled.Width>{measure[0]}</Styled.Width>
          <Styled.Height>{measure[1]}</Styled.Height>
        </Styled.Square>

      </div>
    )
  }

  return (
    <div className='d-flex'>
      {
        measure.map(elem => (
          <Styled.Label key={elem}>
            <Styled.LabelName>
              {elem} (cm)
            </Styled.LabelName>
            <input type='number' className='form-control' />
          </Styled.Label>
        ))
      }
      <SquareMeasure />
    </div>
  )
}

const squareWidth = 80
const squareHeight = 100
const hyp = Math.sqrt((squareWidth * squareWidth) + (squareHeight * squareHeight))
const angle = Math.asin(squareWidth / hyp)

const Styled = {
  Square: styled.div`
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
`,
  Width: styled.span`
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
`,
  Height: styled.span`
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
`,
  Label: styled.label`
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
    
`,
  LabelName: styled.span`
    font-size: .8em;
    font-weight: normal;
    color: ${COLOR.darkGray};
    opacity: 0.6;
`
}

export default Measurement

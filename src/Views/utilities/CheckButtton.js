import React from 'react'
import styled from 'styled-components'
import { COLORS } from './constants'

const CheckButtton = ({ value, title, description }) => {
  const changeColor = (e) => {
    e.currentTarget.parentNode.childNodes.forEach(elem => {
      elem.style.background = 'white'
    })
    e.currentTarget.style.background = COLORS.lightGrey
  }

  return (
    <Styled.Card onClick={changeColor}>
      <Styled.Checkbox type='radio' value={value} name='radioButton' />
      <Styled.CheckIcon />
      <div>
        <h5>{title}</h5>
        <Styled.Description>
          {description}
        </Styled.Description>
      </div>
    </Styled.Card>
  )
}

const Styled = {
  Description: styled.p`
    color: ${COLORS.darkGrey};
    font-size: .9em;
    line-height: 1.2;
`,
  Checkbox: styled.input`
    margin-right: 1em;
    cursor: pointer;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    &:checked+span:after{
      display: block;
    }
`,
  CheckIcon: styled.span`
    position: absolute;
    top: 0;
    left: 0;;
    margin-top: 15px;
    margin-left: 15px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: solid 2px ${COLORS.blue};
    &:after{
      display: none;
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      margin: auto;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${COLORS.blue};
    }
`,
  Card: styled.label`
    display: flex;
    position: relative;
    border-radius: 10px;
    border: solid 1px ${COLORS.mediumGray};
    padding: 15px 15px 8px 55px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
      background-color: ${COLORS.lightGrey};
    }
`
}

export default CheckButtton

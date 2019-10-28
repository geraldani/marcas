import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR } from './constants'

const CheckButttons = ({ value, title, description, name, onChange }) => {
  const changeColor = (e) => {
    e.currentTarget.parentNode.parentNode.childNodes.forEach(elem => {
      elem.firstChild.style.background = 'white'
    })
    e.currentTarget.style.background = COLOR.lightGrey
  }

  return (
    <div className='d-flex justify-content-end flex-column'>
      <Styled.Card onClick={changeColor}>
        <Styled.Checkbox type='radio' value={value} name={name} onChange={onChange} />
        <Styled.CheckIcon />
        <div>
          <h5>{title}</h5>
          <Styled.Description>
            {description}
          </Styled.Description>
        </div>
      </Styled.Card>
      <Styled.Price to={`price${1}`}>
        Ver precio
      </Styled.Price>
    </div>
  )
}

const Styled = {
  Description: styled.p`
    color: ${COLOR.darkGrey};
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
    border: solid 2px ${COLOR.blue};
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
      background-color: ${COLOR.blue};
    }
`,
  Card: styled.label`
    display: flex;
    position: relative;
    border-radius: 10px;
    border: solid 1px ${COLOR.mediumGray};
    padding: 15px 15px 8px 55px;
    cursor: pointer;
    margin-bottom: 0;
    &:hover{
      background-color: ${COLOR.lightGrey};
    }
`,
  Price: styled(Link)`
    text-align: right;
    margin-bottom: 10px;
    font-weight: normal;
    font-style: italic;
    font-size: .8em;
`
}

export default CheckButttons

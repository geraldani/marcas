import React from 'react'
import styled from 'styled-components'
import { COLOR } from './constants'

const CheckButttons = (props) => {
  const { value, title, description, name, onChange, children, className, checked } = props
  const changeColor = (e) => {
    e.currentTarget.parentNode.parentNode.childNodes.forEach(elem => {
      elem.firstChild.style.background = COLOR.white
      elem.firstChild.querySelector('p').style.color = COLOR.darkGrey
    })
    e.currentTarget.style.background = COLOR.lightGrey
    e.currentTarget.querySelector('p').style.color = COLOR.black
  }

  return (
    <div className='d-flex justify-content-end flex-column'>
      <StyledCard onClick={changeColor} className={className} checked={checked}>
        <StyledCheckbox type='radio' value={value} name={name} onChange={onChange} defaultChecked={checked} />
        <StyledCheckIcon />
        <div>
          {
            title && <h5>{title}</h5>
          }
          {
            description &&
              <StyledDescription checked={checked}>
                {description}
              </StyledDescription>
          }
        </div>
      </StyledCard>
      {children}
    </div>
  )
}

const StyledDescription = styled.p`
  color: ${props => props.checked ? COLOR.black : COLOR.darkGrey};
  font-size: .9em;
  line-height: 1.2;
`
const StyledCheckbox = styled.input`
  margin-right: 1em;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked+span:after{
    display: block;
  }
`
const StyledCheckIcon = styled.span`
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
`
const StyledCard = styled.label`
  display: flex;
  position: relative;
  border-radius: 10px;
  border: solid 1px ${COLOR.mediumGray};
  padding: 15px 15px 8px 55px;
  cursor: pointer;
  margin-bottom: 0;
  background-color: ${props => props.checked ? COLOR.lightGrey : COLOR.white};
  &:hover{
    background-color: ${COLOR.lightGrey}!important;
  }
   &:hover p{
    color: ${COLOR.black}!important;
  }
`

export default CheckButttons

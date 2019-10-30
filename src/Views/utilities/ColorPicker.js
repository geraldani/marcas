import React, { useState } from 'react'
import { PhotoshopPicker as Picker } from 'react-color'
import styled from 'styled-components'
import { COLOR } from './constants'

const ColorPicker = ({ color, setColor }) => {
  let colorSelected = color
  const [showPicker, setShowPicker] = useState(true)

  // handlers
  const handleInputClick = e => {
    e.preventDefault()
    setShowPicker(true)
  }
  const handleOnAccept = () => {
    setColor(colorSelected)
    setShowPicker(!showPicker)
  }
  const handleOnCancel = () => setShowPicker(!showPicker)
  const onChangeColor = color => { colorSelected = color.hex }

  return (
    <div className='position-relative d-flex'>
      <Styled.ColorSquare />
      <input
        type='color'
        // className='form-control'
        name='color'
        defaultValue={color}
        onClick={handleInputClick}
      />
      <Styled.ColorName>{color}</Styled.ColorName>
      {
        showPicker &&
          <Styled.PickerContainer>
            <Picker
              color={color}
              header='Escoge el color de tu marca'
              onChangeComplete={onChangeColor}
              onAccept={handleOnAccept}
              onCancel={handleOnCancel}
            />
          </Styled.PickerContainer>
      }
    </div>
  )
}
export default ColorPicker

const Styled = {
  PickerContainer: styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 450px;
  margin-bottom: 20px;
  & .photoshop-picker{
    width: inherit!important;
  }
`,
  ColorSquare: styled.span`
  &+input{
    height: 37px!important;
    width: 40px!important;
  }
`,
  ColorName: styled.span`
    border: solid 1px ${COLOR.mediumGray};
    margin-left: 20px;
    padding: 6px;
    font-weight: normal;
    color: ${COLOR.darkGrey};
`
}

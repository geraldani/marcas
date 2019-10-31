import React, { useState } from 'react'
import { PhotoshopPicker as Picker } from 'react-color'
import styled from 'styled-components'

const isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))

const ColorPicker = ({ color, setColor, title }) => {
  let colorSelected = color
  const [showPicker, setShowPicker] = useState(false)
  const [colorInput, setColorInput] = useState(color)

  // handlers
  const handleSquareClick = () => setShowPicker(true)
  const handleOnAccept = () => {
    setColor(colorSelected)
    setShowPicker(!showPicker)
    setColorInput(colorSelected)
  }
  const handleOnCancel = () => setShowPicker(!showPicker)
  const onChangePicker = newColor => { colorSelected = newColor.hex }
  const handleInputChenge = e => {
    const newColor = e.target.value
    setColorInput(newColor)
    if (isHexColor(newColor.slice(1))) {
      setColor(newColor)
    }
  }

  return (
    <div className='position-relative d-flex mt-2'>
      <Styled.ColorSquare onClick={handleSquareClick} color={color} />
      <input
        type='text'
        className='form-control ml-3'
        name='color'
        value={colorInput}
        onChange={handleInputChenge}
      />
      {
        showPicker &&
          <Styled.PickerContainer>
            <Picker
              color={color}
              header={title}
              onChangeComplete={onChangePicker}
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
    bottom: 0;
    width: 450px;
    & .photoshop-picker{
      width: inherit!important;
    }
`,
  ColorSquare: styled.span`
  height: 36px;
  width: 55px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.color};
`
}

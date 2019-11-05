import React, { useState } from 'react'
import { PhotoshopPicker as Picker } from 'react-color'
import { StyledPickerContainer, StyledColorSquare } from './styles'

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
    <div className='position-relative d-flex'>
      <StyledColorSquare onClick={handleSquareClick} color={color} />
      <input
        type='text'
        className='form-control ml-3'
        name='color'
        value={colorInput}
        onChange={handleInputChenge}
      />
      {
        showPicker &&
          <StyledPickerContainer>
            <Picker
              color={color}
              header={title}
              onChangeComplete={onChangePicker}
              onAccept={handleOnAccept}
              onCancel={handleOnCancel}
            />
          </StyledPickerContainer>
      }
    </div>
  )
}
export default ColorPicker
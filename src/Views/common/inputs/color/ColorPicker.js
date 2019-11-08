import React, { useState } from 'react'
import { PhotoshopPicker as Picker } from 'react-color'
import { StyledPickerContainer, StyledColorSquare } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import InputText from '../text/InputText'

export const isHexColor = hex => {
  const regex = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/
  return typeof hex === 'string' && regex.test(hex)
  // return typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
}

const ColorPicker = ({ title, label, value, onChange, name }) => {
  const initialColor = '#000000'
  let colorSelected = initialColor
  const [showPicker, setShowPicker] = useState(false)
  // const [color, setColor] = useState(initialColor)

  // handlers
  const handleSquareClick = () => setShowPicker(true)

  const handleOnAccept = (e) => {
    // setColor(colorSelected)
    setShowPicker(!showPicker)
    onChange(e, name, colorSelected)
  }

  const handleOnCancel = () => setShowPicker(!showPicker)
  const onChangePicker = newColor => { colorSelected = newColor.hex }

  const handleInputChenge = e => {
    const newColor = e.target.value
    onChange(e)
    if (isHexColor(newColor.slice(1))) {
      // setColor(newColor)
    }
  }

  return (
    <StyledSublabel>
      {label}
      <div className='position-relative d-flex'>
        <StyledColorSquare onClick={handleSquareClick} color={value[name] || initialColor} isHexColor={isHexColor(value[name] || initialColor)} />
        <InputText value={value} label='' onChange={handleInputChenge} name={name} type='text' className='ml-3' initialValue={initialColor} />
        {
          showPicker &&
          <StyledPickerContainer>
            <Picker
              color={value[name] || initialColor}
              header={title}
              onChangeComplete={onChangePicker}
              onAccept={handleOnAccept}
              onCancel={handleOnCancel}
            />
          </StyledPickerContainer>
        }
      </div>
    </StyledSublabel>
  )
}
export default ColorPicker

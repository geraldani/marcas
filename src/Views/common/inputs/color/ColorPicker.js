import React, { useState } from 'react'
import { PhotoshopPicker as Picker } from 'react-color'
import { StyledPickerContainer, StyledColorSquare } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import { isHexColor } from '../../../../Components/utils'
import InputText from '../text/InputText'

const ColorPicker = ({ title, label, value, onChange, name, type, error }) => {
  let colorSelected = value
  const [showPicker, setShowPicker] = useState(false)

  // handlers
  const handleSquareClick = () => setShowPicker(true)

  const handleOnAccept = (e) => {
    setShowPicker(!showPicker)
    onChange(e, name, colorSelected)
  }

  const handleOnCancel = () => setShowPicker(!showPicker)
  const onChangePicker = newColor => { colorSelected = newColor.hex }

  return (
    <StyledSublabel>
      {label}
      <div className='position-relative d-flex'>
        {/* El rectangulo que mostrara el color */}
        <StyledColorSquare
          onClick={handleSquareClick}
          color={value}
          isHexColor={isHexColor(value)}
        />
        {/* input para meter el color  */}
        <InputText
          value={value}
          label=''
          onChange={onChange}
          name={name}
          type={type}
          className='ml-3'
          error={error}
          errorStyle={{ bottom: '-21px' }}
        />
        {
          showPicker &&
          <StyledPickerContainer>
            <Picker
              color={value}
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

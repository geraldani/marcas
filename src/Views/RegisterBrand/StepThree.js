import React, { useState } from 'react'
import styled from 'styled-components'
import ColorPicker from '../utilities/ColorPicker'
import Measurement from '../utilities/Measurement'
import { StyledLabelName, marginBottom, StyledSublabel } from '../GlobalStyles'
import { COLOR } from '../utilities/constants'
import Tooltip from '../utilities/Tooltip'
import FileInput from '../utilities/FileInput'

const StepThree = () => {
  // estado local
  const [color, setColor] = useState('#000000')// color del picker

  // componente de checkboxes
  const Checkboxes = ({ title, tooltipTitle }) => (
    <StyledLabel>
      <StyledCheckbox type='checkbox' />
      <StyledCheckboxIcon />
      <span className='ml-4'>{title}</span>
      <Tooltip title={tooltipTitle} />
    </StyledLabel>
  )
  // componente principal
  return (
    <>
      <div className='col-12 px-4 mt-5'>
        <StyledLabelName className='mb-4'>
          Quiero registrar
        </StyledLabelName>
      </div>
      {/* Checkboxes del tipo de marca */}
      <div className='col-7 px-4 '>
        <div className='form-group mr-5 position-relative d-flex flex-column justify-content-start'>
          <Checkboxes title='Marca denominativa' value='denominativa' tooltipTitle='Algo que describe la marca denominativa' />
          <Checkboxes title='Mixta' value='mixta' tooltipTitle='Algo que describe la marca mixta' />
          <Checkboxes title='Figurativa' value='figurativa' tooltipTitle='Algo que describe la marca figurativa' />
        </div>
      </div>

      {/* inputs de archivo color y medidas */}
      <div className='col-8 px-4 mt-5' style={marginBottom}>
        <div className='form-group mr-5 position-relative'>

          {/* Nombre de la marca */}
          <StyledSublabel>Nombre/Marca</StyledSublabel>
          <input type='text' className='form-control' name='marca' />

          {/* Archivo de la marca */}
          <StyledSublabel>Adjuntar archivo</StyledSublabel>
          <FileInput />

          {/* Color de la marca */}
          <StyledSublabel>Color de tu marca</StyledSublabel>
          <ColorPicker color={color} setColor={setColor} title='Selecciona el color de tu marca' />

          {/* Medidas de la marca */}
          <StyledSublabel>Medidas</StyledSublabel>
          <Measurement />
        </div>
      </div>
    </>
  )
}

const StyledLabel = styled.label`
position: relative;
 font-size: .9em;
 display: inline-flex;
 align-items: center;
 &:hover{
  color: ${COLOR.darkGrey};
 }
`
const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:hover + span{
    background-color: ${COLOR.lightGrey};
  }
  &:checked + span {
    background-color: ${COLOR.lighBlue};
    border-color: ${COLOR.blue}
  }
   &:checked + span:after{
    display: block;
  }
`
const StyledCheckboxIcon = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  height: 15px;
  width: 15px;
  border: solid 2px ${COLOR.mediumGray};
  border-radius: 2px;
  &:after{
    content: "";
    position: absolute;
    display: none;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export default StepThree

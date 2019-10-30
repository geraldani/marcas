import React, { useEffect, useState } from 'react'
import { Styled } from './StepOne'
import styled from 'styled-components'
import { COLOR } from '../utilities/constants'
import ColorPicker from '../utilities/ColorPicker'
import $ from 'jquery'
import Measurement from '../utilities/Measurement'

const StepThree = () => {
  // estado local
  const [color, setColor] = useState('#000000')// color del picker

  // effect para cargar el tooltip.. esquivalente a llamarlo en ComponentDidMount
  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip()
  }, [])

  // componente de checkboxes
  const Checkboxes = ({ title, tooltipTitle }) => (
    <Style.Label>
      <Style.Checkbox type='checkbox' />
      <Style.CheckboxIcon />
      <span className='ml-4'>{title}</span>
      <Style.Tooltip
        data-toggle='tooltip'
        data-placement='right'
        title={tooltipTitle}
      />
    </Style.Label>
  )

  // componente principal
  return (
    <>
      <div className='col-12 px-4 mt-5'>
        <Styled.LabelForm className='mb-4'>
          Quiero registrar
        </Styled.LabelForm>
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
      <div className='col-8 px-4 mt-5'>
        <div className='form-group mr-5 position-relative'>
          <Styled.SubLabel className='mb-0'>Nombre/Marca</Styled.SubLabel>
          <input type='text' className='form-control' name='marca' />
          <Styled.SubLabel className='mb-0'>Adjuntar archivo</Styled.SubLabel>
          <input type='file' className='form-control-file' name='file' placeholder='Seleccionar archivo' />

          {/* Color de la marca */}
          <Styled.SubLabel className='mb-0'>Color de tu marca</Styled.SubLabel>
          <ColorPicker color={color} setColor={setColor} title='Selecciona el color de tu marca' />

          {/* Medidas de la marca */}
          <Styled.SubLabel className='mb-0'>Medidas</Styled.SubLabel>
          <Measurement />
        </div>
      </div>
    </>
  )
}

const Style = {
  Label: styled.label`
  position: relative;
   font-size: .9em;
   display: inline-flex;
   align-items: center;
   &:hover{
    color: ${COLOR.darkGrey};
   }
`,
  Checkbox: styled.input`
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
     &:checked+span:after{
      display: block;
    }
`,
  CheckboxIcon: styled.span`
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
`,
  Tooltip: styled.div`
    position: relative;
    top:-7px;
    height: 9px;
    width: 9px;
    background-color: ${COLOR.blue};
    border-radius: 50%;
    margin-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after{
      content: '?';
      position: absolute;
      color: ${COLOR.white};
      font-size: 9px;
      text-align: center;
    }
`
  /* Tooltext: styled.span`
    visibility: visible;
    width: 150px;
    background-color: ${COLOR.black};
    color: ${COLOR.white};
    font-size: .7em;
    text-align: center;
    padding: 5px 2px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 105%;
    &:after{
      content: '';
      position: absolute;
      top:0;
      width: 0; 
      height: 0; 
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid black;
    }` */
}
export default StepThree

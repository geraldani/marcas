import React, { useState } from 'react'
import ColorPicker from '../../common/inputs/color/ColorPicker'
import Measurement from '../../common/measurement/Measurement'
import { StyledLabelName, StyledDivMarginBottom, StyledSublabel } from '../../GlobalStyles'
import FileInput from '../../common/inputs/file/FileInput'
import CkeckInput from '../../common/check/CkeckInput'

const FakeData = [
  {
    title: 'Marca denominativa',
    value: 'denominativa',
    tooltipTitle: 'Algo que describe la marca denominativa'
  },
  {
    title: 'Mixta',
    value: 'mixta',
    tooltipTitle: 'Algo que describe la marca mixta'
  },
  {
    title: 'Figurativa',
    value: 'figurativa',
    tooltipTitle: 'Algo que describe la marca figurativa'
  }
]

const StepThree = () => {
  // estado local
  const [color, setColor] = useState('#000000')// color del picker

  // componente principal
  return (
    <>
      <div className='col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName className='mb-4'>
          Quiero registrar
        </StyledLabelName>
      </div>
      {/* Checkboxes del tipo de marca */}
      <div className='col-lg-7 col-12 px-4 '>
        <div className='form-group mr-md-5 position-relative d-flex flex-column justify-content-start'>
          {
            FakeData.map(elem => (
              <CkeckInput
                title={elem.title}
                value={elem.value}
                tooltipTitle={elem.tooltipTitle}
                key={elem}
              />
            ))
          }
        </div>
      </div>

      {/* inputs de archivo color y medidas */}
      <StyledDivMarginBottom className='col-lg-8 col-12 px-4 mt-md-5 mt-4'>
        <div className='form-group mr-md-5 position-relative'>

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
      </StyledDivMarginBottom>
    </>
  )
}

export default StepThree

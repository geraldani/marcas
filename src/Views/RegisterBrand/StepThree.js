import React, { useState } from 'react'
import ColorPicker from '../utilities/ColorPicker'
import Measurement from '../utilities/Measurement'
import { StyledLabelName, marginBottom, StyledSublabel } from '../GlobalStyles'
import FileInput from '../utilities/FileInput'
import CkeckInput from '../utilities/CkeckInput'

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
      <div className='col-12 px-4 mt-5'>
        <StyledLabelName className='mb-4'>
          Quiero registrar
        </StyledLabelName>
      </div>
      {/* Checkboxes del tipo de marca */}
      <div className='col-7 px-4 '>
        <div className='form-group mr-5 position-relative d-flex flex-column justify-content-start'>
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

export default StepThree

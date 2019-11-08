import React, { useState } from 'react'
import ColorPicker from '../../common/inputs/color/ColorPicker'
import Measurement from '../../common/measurement/Measurement'
import { StyledLabelName, StyledDivMarginBottom, StyledSublabel } from '../../GlobalStyles'
import FileInput from '../../common/inputs/file/FileInput'
import CkeckInput from '../../common/check/CkeckInput'
import InputText from '../../common/inputs/text/InputText'

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

const StepThree = (props) => {
  // componente principal
  return (
    <>
      <div className='col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName className='mb-4'>Quiero registrar</StyledLabelName>
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
                key={elem.value}
              />
            ))
          }
        </div>
      </div>

      {/* inputs de archivo color y medidas */}
      <StyledDivMarginBottom className='col-lg-8 col-12 px-4 mt-md-5 mt-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText label='Nombre/Marca' name='nombreMarca' type='text' {...props} />
          <FileInput label='Adjuntar archivo' {...props} />
          <ColorPicker
            label='Color de tu marca'
            title='Selecciona el color de tu marca'
            name='color'
            {...props}
          />
          <StyledSublabel>
            Medidas
            <Measurement />
          </StyledSublabel>

        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepThree

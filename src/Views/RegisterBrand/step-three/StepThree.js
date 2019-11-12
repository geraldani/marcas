import React, { useState } from 'react'
import ColorPicker from '../../common/inputs/color/ColorPicker'
import Measurement from '../../common/measurement/Measurement'
import { StyledLabelName, StyledDivMarginBottom, StyledSublabel } from '../../GlobalStyles'
import FileInput from '../../common/inputs/file/FileInput'
import CkeckInput from '../../common/check/CkeckInput'
import InputText from '../../common/inputs/text/InputText'

const StepThree = (props) => {
  const { onChange, state } = props
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
            state.marcaType.options.map(elem => (
              <CkeckInput
                label={elem.label}
                name={elem.name}
                tooltipTitle={elem.tooltipTitle}
                key={elem.name}
                checked={elem.value}
                onChange={e => onChange(e, state.marcaType.name)}
              />
            ))
          }
        </div>
      </div>

      {/* inputs de archivo color y medidas */}
      <StyledDivMarginBottom className='col-lg-8 col-12 px-4 mt-md-5 mt-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText {...state.brandName} onChange={onChange} />
          <FileInput {...state.file} onChange={onChange} />

          <ColorPicker
            {...state.color}
            title='Selecciona el color de tu marca'
            onChange={onChange}
          />
          <StyledSublabel>
            Medidas
            <Measurement {...props} />
          </StyledSublabel>

        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepThree

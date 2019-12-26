import React  from 'react'
import ColorPicker from '../../common/inputs/color/ColorPicker'
import Measurement from '../../common/measurement/Measurement'
import FileInput from '../../common/inputs/file/FileInput'
import InputText from '../../common/inputs/text/InputText'
import CheckContainer from '../../common/inputs/check/CheckContainer'
import { StyledLabelName, StyledDivMarginBottom, StyledSublabel } from '../../styles/GlobalStyles'

const StepThree = (props) => {
  const { onChange, state, errors } = props
  // componente principal
  return (
    <>
      <div className='col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName className='mb-4'>Quiero registrar</StyledLabelName>
      </div>

      {/* Checkboxes del tipo de marca */}
      <div className='col-lg-7 col-12 px-4 '>
        <div className='form-group mr-md-5 position-relative d-flex flex-column justify-content-start'>
          <CheckContainer
            options={state.marcaType.options}
            onChange={e => onChange(e, state.marcaType.name)}
            error={errors.marcaType}
          />
        </div>
      </div>

      {/* inputs de archivo color y medidas */}
      <StyledDivMarginBottom className='col-lg-8 col-12 px-4 mt-md-5 mt-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText {...state.brandName} onChange={onChange} error={errors.brandName} />
          <FileInput {...state.file} onChange={onChange} error={errors.file} />

          <ColorPicker
            {...state.color}
            title='Selecciona el color de tu marca'
            onChange={onChange}
            error={errors.color}
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

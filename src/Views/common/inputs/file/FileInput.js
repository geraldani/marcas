import React, { useState } from 'react'
import { StyledFileName, StyledFileButton } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import InputText from '../text/InputText'

const fileInputName = 'fileUpload'

const FileInput = ({ label, value, onChange }) => {
  const [fileName, setFileName] = useState(value[fileInputName] || 'Seleccionar archivo')

  const handleChange = e => {
    onChange(e)

    // esta parte es para que se muestre el nombre del archivo seleccionado en el campo del input y no solo el path
    const elem = e.target.value
    const splitedString = elem.split('\\')
    setFileName(splitedString[splitedString.length - 1])
  }

  return (
    <StyledSublabel>
      {label}
      <div className='d-flex position-relative'>
        <StyledFileName>{fileName}</StyledFileName>

        <StyledFileButton>
          Agregar
          <InputText value={value[fileInputName] || ''} label='' name={fileInputName} type='file' onChange={handleChange} />
        </StyledFileButton>
      </div>
    </StyledSublabel>
  )
}

export default FileInput

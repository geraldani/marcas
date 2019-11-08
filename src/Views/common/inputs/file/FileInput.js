import React, { useState } from 'react'
import { StyledFileName, StyledFileButton } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import InputText from '../text/InputText'

const FileInput = ({ label, value, onChange }) => {
  const [fileName, setFileName] = useState('Seleccionar archivo')

  const handleChange = e => {
    onChange(e)
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
          <InputText value={value} label='' name='fileUpload' type='file' onChange={handleChange} />
        </StyledFileButton>
      </div>
    </StyledSublabel>
  )
}

export default FileInput

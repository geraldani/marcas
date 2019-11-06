import React, { useState } from 'react'
import { StyledFileName, StyledFileButton } from './styles'

const FileInput = () => {
  const [fileName, setFileName] = useState('Seleccionar archivo')

  const handleChange = e => {
    const elem = e.target.value
    const splitedString = elem.split('\\')
    setFileName(splitedString[splitedString.length - 1])
  }

  return (
    <div className='d-flex position-relative'>
      <StyledFileName>{fileName}</StyledFileName>
      <StyledFileButton>
        Agregar
        <input type='file' name='fileUpload' onChange={handleChange} />
      </StyledFileButton>
    </div>
  )
}

export default FileInput

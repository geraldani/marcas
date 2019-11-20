import React, { useState } from 'react'
import { StyledFileName, StyledFileButton } from './styles'
import { StyledSublabel } from '../../../GlobalStyles'
import InputText from '../text/InputText'
import ErrorAlert from '../../alerts/ErrorAlert'

const findFileName = (value) => {
  const splitedString = value.split('\\')
  const lastElem = splitedString.length - 1
  return splitedString[lastElem]
}

const FileInput = ({ label, value, name, onChange, type, error }) => {
  const initialValue = value ? findFileName(value) : 'Seleccionar archivo'
  const [fileName, setFileName] = useState(initialValue)

  const handleChange = e => {
    onChange(e)
    const elem = e.target.value
    setFileName(findFileName(elem))// esta parte es para que se muestre el nombre del archivo seleccionado en el campo del input y no solo el path
  }

  return (
    <StyledSublabel>
      {label}
      <div className='d-flex position-relative'>
        <StyledFileName className={error ? 'error' : ''}>{fileName}</StyledFileName>

        <StyledFileButton>
          Agregar
          <InputText value='' label='' name={name} type={type} onChange={handleChange} />
        </StyledFileButton>
      </div>
      <ErrorAlert message={error} />
    </StyledSublabel>
  )
}

export default FileInput

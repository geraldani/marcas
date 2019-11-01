import React from 'react'
import { StyledLabelName, StyledLegend, StyledSublabel } from '../GlobalStyles'
import styled from 'styled-components'
import ClassCard from '../utilities/ClassCard'

const StepFive = () => {
  return (
    <>
      <div className='col-10 px-4 mt-5'>
        <StyledLabelName>
          ¿A que seccion pertenece?
        </StyledLabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-7 px-4'>
        <StyledSublabel>Ingrese su producto / servicios</StyledSublabel>
        <input type='text' className='form-control' placeholder='Cafe' />
      </div>
      <div className='col-9 px-4'>
        <StyledSublabel>PRODUCTOS</StyledSublabel>
        <StyledItalicLegend>
          *Agregar texto de que cada clase elegida es un registro diferente
        </StyledItalicLegend>
        <ClassCard number={1} />
        <ClassCard number={2} />
      </div>
    </>
  )
}

const StyledItalicLegend = styled(StyledLegend)`
  font-weight: 500;
  font-style: italic;
`
export default StepFive

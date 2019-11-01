import React from 'react'
import { LabelName, StyledLegend, Sublabel } from '../GlobalStyles'
import styled from 'styled-components'
import ClassCard from '../utilities/ClassCard'

const StepFive = () => {
  return (
    <>
      <div className='col-10 px-4 mt-5'>
        <LabelName>
          ¿A que seccion pertenece?
        </LabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-7 px-4'>
        <Sublabel>Ingrese su producto / servicios</Sublabel>
        <input type='text' className='form-control' placeholder='Cafe' />
      </div>
      <div className='col-9 px-4'>
        <Sublabel>PRODUCTOS</Sublabel>
        <ItalicLegend>
          *Agregar texto de que cada clase elegida es un registro diferente
        </ItalicLegend>
        <ClassCard number={1} />
        <ClassCard number={2} />
      </div>
    </>
  )
}

const ItalicLegend = styled(StyledLegend)`
  font-weight: 500;
  font-style: italic;
`
export default StepFive

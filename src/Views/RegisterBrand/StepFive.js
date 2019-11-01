import React from 'react'
import { StyledLabelName, StyledLegend, StyledSublabel, marginBottom } from '../GlobalStyles'
import styled from 'styled-components'
import ClassCard from '../utilities/ClassCard'
import { COLOR } from '../utilities/constants'
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io'

const FakeData = [
  {
    title: 'Clase 1',
    items: [
      {
        description: 'Seleccionar todos',
        value: 'selectAllClase1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the insdustry standard dummy',
        value: 'clase1valor1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the industry standard dummy.',
        value: 'clase1valor2'
      }
    ]
  },
  {
    title: 'Clase 2',
    items: [
      {
        description: 'Seleccionar todos',
        value: 'selectAllClase2'
      },
      {
        description: 'is simply text of the printing and typeresttings industry. Lorem ipsums has been the industry standard dummy',
        value: 'clase2valor1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the industry standard dummy',
        value: 'clase2valor2'
      }
    ]
  }
]

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
      <div className='col-9 px-4' style={marginBottom}>
        <StyledSublabel>PRODUCTOS</StyledSublabel>
        <StyledItalicLegend>*Agregar texto de que cada clase elegida es un registro diferente</StyledItalicLegend>
        {
          FakeData.map((elem) => (
            <ClassCard title={elem.title} key={elem} items={elem.items} />
          ))
        }
        <StyledButton>
          Quiero agregar mas clases a mi registro
          <ArrowIcon size='18px' />
        </StyledButton>
      </div>
    </>
  )
}

const StyledButton = styled.button`
  width: 98%;
  text-align: left;
  border: none;
  background-color: ${COLOR.lightGrey};
  color: ${COLOR.black};
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
  padding: 10px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledItalicLegend = styled(StyledLegend)`
  font-weight: 500;
  font-style: italic;
`
export default StepFive

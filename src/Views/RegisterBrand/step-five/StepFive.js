import React from 'react'
import ClassCard from '../../common/cards/class/ClassCard'
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io'
import { StyledButton, StyledItalicLegend } from './styles'
import { StyledLabelName, StyledLegend, StyledSublabel, marginBottom } from '../../GlobalStyles'

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
      <div className='col-md-10 col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName>
          ¿A que seccion pertenece?
        </StyledLabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-md-7 col-12 px-4'>
        <StyledSublabel>Ingrese su producto / servicios</StyledSublabel>
        <input type='text' className='form-control' placeholder='Cafe' />
      </div>
      <div className='col-md-9 col-12 px-4' style={marginBottom}>
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

export default StepFive

import React from 'react'
import ClassCard from '../../common/cards/class/ClassCard'
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io'
import { StyledButton, StyledItalicLegend } from './styles'
import { StyledLabelName, StyledLegend, StyledSublabel, marginBottom } from '../../GlobalStyles'
import InputText from '../../common/inputs/text/InputText'

const FakeData = [
  {
    title: 'Clase 1',
    items: [
      {
        description: 'Seleccionar todos',
        name: 'selectAllClase1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the insdustry standard dummy',
        name: 'clase1valor1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the industry standard dummy.',
        name: 'clase1valor2'
      }
    ]
  },
  {
    title: 'Clase 2',
    items: [
      {
        description: 'Seleccionar todos',
        name: 'selectAllClase2'
      },
      {
        description: 'is simply text of the printing and typeresttings industry. Lorem ipsums has been the industry standard dummy',
        name: 'clase2valor1'
      },
      {
        description: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the industry standard dummy',
        name: 'clase2valor2'
      }
    ]
  }
]

const StepFive = (props) => {
  const { state, onChange } = props
  //todo
  return (
    <>
      <div className='col-md-10 col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName>¿A que seccion pertenece?</StyledLabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-md-7 col-12 px-4'>
        <InputText
          {...state.productService}
          onChange={onChange}
        />
      </div>

      <div className='col-md-9 col-12 px-4' style={marginBottom}>
        <StyledSublabel>PRODUCTOS</StyledSublabel>
        <StyledItalicLegend>*Agregar texto de que cada clase elegida es un registro diferente</StyledItalicLegend>
        {
          // todo arreglar este fakedata desde el modelo o dinamicamente (no datos hardcodeados)
          FakeData.map((elem) => (
            <ClassCard name={elem.title} key={elem.title} items={elem.items} onChange={props.onChange} />
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

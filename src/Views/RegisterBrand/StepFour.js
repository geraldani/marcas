import React from 'react'
// import styled from 'styled-components'
// import { COLOR } from '../utilities/constants'
import CheckToggler from '../utilities/CheckToggler'
import { LabelName, StyledLegend, Sublabel, marginBottom } from '../GlobalStyles'
import styled from 'styled-components'
import SelectCountry from '../utilities/SelectCountry'

const StepFour = (props) => {
  return (
    <>
      <div className='col-10 px-4 mt-5'>
        <LabelName className='mb-4'>
          Registros anteriores
        </LabelName>
        <SmallLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </SmallLegend>
      </div>

      <div className='col-12 px-4 d-flex align-items-center'>
        <label className='d-flex mb-0'>
          <StyledOption>Si</StyledOption>
          <CheckToggler checked />
          <StyledOption>No</StyledOption>
        </label>
        <ClearLegend>
          ¿Ha presentado su solicitud de marca en otro país en los últimos 6 meses?
        </ClearLegend>
      </div>

      <div className='col-7 px-4' style={marginBottom}>
        <Sublabel>País</Sublabel>
        <SelectCountry country={props.country} setCountry={props.setCountry} />

        <Sublabel>Numero de registro/acta</Sublabel>
        <input type='text' className='form-control' name='nombre' />
      </div>
    </>
  )
}
const StyledOption = styled.span`
  font-weight: normal;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  &:first-child{
    margin-right: 10px;
  }
  &:last-child{
    margin: 0 10px;
  }
`

const SmallLegend = styled(StyledLegend)`
  width: 70%;
`

const ClearLegend = styled(StyledLegend)`
  opacity: 0.7;
  width: 60%;
  margin-bottom: 0;
`
export default StepFour

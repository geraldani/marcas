import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../utilities/constants'
import { countries } from '../../data.json'
import { IoIosCloseCircleOutline as IconClose } from 'react-icons/io'
import CheckButtton from '../utilities/CheckButtton'

const StepOne = () => {
  const [selectCountry, setSelectCountry] = useState('')
  return (
    <div className='col-7 px-4 mt-5'>
      <div className='form-group mr-5'>
        <LabelForm htmlFor='countrySelect'>En qué pais quiero registrar mi marca</LabelForm>
        <SubLabel>Paises</SubLabel>
        <select className='custom-select' onChange={(e) => setSelectCountry(e.target.value)}>
          <option value=''>Seleccione su pais</option>
          {countries.map(country => <option value={country} key={country}>{country}</option>)}
        </select>
        {
          selectCountry &&
            <CountrySelected>
              {selectCountry}
              <IconClose size='25px' className='ml-1' />
            </CountrySelected>
        }
      </div>
      <div className='form-group'>
        <CheckButtton
          value='antecedentesBusqueda'
          title='Busqueda de antecedendes'
          description='Un informe de búsqueda de marcas con el análisis y la opinión de un abogado sobre las posibilidades de registro. '
        />
        <CheckButtton
          value='registroMarca'
          title='Solicitud de registro de marca'
          description='Un abogado de marcas registrará y procesará su solicitud de marca ante la Oficina de Marcas. '
        />
      </div>
    </div>
  )
}

const LabelForm = styled.label`
  font-size: 1.4em;
`
const SubLabel = styled.p`
  color: ${COLORS.darkGrey};
  font-size: .9em;
`
const CountrySelected = styled.p`
  font-size: 1.1em;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 15px;
  margin-top: 1em;
  background-color: ${COLORS.aqua};
  color: ${COLORS.darkGrey}`

export default StepOne

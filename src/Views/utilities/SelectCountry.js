import React from 'react'
import { countries } from '../../data'

const SelectCountry = ({ country, setCountry }) => {

  const handleChange = e => setCountry(e.target.value)

  return (
    <select
      className='custom-select'
      onChange={handleChange}
      defaultValue={country}
    >
      <option value=''>Seleccione su pais</option>
      {
        countries.map(contry =>
          <option
            value={contry}
            key={contry}
          >
            {contry}
          </option>
        )
      }
    </select>
  )
}

export default SelectCountry

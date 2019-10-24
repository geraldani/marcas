import React from 'react'
import { formalities } from '../../data.json'
import Title from '../utilities/Title'
import BrandCards from '../utilities/BrandCards'

const Formalities = () => {
  return (
    <div className=' container'>
      <div className='row'>
        <div className='col-12'>
          <Title title={formalities.title} />
        </div>

        {
          formalities.brands.map((brand, index) => (
            <BrandCards key={index} {...brand} />
          ))
        }
      </div>
    </div>
  )
}

export default Formalities

import React from 'react'
import { formalities } from '../../../data.js'
import Title from '../../common/title/Title'
import BrandCards from '../../common/cards/brand/BrandCards'

const Formalities = () => (
  <section className='mb-5'>
    <div className='container my-5'>
      <div className='row'>
        <div className='col-12 mb-4'>
          <Title title={formalities.title} className='mb-4' />
        </div>
        {
          formalities.brands.map((brand, index) => (
            <div className='col-md-3 col-12 mb-md-0 mb-4' key={brand.description}>
              <BrandCards {...brand} />
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default Formalities

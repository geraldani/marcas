import React from 'react'
import { data } from '../../../data.js'
import Title from '../../common/title/Title'
import BrandCards from '../../common/cards/brand/BrandCards'

const { formalities } = data

const Formalities = () => (
  <section className='mb-5'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Title title={formalities.title} className='mb-4' />
        </div>
        {
          formalities.brands.map((brand, index) => (
            <div className='col-md-3 col-12 mb-md-0 mb-4' key={index}>
              <BrandCards {...brand} />
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default Formalities

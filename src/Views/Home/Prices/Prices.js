import React from 'react'
import { pricing } from '../../../data'
import Title from '../../common/title/Title'
import { StyledContainer } from './styles'

const Prices = () => {
  return (
    <section className='mb-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-5'>
            <Title title='Nuestros planes' className='mb-4' />
          </div>
          {
            pricing.map(price => (
              <StyledContainer className='col-md-3 col-12 mb-md-0 mb-4' key={price.name}>
                <div>
                  <h5>{price.name}</h5>
                  <h2>${price.price}</h2>
                  <p>{price.description}</p>
                </div>
                <p>Contacte a:  tupagina.com</p>
              </StyledContainer>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Prices

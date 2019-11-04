import React from 'react'
import { register } from '../../../data.json'
import Button from '../../common/buttons/Button'
import { StyledContainer } from './styles'
import { ROUTES } from '../../common/constants'

const RegisterBrand = () => (
  <section>
    <StyledContainer>
      <h2>
        {register.title.toUpperCase()}
      </h2>
      <p className='text-normal'>
        {register.subtitle}
      </p>
      <div className='d-flex justify-content-center flex-column flex-md-row mt-5'>
        {
          register.buttons.map((title, index) =>
            index === 0
              ? <Button
                key={index}
                title={title}
                link={ROUTES.registerBrand}
                styled='purple'
                className='mx-4 mb-3 mb-md-0 ml-md-0'
              />
              : <Button
                key={index}
                title={title}
                styled='outline-white'
                className='mx-md-0 mx-4'
              />
          )
        }
      </div>
    </StyledContainer>
  </section>
)
export default RegisterBrand

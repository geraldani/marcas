import React from 'react'
import Button from '../../common/buttons/Button'
import { StyledContainer } from './styles'
import { ROUTES } from '../../../utils/constants'

const RegisterBrand = (props) => (
  <StyledContainer {...props}>
    <h2>
      {props.title}
    </h2>
    <p className='text-normal'>
      {props.subtitle}
    </p>
    {
      props.buttons &&
      <div className='d-flex justify-content-center flex-column flex-md-row mt-5'>
        {
          props.buttons.map((title, index) =>
            index === 0
              ? <Button
                key={index}
                title={title}
                link={ROUTES.registerBrand}
                styled='purple'
                className='mx-4 mb-3 mb-md-0 ml-md-0' />
              : <Button
                key={index}
                title={title}
                styled='outline-white'
                link={ROUTES.otherTrams}
                className='mx-md-0 mx-4' />
          )
        }
      </div>
    }
  </StyledContainer>
)
export default RegisterBrand

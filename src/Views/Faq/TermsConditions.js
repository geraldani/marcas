import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { COLOR } from '../common/constants'
import { textTermsConditions } from './text'
import { setViewUp } from '../../Components/utils'
import { StyledContainer } from './styles'

const TermsConditions = () => {
  setViewUp()
  return (
    <>
      <Header showMenu />
      <div className='margin-header d-flex'>
        <div className='col-12 p-5' style={{ backgroundColor: COLOR.lightGrey }}>
          <h2 className='text-center'>
            Terminos y condiciones
          </h2>
          {
            textTermsConditions.map((elem, index) => (
              <StyledContainer key={index}>
                <p>{elem}</p>
              </StyledContainer>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsConditions

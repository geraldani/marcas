import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { COLOR } from '../../utils/constants'
import { setViewUp } from '../../utils/utils'
import { StyledParagraph } from './styles'
import { textTermsConditions } from './text'
import { useHeader } from '../../hooks/useHeader'
import {MainContainer} from '../styles/GlobalStyles'

const TermsConditions = () => {
  const [container, headerUp] = useHeader()
  setViewUp()
  return (
    <>
      <MainContainer className='d-flex' ref={container} header={headerUp}>
        <div className='col-12  p-md-5 pt-4' style={{ backgroundColor: COLOR.lightGrey }}>
          <h2 className='text-center mb-5'>
            Terminos y condiciones
          </h2>
          <div className='px-md-5 mx-md-5 px-2'>
            {
              textTermsConditions.map((elem, index) => {
                const text = `${index !== 0 ? index + '. ' : ''}${elem}`
                return <StyledParagraph dangerouslySetInnerHTML={{ __html: text }} key={index} />
              })
            }
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}

export default TermsConditions

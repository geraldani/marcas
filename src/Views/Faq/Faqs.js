import React from 'react'
import Header from '../common/header/Header'
import { COLOR } from '../../utils/constants'
import { textFaq } from './text'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../utils'
import { StyledContainer } from './styles'

const Faqs = () => {
  setViewUp()
  return (
    <>
      <Header showMenu />
      <div className='margin-header d-flex'>
        <div className='col-12  p-md-5 pt-4' style={{ backgroundColor: COLOR.lightGrey }}>
          <h2 className='text-center'>
            Preguntas frecuentes
          </h2>
          <div className='px-md-5 mx-md-5 px-2'>
            {
              textFaq.map((elem, index) => (
                <StyledContainer key={elem.title}>
                  <h4>{`${index + 1}. ${elem.title}`}</h4>
                  {
                    elem.text.map(text => <p key={text} dangerouslySetInnerHTML={{ __html: text }} />)
                  }
                </StyledContainer>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Faqs

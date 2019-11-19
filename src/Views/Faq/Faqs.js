import React from 'react'
import Header from '../common/header/Header'
import { COLOR } from '../common/constants'
import { textFaq } from './text'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../Components/utils'
import { StyledContainer } from './styles'

const Faqs = () => {
  setViewUp()
  return (
    <>
      <Header showMenu />
      <div className='margin-header d-flex'>
        <div className='col-12 p-5' style={{ backgroundColor: COLOR.lightGrey }}>
          <h2 className='text-center'>
            Preguntas frecuentes
          </h2>
          <div className='px-5 mx-5'>
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

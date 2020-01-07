import React from 'react'
import { COLOR } from '../../utils/constants'
import { textFaq } from './text'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../utils/utils'
import { StyledContainer } from './styles'
import { useHeader } from '../../hooks/useHeader'
import { MainContainer } from '../styles/GlobalStyles'

const Faqs = () => {
  const [container, headerUp] = useHeader()

  setViewUp()
  return (
    <>
      <MainContainer className='d-flex' ref={container} header={headerUp}>
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
      </MainContainer>
      <Footer />
    </>
  )
}

export default Faqs

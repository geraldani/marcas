import React from 'react'
import { about } from '../../../data.js'
import Title from '../../common/title/Title'
import { StyledContainer } from './styles.js'

const AboutUs = () => (
  <section>
    <StyledContainer>
      <div className='container mb-md-5 mb-3'>
        <div className='col-12 px-0 px-md-5'>
          <Title title={about.title} color='white' />
          <p className='text-white text-center text-normal big-margin'>
            {about.text}
          </p>
        </div>
      </div>
    </StyledContainer>
  </section>
)

export default AboutUs

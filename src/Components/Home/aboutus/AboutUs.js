import React from 'react'
import { about } from '../../../data.json'
import Title from '../../common/title/Title'
import { StyledAboutContainer } from './styles.js'

const AboutUs = () => (
  <section>
    <StyledAboutContainer>
      <div className='container'>
        <div className='col-12 px-0 px-md-5'>
          <Title title={about.title} color='white' />
          <p className='text-white text-center text-normal mb-5 pb-4 big-margin'>
            {about.text}
          </p>
        </div>
      </div>
    </StyledAboutContainer>
  </section>
)

export default AboutUs

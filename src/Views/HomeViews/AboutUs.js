import React from 'react'
import { about } from '../../data.json'
import Title from '../utilities/Title'

const AboutUs = () => (
  <section id='sectionAboutUs'>
    <div className='row background-about m-0'>
      <div className='container'>
        <div className='col-12 px-0 px-md-5'>
          <Title title={about.title} color='white' />
          <p className='text-white text-center text-normal mb-5 pb-4 big-margin'>{about.text}</p>
        </div>
      </div>
    </div>
  </section>
)
export default AboutUs

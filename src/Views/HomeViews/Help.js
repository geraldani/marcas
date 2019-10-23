import React from 'react'
import Title from '../utilities/Title'
import { help } from '../../data.json'
import CardInfo from '../utilities/InfoCards'

const Help = () => (
  <section id='sectionHelp'>
    <Title title={help.title} />
    <p className='text-center text-normal mb-5 pb-4 big-margin' style={{ color: '#9e9e9e' }}>{help.description}</p>
    <div>
      <CardInfo />
    </div>
  </section>
)
export default Help

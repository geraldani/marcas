import React from 'react'
import Title from '../utilities/Title'
import { help } from '../../data.json'
import CardInfo from '../utilities/InfoCards'

const Help = () => (
  <section id='sectionHelp'>
    <div className='container'>
      <Title title={help.title} className='mb-4' />
      <p className='text-center text-normal mb-5 pb-4 big-margin' style={{ color: '#9e9e9e' }}>{help.description}</p>
      {
        help.brands.map((card, index) => (
          <CardInfo
            index={index}
            key={card.id}
            buttonInfo={help.buttonInfo}
            buttonTitle={help.buttonTitle}
            link={`/${help.url}-${card.id}`}
            {...card}
          />
        ))
      }
    </div>
  </section>
)
export default Help

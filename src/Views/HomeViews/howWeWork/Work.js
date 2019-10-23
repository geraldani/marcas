import React from 'react'
import { work } from '../../../data.json'
import Card from './card'
import './styles.css'

const Work = () => {
  return (
    <section id='sectionhowWeWork'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center mainTitle mb-4'>{work.title}</h2>
        </div>
        <div className='row m-0 px-md-5 px-3 pb-5'>
          {
            work.cards.map((card, index) => (
              <div className='col-md col-6 d-flex justify-content-start flex-column px-4' key={index}>
                <Card {...card} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work

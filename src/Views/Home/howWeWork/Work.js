import React from 'react'
import { work } from '../../../data.json'
import Iconcard from './iconcard'
import './styles.css'

const Work = () => {
  return (
    <section id='sectionhowWeWork'>
      <div className="container">
        <div className='row m-0'>
          <div className='col-12'>
            <h2 className='text-center main-title mb-4'>{work.title}</h2>
          </div>
          <div className='row m-0 px-md-5 px-3 pb-5'>
            {
              work.cards.map((card, index) => (<Iconcard {...card} key={index} />))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work

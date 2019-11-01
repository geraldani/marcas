import React from 'react'
import { work } from '../../data.json'
import IconCard from '../utilities/IconCard'
import styled from 'styled-components'

const Work = () => {
  return (
    <section id='sectionhowWeWork'>
      <div className='container'>
        <div className='row m-0'>
          <div className='col-12'>
            <StyledTitle>{work.title}</StyledTitle>
          </div>
          <div className='row m-0 px-md-5 px-3 pb-5'>
            {
              work.cards.map((card, index) => <IconCard {...card} key={index} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`

export default Work

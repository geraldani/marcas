import React from 'react'
import Title from '../../common/title/Title'
import CardInfo from '../../common/cards/info/InfoCards'
import { help } from '../../../data.json'
import { StyledText } from './styles'
// import uuid from 'uuid'

const Help = () => (
  <section id='sectionHelp'>
    <div className='container'>
      <Title title={help.title} className='mb-4' />
      <StyledText>
        {help.description}
      </StyledText>
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

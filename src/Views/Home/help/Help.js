import React from 'react'
import Title from '../../common/title/Title'
import CardInfo from '../../common/cards/info/InfoCards'
import { data } from '../../../data.js'
import { StyledText } from './styles'

const { help } = data

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
            link={`${help.url}/${card.id}`}
            {...card}
          />
        ))
      }
    </div>
  </section>
)
export default Help

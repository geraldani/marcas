import React from 'react'
import Title from '../../common/title/Title'
import CardInfo from '../../common/cards/info/InfoCards'
import { help } from '../../../data.js'
import { StyledText } from './styles'

const Help = () => (
  <section>
    <div className='container my-5'>
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
            link={card.url}
            className='mb-4'
            {...card}
          />
        ))
      }
    </div>
  </section>
)
export default Help

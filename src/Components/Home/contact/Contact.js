import React from 'react'
import { COLOR } from '../../common/constants'
import Title from '../../common/title/Title'
import { contact } from '../../../data.json'
import { StyledButton } from './styles'

const Contact = () => {
  return (
    <section>
      <div style={{ backgroundColor: COLOR.lightGrey }}>
        <div className='row justify-content-center align-items-center py-5 mx-0'>
          <Title
            title={contact.title}
            color={COLOR.darkGrey}
            className='m-0'
          />
          <StyledButton
            className='ml-3'
            title={contact.buttonTitle}
            styled='outline-purple'
          />
        </div>
      </div>
    </section>
  )
}

export default Contact

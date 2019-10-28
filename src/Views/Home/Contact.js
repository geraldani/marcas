import React from 'react'
import { COLOR } from '../utilities/constants'
import Title from '../utilities/Title'
import { contact } from '../../data.json'
import Button from '../utilities/Button'

const Contact = () => {
  return (
    <section>
      <div style={{ backgroundColor: COLOR.lightGrey }}>
        <div className='row justify-content-center align-items-center py-5'>
          <Title title={contact.title} color={COLOR.darkGrey} className='m-0' />
          <Button className='ml-3' title={contact.buttonTitle} styled='outline-purple' />
        </div>
      </div>
    </section>
  )
}

export default Contact

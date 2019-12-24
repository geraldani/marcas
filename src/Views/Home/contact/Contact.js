import React from 'react'
import { COLOR } from '../../../utils/constants'
import Title from '../../common/title/Title'
import { contact } from '../../../data.js'
import { StyledButton } from './styles'
import ModalContact from '../../common/modal/ModalContact/ModalContact'

const Contact = () => {
  const [showModal, setShowModal] = React.useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  return (
    <section>
      <div style={{ backgroundColor: COLOR.lightGrey }} className='py-5'>
        <div className='row justify-content-center align-items-center py-5 mx-0'>
          <Title
            title={contact.title}
            color={COLOR.darkGrey}
            className='m-0'
          />
          <StyledButton
            className='ml-3'
            title={contact.buttonTitle}
            styled='outline-primary'
            onClick={openModal}
          />
          <ModalContact showModal={showModal} closeModal={closeModal} />
        </div>
      </div>
    </section>
  )
}

export default Contact

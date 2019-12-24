import React from 'react'
import Button from '../../buttons/Button'
import { IoMdCloseCircleOutline as IconClose } from 'react-icons/io'
import { StyledModal, StyledTextContainer } from './styles'
import uuid from 'uuid'
import Modal from '../generic/Modal'

const ModalInfo = ({ info, setShowModal, showModal }) => {
  return (
    <Modal showModal={showModal}>
      <StyledModal>
        <IconClose size='20px' onClick={setShowModal} />
        <StyledTextContainer>
          {
            [...Array(4)].map(() => <p key={uuid()}>{info}</p>)
          }
        </StyledTextContainer>
        <div className='d-flex flex-column flex-md-row justify-content-md-center justify-content-end w-100'>
          <Button title='Cerrar' onClick={setShowModal} />
        </div>
      </StyledModal>
    </Modal>

  )
}

export default ModalInfo

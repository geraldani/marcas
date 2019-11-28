import React from 'react'
import Button from '../../buttons/Button'
import { IoMdCloseCircleOutline as IconClose } from 'react-icons/io'
import { StyledModal, StyledTextContainer } from './styles'
import uuid from 'uuid'

const ModalInfo = ({ info, setShowModal }) => {
  return (
    <StyledModal>
      <IconClose size='20px' onClick={setShowModal} />
      <StyledTextContainer>
        {
          [...Array(4)].map(elem => <p key={uuid()}>{info}</p>)
        }
      </StyledTextContainer>
      {
        /* info.map(elem => (
           <div key={elem.title}>
             <h2 style={{ fontSize: '1.3em' }}>{elem.title}</h2>
             {
               elem.text.map(text => (
                 <p style={{ fontSize: '0.9em', fontWeight: 'normal' }} key={text}>{text}</p>
               ))
             }
           </div>
         )) */
      }
      <div className='d-flex flex-column flex-md-row justify-content-md-center justify-content-end w-100'>
        <Button title='Cerrar' onClick={setShowModal} />
      </div>
    </StyledModal>
  )
}

export default ModalInfo

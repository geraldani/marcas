import React from 'react'
import Modal from '../generic/Modal'
import Loader from '../../loader/Loader'
import { StyledLoader } from './styles'

const ModalLoader = () => {
  return (
    <Modal showModal>
      <StyledLoader>
        <Loader />
        <p>CARGANDO...</p>
      </StyledLoader>
    </Modal>
  )
}

export default ModalLoader

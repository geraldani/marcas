import React from 'react'
import Modal from '../generic/Modal'
import Loader from '../../loader/Loader'
import { StyledLoader } from './styles'

const ModalLoader = (props) => {
  return (
    <Modal showModal={props.showModal}>
      <StyledLoader>
        <Loader />
        <p>CARGANDO...</p>
      </StyledLoader>
    </Modal>
  )
}

export default ModalLoader

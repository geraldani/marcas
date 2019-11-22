import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyledModal } from './styles.js'
import { useWindowHeight } from '../../../../hooks/useWindowHeight'

const container = document.getElementById('modal')

const Modal = ({ children, showModal, setShowModal, showButton }) => {
  const windowHeight = useWindowHeight()

  const MainModal = () => {
    if (showModal) {
      return (
        <StyledModal height={windowHeight}>
          {
            showButton && <button title='Cerrar Modal' onClick={() => setShowModal(!showModal)} />
          }
          {children}
        </StyledModal>
      )
    } else return null
  }

  return (ReactDOM.createPortal(<MainModal />, container))
}

export default Modal

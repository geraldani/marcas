import React from 'react'
import ReactDOM from 'react-dom'
import { StyledModal } from './styles.js'
import { useWindowHeight } from '../../../../hooks/useWindowHeight'

const container = document.getElementById('modal')

const Modal = ({ children, showModal, setShowModal, showCloseButton }) => {
  const windowHeight = useWindowHeight()

  const MainModal = () => {
    if (showModal) {
      return (
        <StyledModal height={windowHeight}>
          {
            showCloseButton &&
              <button
                title='Cerrar Modal'
                onClick={() => setShowModal(!showModal)}
              />
          }
          {children}
        </StyledModal>
      )
    } else return null
  }

  return (ReactDOM.createPortal(<MainModal />, container))
}

export default Modal
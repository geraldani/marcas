import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledModal, StyledButton } from './styles.js'
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
              <StyledButton
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

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default Modal

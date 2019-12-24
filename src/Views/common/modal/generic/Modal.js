import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledModal, StyledButton, ScrollFade } from './styles.js'
// import { useWindowHeight } from '../../../../hooks/useWindowHeight'
import { disableScroll, enableScroll } from '../../../../utils/utils'

const container = document.getElementById('modal')

const Modal = ({ children, showModal, closeModal, showCloseButton }) => {

  const MainModal = () => {
    if (showModal) {
      disableScroll()
      return (
        <StyledModal offset={window.pageYOffset}>
          <ScrollFade />
          {
            showCloseButton &&
            <StyledButton
              title='Cerrar Modal'
              onClick={closeModal}
            />
          }
          {children}
        </StyledModal>
      )
    } else {
      enableScroll()
      return null
    }
  }

  return (ReactDOM.createPortal(<MainModal />, container))
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
}

export default Modal

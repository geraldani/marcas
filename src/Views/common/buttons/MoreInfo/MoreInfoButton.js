import React, { useState } from 'react'
import { StyledButtonInfo } from './styles'
import { IoIosInformationCircle as IconInfo } from 'react-icons/io'
import Modal from '../../modal/generic/Modal'
import ModalInfo from '../../modal/InfoModal'
import PropTypes from 'prop-types'
import { COLOR } from '../../../../utils/constants'

const MoreInfoButton = ({ style, showInModal, info, type = 'icon' }) => {
  const onClick = (e) => {
    e.preventDefault()
    handleModal()
  }
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => setShowModal(!showModal)

  return (
    <div className='d-flex justify-content-end mb-3' style={style}>
      <StyledButtonInfo onClick={onClick} type={type}>
        {
          type === 'icon'
            ? <IconInfo color={COLOR.primary} size='100%' title='Más informacion' />
            : <span>Mas info</span>
        }
      </StyledButtonInfo>
      {
        showInModal &&
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <ModalInfo info={info} setShowModal={handleModal} />
          </Modal>
      }
    </div>
  )
}

MoreInfoButton.propTypes = {
  info: PropTypes.any.isRequired
}

export default MoreInfoButton

import React, { useState } from 'react'
import { HamburgerBox, HamburgerInner, Spin } from './styles'

const HamburgerButton = (props) => {
  const [closeButton, setCloseButton] = useState(false)

  const handleClick = (e) => {
    if (e) e.preventDefault()
    setCloseButton(!closeButton)
    if (props.onClick) props.onClick()
  }

  return (
    <Spin onClick={handleClick} active={closeButton}>
      <HamburgerBox>
        <HamburgerInner color={props.color || '#000'} />
      </HamburgerBox>
    </Spin>
  )
}

export default HamburgerButton

import React from 'react'
import Logo from '../../common/logo/Logo'
import { COLOR } from '../../../utils/constants'
import { IoMdContact as UserIcon } from 'react-icons/io'

const HeaderDash = ({ user }) => {
  return (
    <header
      className='navbar navbar-expand-lg shadow-sm d-flex justify-content-between'
      style={{ background: COLOR.primary }}
    >
      <Logo light/>
      <div className='d-flex align-items-center'>
        <p className='text-white mr-2 mb-0'>{user}</p>
        <UserIcon color='white' size='28px' />
      </div>
    </header>
  )
}

export default HeaderDash

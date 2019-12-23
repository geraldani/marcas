import React, { useState, useEffect } from 'react'
import Logo from '../logo/Logo'
import PropTypes from 'prop-types'
import MenuHeader from '../MenuHeader/MenuHeader'
import { IoMdContact as UserIcon } from 'react-icons/io'
import { LocalStorage } from '../../../utils/constants'

const Header = (props) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (window.localStorage.getItem(LocalStorage.user)) {
      setUser(JSON.parse(window.localStorage.getItem(LocalStorage.user)))
    }
  }, [])

  return (
    <header>
      <nav
        style={{ background: props.color }}
        className={`navbar navbar-expand-lg navbar-light shadow-sm justify-content-between ${props.fixed ? 'fixed-top' : ''}`}
      >
        <Logo light={props.light} />
        {props.showMenu && <MenuHeader />}
        {
          user &&
            <div className='d-flex align-items-center'>
              <p className={`mr-2 mb-0 ${props.light ? 'text-white' : ''}`}>{user.name}</p>
              <UserIcon color={props.light ? 'white' : 'black'} size='28px' />
            </div>
        }
      </nav>
    </header>
  )
}

Header.defaultProps = {
  showMenu: false,
  color: 'white',
  fixed: true,
  light: false
}

Header.prototype = {
  showMenu: PropTypes.bool,
  color: PropTypes.string,
  user: PropTypes.string,
  fixed: PropTypes.string,
  light: PropTypes.bool
}

export default Header

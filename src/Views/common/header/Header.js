import React, { useState, useEffect } from 'react'
import Logo from '../logo/Logo'
import PropTypes from 'prop-types'
import MenuHeader from '../MenuHeader/MenuHeader'
import {
  IoMdContact as UserIcon,
  IoIosArrowDown as ArrowIcon,
  IoIosPerson as PersonIcon,
  IoIosLogOut as IconLogout,
  IoIosPaper as IconPaper
} from 'react-icons/io'
import { LocalStorage, ROUTES } from '../../../utils/constants'
import { Link } from 'react-router-dom'
import { StyledNav, StyledButton } from './styles'
import { history } from '../../../helpers/history'

const Header = (props) => {
  const { user } = props
  const [showDrop, setShowDrop] = useState(false)

  const logout = () => {
    window.localStorage.removeItem(LocalStorage.token)
    window.localStorage.removeItem(LocalStorage.user)
    window.localStorage.removeItem(LocalStorage.paperworks)
    setShowDrop(false)
    history.push(ROUTES.login)
  }

  const showNav = () => setShowDrop(!showDrop)
  if (!props.show) return null
  return (
    <header className='position-relative'>
      <nav
        style={{ background: props.color, zIndex: '1030' }}
        className={`navbar navbar-expand-lg navbar-light shadow-sm justify-content-between ${props.fixed ? 'fixed-top' : 'position-relative'}`}
      >
        <Logo light={props.light}/>
        {props.showMenu && <MenuHeader/>}
        {
          user &&
          <div className='d-flex align-items-center'>
            <UserIcon color={props.light ? 'white' : 'black'} size='28px'/>
            <StyledButton onClick={showNav} className='button-empty' show={showDrop}>
              <p className={`mx-2 mb-0 ${props.light ? 'text-white' : ''}`}>{user.name}</p>
              <ArrowIcon color={props.light ? 'white' : 'black'}/>
            </StyledButton>
          </div>
        }
      </nav>
      {
        user &&
        <StyledNav show={showDrop} fixed={props.fixed}>
          <Link to='#'><PersonIcon/>Perfil</Link>
          <Link to={ROUTES.dashboard}><IconPaper/>Tus tramites</Link>
          <button onClick={logout}><IconLogout/>Salir</button>
        </StyledNav>
      }
    </header>
  )
}

Header.defaultProps = {
  showMenu: false,
  color: 'white',
  fixed: true,
  light: false
}

Header.propTypes = {
  showMenu: PropTypes.bool,
  color: PropTypes.string,
  user: PropTypes.object,
  fixed: PropTypes.bool,
  light: PropTypes.bool
}

export default Header

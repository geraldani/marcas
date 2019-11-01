import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../data.json'
import './styles.css'
import Logo from './utilities/Logo'

const Header = () => (
  <header>
    <nav className='navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-white'>
      <Logo />
      {/* Button for mobile that shows and hide the main menu */}
      <button
        className='navbar-toggler'
        type='button' data-toggle='collapse'
        data-target='#navbarNavHeader'
        aria-controls='navbarNavHeader'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse justify-content-end' id='navbarNavHeader'>
        <ul className='navbar-nav'>
          {
            menu.home.map((menu, index) => {
              return (
                <li className='nav-item' key={index}>
                  {
                    menu.submenu
                      ? <Submenu items={menu.submenu} name={menu.name} />
                      : <Link className='nav-link' to={menu.path}> {menu.name} </Link>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  </header>
)

const Submenu = ({ items, name }) => (
  <>
    <Link to='/' className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
      {name}
    </Link>
    <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
      {
        items.map((item, index) => (
          <Link className='dropdown-item' to={item.path} key={index}>{item.name}</Link>
        ))
      }
    </div>
  </>
)

export default Header

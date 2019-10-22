import React  from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../data.json'
import './styles.css'

const Header = () => (
  <header>
    <nav className='navbar sticky-top navbar-expand-lg navbar-light shadow-sm'>
      <Link className='navbar-brand' to='/'>
        <img src='https://img.pngio.com/melia-expansion-melia-hotels-international-brand-png-1060_328.png' alt='brand' className='img-fluid' />
      </Link>
      {/* Button for mobile that shows and hide the main menu */}
      <button
        className='navbar-toggler'
        type='button' data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
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

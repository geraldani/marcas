import React from 'react'
import RegisterBrand from './register/RegisterBrand'
import Help from './help/Help'
import Work from './work/Work'
import AboutUs from './aboutus/AboutUs'
import Formalities from './formalities/Formalities'
import Contact from './contact/Contact'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'

export default function Home () {
  return (
    <>
      <Header showMenu />
      <div className='margin-header'>
        <RegisterBrand />
        <Work />
        <AboutUs />
        <Help />
        <Formalities />
        <Contact />
        <Footer />
      </div>
    </>

  )
}

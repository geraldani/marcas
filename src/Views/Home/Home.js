import React from 'react'
import RegisterBrand from './RegisterBrand'
import Help from './Help'
import Work from './Work'
import AboutUs from './AboutUs'
import Formalities from './Formalities'
import Contact from './Contact'
import Footer from '../Footer'

export default function Home () {
  return (
    <div className='margin-header'>
      <RegisterBrand />
      <Work />
      <AboutUs />
      <Help />
      <Formalities />
      <Contact />
      <Footer />
    </div>
  )
}

import React from 'react'
import RegisterBrand from './register/RegisterBrand'
import Help from './help/Help'
import Work from './work/Work'
import AboutUs from './aboutus/AboutUs'
import Formalities from './formalities/Formalities'
import Contact from './contact/Contact'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Prices from './Prices/Prices'

const props = {
  title: 'Buscá y registrá tu marca',
  subtitle: 'En Sitebrand te damos la posibilidad de registrar tu marca hoy, en el pais que vos quieras.',
  buttons: ['Registrar marca', 'Otros trámites']
}

export default function Home () {
  return (
    <>
      <Header showMenu />
      <div className='margin-header'>
        <RegisterBrand {...props} />
        <Work />
        <AboutUs />
        <Help />
        <Formalities />
        <Prices />
        <Contact />
        <Footer />
      </div>
    </>

  )
}

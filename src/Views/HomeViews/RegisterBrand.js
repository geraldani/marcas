import React from 'react'
import './styles.css'
import { register } from '../../data.json'

const RegisterBrand = () => (
  <section id='sectionRegisterBrand'>
    <div className='text-white background-register text-center'>
      <h2>{register.title.toUpperCase()}</h2>
      <p className='text-normal'>{register.subtitle}</p>
      <div className='buttonsContainer d-flex justify-content-center flex-column flex-md-row'>
        {
          register.buttons.map((title, index) => (
            <button key={index} className={`btn px-3 py-2 ${index === 0 ? 'btn-purple mr-md-3 mx-4 mb-4 mb-md-0' : 'btn-white mx-4'}`}>{title}</button>
          ))
        }
      </div>

    </div>
  </section>
)
export default RegisterBrand

import React from 'react'
import './styles.css'
import { register } from '../../data.json'
import Button from '../utilities/Button'

const RegisterBrand = () => (
  <section id='sectionRegisterBrand'>
    <div className='text-white background-register text-center'>
      <h2>{register.title.toUpperCase()}</h2>
      <p className='text-normal'>{register.subtitle}</p>
      <div className='d-flex justify-content-center flex-column flex-md-row mt-5'>
        {
          register.buttons.map((title, index) =>
            index === 0
              ? <Button key={index} className='mr-4' title={title} styled='purple' />
              : <Button key={index} title={title} styled='outline-white' />
          )
        }
      </div>
    </div>
  </section>
)
export default RegisterBrand

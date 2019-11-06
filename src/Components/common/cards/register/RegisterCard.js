import React from 'react'
import { StyledSublabel } from '../../../GlobalStyles'
import Button from '../../buttons/Button'
import Footer from '../../footer/Footer'

const Form = ({ fields, buttonName, link }) => {
  return (
    <form>
      {
        fields.map(field => (
          <>
            <StyledSublabel>{field.name}</StyledSublabel>
            <input type={field.type} className='form-control' />
          </>
        ))
      }
      <Button title={buttonName} className='w-100 mt-4' link={link} />
    </form>
  )
}

const RegisterCard = (props) => {
  return (
    <>
      <div className='container-fluid pt-0 pt-md-5 px-4 px-md-5 margin-header'>
        <div className='row justify-content-center'>
          <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 card text-center px-0'>
            {
              props.children
            }
            <div className='px-4 mb-4'>
              <Form fields={props.data} buttonName={props.buttonName} link={props.link} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RegisterCard

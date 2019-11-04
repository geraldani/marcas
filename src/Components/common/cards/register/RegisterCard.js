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
      <div className='container-fluid pt-5 px-5 margin-header'>
        <div className='row justify-content-center'>
          <div className='col-5 mt-3 mb-5 card text-center px-0'>
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

import React from 'react'
import { StyledSublabel } from '../../../GlobalStyles'
import Button from '../../buttons/Button'

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

const RegisterCard = ({ data, children, className = '', buttonName, link }) => {
  return (
    <div className={`card ${className}`}>
      {children}
      <div className='px-4 mb-4'>
        <Form fields={data} buttonName={buttonName} link={link} />
      </div>
    </div>
  )
}

export default RegisterCard

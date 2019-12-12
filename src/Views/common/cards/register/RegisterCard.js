import React from 'react'
import { StyledSublabel } from '../../../styles/GlobalStyles'
import Button from '../../buttons/Button'

const Form = ({ fields, buttonName, link }) => {
  return (
    <form>
      {
        fields.map(field => (
          <StyledSublabel key={field.name}>
            {field.label}
            <input type={field.type} name={field.name} className='form-control' />
          </StyledSublabel>
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

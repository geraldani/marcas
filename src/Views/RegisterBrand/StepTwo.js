import React, { useState } from 'react'
import { Styled } from './StepOne'
import { countries } from '../../data'

const StepTwo = (props) => {
  const [email, setEmail] = useState('')

  return (
    <div className='col-7 px-4 mt-5'>
      {/* input con hook local
      <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />

      input con hook pasado por props
      <input type='email' onChange={props.onChange} value={props.email} /> */}

      <div className='form-group mr-5 position-relative' style={{ marginBottom: '7em' }}>
        <Styled.LabelForm htmlFor='email'>Datos del estudio encargado del seguimiento de trámite</Styled.LabelForm>
        <Styled.SubLabel>Email</Styled.SubLabel>
        <input type='email' className='form-control' name='email'  />
      </div>
    </div>
  )
}

export default StepTwo

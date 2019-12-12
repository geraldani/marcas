import React from 'react'
import Header from '../common/header/Header'
import FormCard from '../common/miniForm'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../utils'
import Card from '../common/cards/genericCard/Card'
import CardHeader from '../common/cards/genericCard/CardHeader'
import Title from '../common/title/Title'
import CardBody from '../common/cards/genericCard/CardBody'
import { StyledSublabel } from '../styles/GlobalStyles'
import Button from '../common/buttons/Button'
import InputText from '../common/inputs/text/InputText'

const data = {
  header: 'Registrate',
  buttonName: 'Crear cuenta',
  inputs: [
    {
      label: 'Nombre',
      name: 'name',
      type: 'text'
    },
    {
      label: 'Apellido',
      name: 'surname',
      type: 'text'
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email'
    },
    {
      label: 'Contraseña',
      name: 'password',
      type: 'password'
    },
    {
      label: 'Repetir contraseña',
      name: 'repeatPassword',
      type: 'password'
    }
  ]
}

const RegisterUser = () => {
  setViewUp()
  return (
    <>
      <Header showMenu />
      <div className='margin-header row justify-content-center pt-0 pt-md-5 px-1 px-md-5 mx-0 mx-md-5'>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <Card>
            <CardHeader>
              <h3 className='mb-0'>{data.header}</h3>
            </CardHeader>
            <CardBody>
              <form>
                {
                  data.inputs.map(field => (
                    <InputText
                      key={field.name}
                      onChange={() => {}}
                      name={field.name}
                      type={field.type}
                      label={field.label}
                    />
                  ))
                }
                <Button title={data.buttonName} className='w-100 mt-4' />
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RegisterUser

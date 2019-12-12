import React from 'react'
import Header from '../common/header/Header'
import FormCard from '../common/miniForm'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../utils'
import Button from '../common/buttons/Button'
import { COLOR, ROUTES } from '../../utils/constants'
import CardHeader from '../common/cards/genericCard/CardHeader'
import CardBody from '../common/cards/genericCard/CardBody'
import InputText from '../common/inputs/text/InputText'
import Card from '../common/cards/genericCard/Card'

const data = {
  header: 'Ingresa',
  buttonName: 'Ingresar',
  inputs: [
    {
      label: 'Email',
      name: 'email',
      type: 'email'
    },
    {
      label: 'Contraseña',
      name: 'pass',
      type: 'password'
    }
  ]
}

const Login = () => {
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

          <div className='d-flex justify-content-center flex-column'>
            <Button title='Olvidé mi contraseña' styled='simple-primary' color={COLOR.darkGrey} />
            <div className='d-flex justify-content-center '>
              <span style={{ fontWeight: 'normal' }}>¿No tenés cuenta?</span>
              <Button
                title='Registrate'
                className='py-0 pl-2 pr-0'
                styled='simple-primary'
                color={COLOR.darkGrey}
                link={ROUTES.register}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
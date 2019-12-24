import React, { useState } from 'react'
import Modal from '../generic/Modal'
import PropTypes from 'prop-types'
import InputText from '../../inputs/text/InputText'
import Card from '../../cards/genericCard/Card'
import CardHeader from '../../cards/genericCard/CardHeader'
import Title from '../../title/Title'
import CardBody from '../../cards/genericCard/CardBody'
import CardFooter from '../../cards/genericCard/CardFooter'
import Button from '../../buttons/Button'

const ModalContact = (props) => {
  return (
    <Modal showModal={props.showModal}>
      <div className='row w-100 justify-content-center'>
        <div className='col-5'>
          <Card>
            <CardHeader>
              <Title title='Contactenos para mas informacion' className='mt-0' />
            </CardHeader>
            <CardBody>
              <InputText label='Nombre' type='text' name='name' onChange={() => {}} />
              <InputText label='Email' type='email' name='email' onChange={() => {}} />
              <label>
                Mensaje
                <textarea className='form-control' name='message' cols='30' />
              </label>
            </CardBody>
            <CardFooter>
              <Button onClick={props.closeModal} title='Cerrar' />
            </CardFooter>
          </Card>
        </div>
      </div>
    </Modal>
  )
}

ModalContact.prototype = {
  showModal: PropTypes.bool.isRequired
}
export default ModalContact

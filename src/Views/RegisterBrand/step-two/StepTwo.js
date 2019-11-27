import React, { useState, useRef } from 'react'
import RadioButttons from '../../common/inputs/radio/RadioButtton'
import { StyledLegend, StyledLabelName, StyledDivMarginBottom } from '../../GlobalStyles'
import Select from '../../common/inputs/select/SelectCountry'
import InputText from '../../common/inputs/text/InputText'
import MoreInfoButton from '../../common/buttons/MoreInfo/MoreInfoButton'
import Modal from '../../common/modal/generic/Modal'
import Button from '../../common/buttons/Button'

const RadioModal = ({ setShowModal, showModal, info }) => {
  const refContainer = useRef(null)
  return (
    <Modal setShowModal={setShowModal} showCloseButton showModal={showModal}>
      <div style={{ backgroundColor: 'white', padding: '20px', width: '800px', borderRadius: '20px' }} ref={refContainer}>
        {
          info &&
          info.map(elem => (
            <div key={elem.title}>
              <h2 style={{ fontSize: '1.3em' }}>{elem.title}</h2>
              {
                elem.text.map(text => (
                  <p style={{ fontSize: '0.9em', fontWeight: 'normal' }} key={text}>{text}</p>
                ))
              }
            </div>
          ))
        }
        <Button title='Cerrar' onClick={() => setShowModal(false)} />
      </div>
    </Modal>
  )
}

const StepTwo = (props) => {
  const { state, onChange, errors } = props
  const [disableInput, setDisableInput] = useState(state.registerType.value === 'persona')
  const [showModal, setShowModal] = useState(false)
  const [infoModal, setInfoModal] = useState(null)
  const handleChange = (e) => {
    props.onChange(e)
    e.target.value === 'persona'
      ? setDisableInput(true)
      : setDisableInput(false)
  }

  const openModal = (e, info) => {
    e.preventDefault()
    setInfoModal(info)
    setShowModal(true)
  }

  return (
    <>
      <div className='col-12 px-4 mt-3 mt-md-5'>
        <StyledLabelName>
          Datos del estudio encargado del seguimiento del trámite
        </StyledLabelName>
      </div>

      <div className='col-lg-7 col-12 px-4 '>
        <div className='mr-lg-5'>
          <InputText
            {...state.email}
            onChange={props.onChange}
            error={errors.email}
            tooltip='El email con el que se logueara el interesado'
          />
        </div>
      </div>

      <div className='col-12 px-4 mt-4'>
        <StyledLabelName>Datos personales del titular marcario</StyledLabelName>
        <StyledLegend>
          Para darle seguimiento a su solicitud de registro de marca, complete el siguiente formulario.
        </StyledLegend>
      </div>

      <div className='col-lg-5 col-12 px-4 mt-3'>
        <div className='form-group'>
          {
            state.registerType.options.map(elem => (
              <RadioButttons
                className='mb-3'
                value={elem.value}
                key={elem.value}
                onChange={handleChange}
                name={state.registerType.name}
                description={elem.label}
                defaultCheked={elem.value === state.registerType.value}
              >
                <MoreInfoButton onClick={(e) => openModal(e, elem.description)} />
              </RadioButttons>
            ))
          }
          <RadioModal setShowModal={setShowModal} showModal={showModal} info={infoModal} />
        </div>
      </div>

      <StyledDivMarginBottom className='col-lg-7 col-12 px-4'>
        <div className='form-group mr-md-5 position-relative'>
          <InputText {...state.name} onChange={onChange} error={errors.name}
                     tooltip='El nombre del propietario de la marca' />
          <InputText {...state.surname} onChange={onChange} error={errors.surname} />
          <InputText {...state.razonSocial} disabled={disableInput} onChange={onChange} error={errors.razonSocial} />
          <Select {...state.countryGestor} onChange={onChange} error={errors.countryGestor} />
          <InputText {...state.cuit} onChange={onChange} error={errors.cuit} />
        </div>
      </StyledDivMarginBottom>
    </>
  )
}

export default StepTwo

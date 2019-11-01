import React from 'react'
import CardSteps from '../utilities/CardSteps'
import CircleSteps from '../utilities/CircleSteps'
import styled from 'styled-components'
import { COLOR, ROUTES } from '../utilities/constants'
import Button from '../utilities/Button'

const fakeData = [
  {
    items: [
      {
        field: 'Nombre',
        value: 'Daniela'
      },
      {
        field: 'Apellido',
        value: 'De Sousa'
      },
      {
        field: 'Email',
        value: 'geraldynchidesousa@gmail.com'
      },
      {
        field: 'Razon social',
        value: '------'
      },
      {
        field: 'País apoderado',
        value: 'Argentina'
      },
      {
        field: 'CUIT',
        value: '20-00000000-6'
      }
    ]
  },
  {
    items: [
      {
        field: 'Tipo de registro',
        value: 'Mixta'
      },
      {
        field: 'Nombre de registro',
        value: 'Grayshirts'
      },
      {
        field: 'Pais de registro',
        value: 'Argentina'
      }
    ]
  },
  {
    items: [
      {
        field: 'Clase 1',
        value: '$$'
      },
      {
        field: 'Clase 15',
        value: '$$'
      }
    ]
  }
]

const FinalRegister = () => {
  return (
    <div className='margin-header'>
      <div className='container-fluid pt-5 px-5'>
        <div className='row justify-content-center'>
          <CircleSteps actualStep={6} totalSteps={5} />
          <div className='col-9 mt-3 mb-5'>
            <CardSteps title='Detalle de orden' className='pb-5' style={{ paddingBottom: '5rem' }}>
              {
                fakeData.map(elem => (
                  <StyledFieldContainer key={elem} className='col-9'>
                    <Fields items={elem.items} />
                  </StyledFieldContainer>
                ))
              }
            </CardSteps>
            <div className='d-flex justify-content-center flex-column align-items-center'>
              <StyledTotal>Total: $520</StyledTotal>
              <Button className='px-5' title='Finalizar' link={ROUTES.finishRegister} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Fields = ({ items }) => {
  return (
    <ul className='list-group list-group-flush text-left'>
      {
        items.map((elem) => (
          <StyledItem key={elem.field}>
            <StyledType>{elem.field}:</StyledType>
            <StyledValue style={{ fontSize: '.9em' }}>{elem.value}</StyledValue>
          </StyledItem>
        ))
      }
    </ul>
  )
}

const StyledTotal = styled.h4`
  text-align: center;
  margin-top: 1.5em;
  font-size: 2rem;
`

const StyledItem = styled.li`    
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  &:not(:last-child){
    border-bottom: solid 1px rgba(0, 0, 0, 0.125);
  }
`
const StyledType = styled.span`
  color: ${COLOR.black};
  font-size: 1em;
  margin-left: 1em;
`
const StyledValue = styled.span`
  font-size: 1em;
  margin-right: 1em;
  color: ${COLOR.darkGrey};

`

const StyledFieldContainer = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.125);
  margin: 25px auto;
  border-radius: 12px;
  padding-right: 0!important;
  padding-left: 0!important;
`

export default FinalRegister

import React from 'react'
import Button from '../../common/buttons/Button'
import { IoIosArrowRoundBack as IconBack } from 'react-icons/io'
import Card from '../../common/cards/genericCard/Card'
import CardHeader from '../../common/cards/genericCard/CardHeader'
import CardBody from '../../common/cards/genericCard/CardBody'
import InputText from '../../common/inputs/text/InputText'
import { COLOR, ROUTES } from '../../../utils/constants'

const Detail = ({ match, data, history }) => {
  console.log('data ', data)

  const id = match.params.id
  console.log('id  ', id)
  data.forEach(e => { console.log('e.id', e.id, ' id ', id) })
  const filterData = data.find(e => {
    console.log('e.id', e.id, ' id ', id)
    return e.id.toString() === id.toString()
  })
  console.log('data filtrada ', filterData)
  console.log('match ', match)

  const formStructure = [
    {
      colsSize: ['3'],
      inputs: [
        {
          label: 'Titular marcario',
          type: 'text',
          name: 'registerType',
          defaultValue: filterData.registerType
        }
      ]
    },
    {
      colsSize: ['3', '3'],
      inputs: [
        {
          label: 'Razon social',
          type: 'text',
          name: 'razonSocial',
          defaultValue: filterData.razonSocial
        },
        {
          label: 'CUIT',
          type: 'text',
          name: 'cuit',
          defaultValue: filterData.cuit
        }
      ]
    }
  ]

  return (
    <div className='container-fluid'>
      <div className='row m-0 my-4'>
        <div className='col-6'>
          <Button
            title='Volver'
            link={history.goBack()}
            styled='outline-primary'
            className='px-1 py-1'
            style={{ fontSize: '0.97rem' }}
            childrenFirst
          >
            <IconBack size='25px'/>
          </Button>
        </div>
        <div className='col-6'>
          <p className='text-normal text-right m-0' style={{ color: COLOR.textColor }}>
            <small>
              {/*Modificado el {dateFormattedNormal(filterData.date)} por {filterData.assigned.toLocaleUpperCase()}*/}
            </small>
          </p>
        </div>
      </div>

      <div className='row m-0'>
        <div className='col-12 mb-5'>
          <Card shadow>
            <CardHeader>
              T.A.B Billetera
            </CardHeader>
            <CardBody>
              {
                formStructure.map((elems, i) => (
                  <div className='row mx-0' key={i}>
                    {
                      elems.inputs.map((input, index) => (
                        <div key={input.name} className={`col-${elems.colsSize[index]} ${input.label ? '' : 'd-flex align-items-end'}`}>
                          <InputText
                            onChange={() => {}}
                            colorLabel={COLOR.textColor}
                            label={input.label ? `${input.label}:` : ''}
                            type={input.type}
                            name={input.name}
                            disabled
                            defaultValue={input.defaultValue}
                          />
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </CardBody>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default Detail

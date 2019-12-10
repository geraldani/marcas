import React from 'react'
import { StyledTable } from './styles'
import { FormateaFecha } from '../../../utils'
import { IoIosDocument as IconDoc } from 'react-icons/io'

const TableFilter = () => {
  const fakeTitleTable = [
    'Fecha',
    'Título',
    'Asignado',
    'Expediente',
    'Vencimiento',
    ''
  ]
  const fakeTableData = [
    {
      id: 1,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 2,
      date: new Date(2018, 11, 24, 18, 25, 30),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 3,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 4,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 5,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 6,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 7,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 8,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 9,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    },
    {
      id: 10,
      date: new Date(),
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días'
    }
  ]

  return (
    <StyledTable className='table shadow-medium bg-white my-5'>
      <thead>
        <tr>
          {fakeTitleTable.map(elem => <th scope='col'>{elem}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          fakeTableData.map(data => (
            <tr key={data.id}>
              {Object.values(data).concat([1]).map((elem, i, arr) => {
                if (Object.keys(data)[i] === 'date') return <td>{FormateaFecha(elem)}</td>
                else if (i === arr.length - 1) return <td><IconDoc size={'25px'}/></td>
                else if (Object.keys(data)[i] !== 'id') return <td>{elem}</td>
              })}
            </tr>
          ))
        }
      </tbody>
    </StyledTable>
  )
}

export default TableFilter

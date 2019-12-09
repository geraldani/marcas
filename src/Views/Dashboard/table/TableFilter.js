import React from 'react'
import { StyledTable } from './styles'

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
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
    },
    {
      date: 'fecha',
      title: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      expiration: 'Vence en 8 días',
      coso: 'icon'
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
            <tr key={data.title}>
              {Object.values(data).map(elem => (<td>{elem}</td>))}
            </tr>
          ))
        }
      </tbody>
    </StyledTable>
  )
}

export default TableFilter

import React from 'react'
import { StyledTable } from './styles'
import { IoIosDocument as IconDoc } from 'react-icons/io'
import { dateFormattedTable } from '../../../utils/utils'
import { Link } from 'react-router-dom'
import { COLOR, ROUTES } from '../../../utils/constants'

const chooseColorName = (elem) => {
  // posible estatus:  PENDING, IN_PROCESS, SUCCESS, FAILED
  switch (elem) {
    case 'PENDING':
      return {
        color: COLOR.blue,
        name: 'PENDIENTE'
      }
    case 'IN_PROCESS':
      return {
        color: COLOR.orange,
        name: 'EN PROCESO'
      }
    case 'SUCCESS':
      return {
        color: COLOR.green,
        name: 'RESUELTA'
      }
    case 'FAILED':
      return {
        color: COLOR.red,
        name: 'RECHAZADA'
      }
    default:
      return {
        color: '',
        name: ''
      }
  }
}

const TableFilter = ({ information, hoverable = false, data }) => {
  const { headers, keys } = information
  return (
    <StyledTable className='table shadow-medium bg-white' hoverable={hoverable}>
      <thead>
        <tr>
          {headers.map(elem => <th key={elem} scope='col'>{elem}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((tableInfo, index) => (
            <tr key={tableInfo.id}>
              {
                keys.map(key => {
                  const id = data[index].id
                  let status = {}
                  if (key === 'status') {
                    if (tableInfo[key]) status = chooseColorName(tableInfo[key])
                  }
                  if (key === 'button') {
                    return (
                      <td>
                        <Link to={`${ROUTES.seeRegister}/${id}`}>
                          <IconDoc size='25px' color='gray' />
                        </Link>
                      </td>
                    )
                  } else if (key === 'creationDate') {
                    if (tableInfo[key]) {
                      const date = new Date(tableInfo[key])
                      return <td>{dateFormattedTable(date)}</td>
                    }
                    return <td />
                  }
                  return <td style={{ color: status.color }}>
                    {
                      status.name
                        ? <strong>{status.name}</strong>
                        : tableInfo[key]
                    }
                  </td>
                })
              }
            </tr>
          ))
        }
      </tbody>
    </StyledTable>
  )
}

export default TableFilter

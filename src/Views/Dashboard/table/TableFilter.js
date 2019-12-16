import React from 'react'
import { StyledTable } from './styles'
import { IoIosDocument as IconDoc } from 'react-icons/io'
import { dateFormattedTable } from '../../../utils/utils'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'

const TableFilter = ({ information, hoverable = false }) => {
  return (
    <StyledTable className='table shadow-medium bg-white' hoverable={hoverable}>
      <thead>
        <tr>
          {information.headers.map(elem => <th scope='col'>{elem}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          information.data.map((data, index) => (
            <tr key={data.id}>
              {
                information.body.map(elem => {
                  const id = information.data[index].id
                  if (elem === 'button') return <td><Link to={`${ROUTES.seeRegister}/${id}`}> <IconDoc size='25px' color='gray' /></Link></td>
                  else if (elem === 'date') return <td>{dateFormattedTable(data[elem])}</td>
                  return <td>{data[elem]}</td>
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

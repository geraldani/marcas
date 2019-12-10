import React from 'react'
import { StyledTable } from './styles'
import { IoIosDocument as IconDoc } from 'react-icons/io'
import { dateFormattedTable } from '../../../utils'

const TableFilter = ({ information, onClick, hoverable = false }) => {
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
                  if (elem === 'button') return <td><IconDoc size='25px' onClick={() => onClick(information.data[index].id)} /></td>
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

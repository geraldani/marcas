import React, { useState, useEffect } from 'react'
import TableFilter from '../table/TableFilter'
import Paginator from '../paginator/Paginator'
import SearcherForm from '../searcher/SearcherForm'
import Title from '../Title'

const ListBrands = ({ formStructure, tableInformation, data }) => {
 /* data = [{
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212,
    status: 'PENDING'
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    status: 'IN_PROCESS',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212,
    status: 'IN_PROCESS'
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    status: 'SUCCESS',
    width: 212
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212,
    status: 'FAILED'
  }, {
    brandName: 'pepsi',
    color: '#abc4ae',
    countryGestor: 'Colombia',
    countryPrevious: 'Estados Unidos',
    countryRegister: ['Brasil'],
    cuit: '232323',
    file: 'C:fakepathCaptura de pantalla de 2019-12-06 02-26-42.png',
    height: 121,
    id: '5dfb97758500302b9b608c46',
    marcaType: ['MIXTA', 'FIGURATIVA'],
    nroRegistro: 2121,
    previousRegister: true,
    productService: 'aceite',
    razonSocial: '',
    registerType: 'PERSONA',
    searchRequest: 'ANTECEDENTES',
    width: 212,
    status: 'FAILED'
  }
  ] */

  const [page, setPage] = useState(1)
  const [dataSliced, setDataSliced] = useState([])
  const paginatorData = {
    totalItems: data.length,
    itemsPerPage: 8,
    currentPage: page
  }

  const onChangePage = (actualPage) => {
    setPage(actualPage)
    setDataSliced(sliceArray(actualPage))
  }

  const sliceArray = (page) => {
    const newArray = []
    for (let i = paginatorData.itemsPerPage * (page - 1); i < paginatorData.itemsPerPage * page && i < paginatorData.totalItems; i++) {
      newArray.push(data[i])
    }
    return newArray
  }

  useEffect(() => {
    setDataSliced(sliceArray(1))
  }, [])

  return (
    <>
      <Title />
      <div className='row m-0'>
        <div className='col-12 m-auto'>
          <SearcherForm formData={formStructure} />
        </div>
      </div>
      <div className='col px-4 my-4'>
        <TableFilter information={tableInformation} hoverable data={dataSliced} />
      </div>
      <div className='col mb-5'>
        <Paginator {...paginatorData} onChangePage={onChangePage} />
      </div>
    </>
  )
}

export default ListBrands

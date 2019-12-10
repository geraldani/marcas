import React, { useState } from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'
import ListBrands from './seeAllBrands/ListBrands'
import Detail from './seeDetail/Detail'

const DashBoard = ({ user = 'Geraldyn Chirinos' }) => {
  const fakeTitleTable = [
    'Fecha',
    'Título',
    'Asignado',
    'Expediente',
    'Vencimiento',
    ''
  ]
  const fakeData = [
    {
      id: 1,
      date: new Date(),
      titularID: 785,
      titular: 'Marcas locales',
      assigned: 'Geraldyn Chirinos',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 2,
      date: new Date(2018, 11, 24, 18, 25, 30),
      titularID: 175,
      titular: 'Marcas sociales',
      assigned: 'Photography',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 3,
      date: new Date(),
      titularID: 475,
      titular: 'Marcas gringas',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 45 días'
    },
    {
      id: 4,
      date: new Date(),
      titularID: 75,
      titular: 'un coso',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence mañana'
    },
    {
      id: 5,
      date: new Date(),
      titularID: 185,
      titular: 'Marcas locales',
      assigned: 'Nails',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 6,
      date: new Date(),
      titularID: 58,
      titular: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 7,
      date: new Date(),
      titularID: 458,
      titular: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 8,
      date: new Date(),
      titularID: 9878,
      titular: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 9,
      date: new Date(),
      titularID: 978,
      titular: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    },
    {
      id: 10,
      date: new Date(),
      titularID: 89,
      titular: 'Marcas locales',
      assigned: 'Estudio',
      expediente: 5478,
      tipoId: 'D',
      tipo: 'algun tipo',
      group: 'Minos',
      agent: 'un agente',
      cargo: 'gerente',
      cuil: '29-87514-54',
      persoType: 'Juridica',
      nroDoc: '8745698554',
      carta: 'Titular',
      sobre: 'sobre algo',
      factura: 'titular',
      atencion: 'una linda atencion',
      sector: 'un sector lindo',
      rubro: 'Oro',
      direccion: 'Av. Avellaneda 8857',
      localidad: 'C.A.B.A',
      potalCode: '1854',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
      expiration: 'Vence en 8 días'
    }
  ]
  const fakeTableAtributes = ['date', 'titular', 'assigned', 'expediente', 'expiration', 'button']
  const tableInfomation = {
    headers: fakeTitleTable,
    data: fakeData,
    body: fakeTableAtributes
  }
  const formSearchStructure = [
    {
      label: 'Fecha:',
      name: 'fecha',
      type: 'date'
    },
    {
      label: 'Título:',
      name: 'titulo',
      type: 'text'
    },
    {
      label: 'Buscar por expediente:',
      name: 'expediente',
      type: 'text'
    },
    {
      label: 'Vencimineto:',
      name: 'vencimiento',
      type: 'date'
    }
  ]

  // const [showDetail, setShowDetail] = useState(true)
  const [showDetail, setShowDetail] = useState(false)
  // const [details, setDetails] = useState(fakeData[1])
  const [details, setDetails] = useState({})

  const seeDetail = (id) => {
    setDetails(fakeData.find(e => e.id === id))
    setShowDetail(true)
  }
  const goback = () => setShowDetail(false)
  return (
    <>
      <HeaderDash user={user}/>
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar/>
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc' }}>
          <div className='col py-3 px-4' style={{ background: 'white' }}>
            Tus trámites
          </div>
          {
            showDetail
              ? <Detail data={details} handleClick={goback}/>
              : <ListBrands formStructure={formSearchStructure} onClickDetails={seeDetail} tableInformation={tableInfomation}/>
          }
        </div>
      </div>
    </>
  )
}

export default DashBoard

import React from 'react'
import HeaderDash from '../header/header'
import Title from '../../common/title/Title'
import SearcherForm from '../searcher/SearcherForm'
import TableFilter from '../table/TableFilter'
import Card from '../cards/genericCard/Card'
import CardHeader from '../cards/genericCard/CardHeader'
import CardBody from '../cards/genericCard/CardBody'
import CardFooter from '../cards/genericCard/CardFooter'

const SearchBrand = ({ user = 'Geraldyn Chirinos' }) => {
  const dataSearched = [{
    id: 9,
    presentada: '15/8/2012',
    publicada: '29/8/2012',
    condecida: '29/8/2012',
    disposicion: '29/8/2012',
    vencimiento: '29/8/2012',
    acta: '43564354',
    boletin: '54545',
    numero: '58454',
    boletin2: '545587',
    declaracion2: '54545',
    vencimiento2: '29/78/1965',
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
  }]

  const header1 = ['Prensentada', 'Publicada', 'Concedida', 'Disposición', 'Declaración de uso', 'Vencimiento']
  const header2 = ['Acta', 'Boletin', 'Número', 'Boletin', 'Declaración de uso', 'Vencimiento']
  const TableAtributes1 = ['presentada', 'publicada', 'condecida', 'disposicion', 'vencimiento']
  const TableAtributes2 = ['acta', 'boletin', 'numero', 'boletin2', 'declaracion2', 'vencimiento2']

  const tableInfomation = {
    headers: header1,
    data: dataSearched,
    body: TableAtributes1
  }

  const tableInfomation2 = {
    headers: header2,
    data: dataSearched,
    body: TableAtributes2
  }

  const formSearchStructure = [
    {
      label: 'Clase',
      name: 'clase',
      type: 'number'
    },
    {
      label: 'Denominación',
      name: 'denominacion',
      type: 'text'
    },
    {
      label: 'Tipo de marca:',
      name: 'marcaType',
      type: 'text',
      options: [
        'Marca mixta',
        'Marca denominatica',
        'Otras marcas'
      ]
    }
  ]

  return (
    <>
      <HeaderDash user={user}/>
      <Title title='Buscador de marcas'/>
      <SearcherForm formData={formSearchStructure}/>

      <div className='row mx-0 mt-5 justify-content-center' style={{ background: '#f7f8fc' }}>
        <div className='col-8 px-4 mt-5'>
          <TableFilter information={tableInfomation}/>
          <div className='mt-5'>
            <TableFilter information={tableInfomation2}/>
          </div>
          <div className='row my-5'>
            <div className='col-6 px-1'>
              <Card color='transparent'>
                <CardHeader>
                  <div className='d-flex justify-content-between' style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
                    <p>Titulares</p>
                    <p>Buenos Aires Gabriel Augusto (Malasia)</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='d-flex justify-content-between' style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
                    <p className='font-weight-bold'>Representantes</p>
                    <p>Livitvin Melisa MATRICULA 1810</p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className='col-6 px-1'>
              <Card>
                <CardBody>
                  <img className='img-fluid' src="https://discordapp.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png" alt=""/>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default SearchBrand


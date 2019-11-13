export const Model = {
  countryRegister: {
    name: 'countryRegister',
    label: 'Países',
    type: 'select-multi',
    value: []
  },
  searchRequest: {
    name: 'searchRequest',
    type: 'radio',
    value: 'antecedentes',
    options: [
      {
        value: 'antecedentes',
        label: 'Busqueda de antecedentes',
        description: 'Un informe de búsqueda de marcas con el análisis y la opinión de un abogado sobre las posibilidades de registro.'
      },
      {
        value: 'registro',
        label: 'Solicitud de registro de marca',
        description: 'Un abogado de marcas registrará y procesará su solicitud de marca ante la Oficina de Marcas.'
      }
    ]
  },
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
    value: ''
  },
  regiterType: {
    name: 'regiterType',
    type: 'radio',
    value: 'persona',
    options: [
      {
        value: 'empresa',
        label: 'Registrarme como una empresa'
      },
      {
        value: 'persona',
        label: 'Registrarme como persona física'
      }
    ]
  },
  name: {
    label: 'Nombre',
    name: 'name',
    type: 'text',
    value: ''
  },
  surname: {
    label: 'Apellido',
    name: 'surname',
    type: 'text',
    value: ''
  },
  razonSocial: {
    label: 'Razón social',
    name: 'razonSocial',
    type: 'text',
    value: ''
  },
  cuit: {
    label: 'CUIT',
    name: 'cuit',
    type: 'text',
    value: ''
  },
  countryGestor: {
    label: 'País apoderado/Gestor',
    name: 'countryGestor',
    type: 'select-one',
    value: ''
  },
  countryPrevious: {
    label: 'País',
    name: 'countryPrevious',
    type: 'select-one',
    value: ''
  },
  nroRegistro: {
    label: 'Numero de registro/acta',
    name: 'nroRegistro',
    type: 'text',
    value: ''
  },
  marcaType: {
    type: 'checkbox',
    name: 'marcaType',
    options: [
      {
        label: 'Marca denominativa',
        name: 'denominativa',
        value: false,
        tooltipTitle: 'Algo que describe la marca denominativa'
      },
      {
        label: 'Mixta',
        name: 'mixta',
        value: false,
        tooltipTitle: 'Algo que describe la marca mixta'
      },
      {
        label: 'Figurativa',
        name: 'figurativa',
        value: false,
        tooltipTitle: 'Algo que describe la marca figurativa'
      }
    ]
  },
  brandName: {
    label: 'Nombre/Marca',
    name: 'brandName',
    type: 'text',
    value: ''
  },
  file: {
    label: 'Adjuntar archivo',
    name: 'file',
    value: '',
    type: 'file'
  },
  color: {
    label: 'Color de tu marca',
    name: 'color',
    type: 'text',
    value: '#abc4ae'
  },
  width: {
    label: 'Ancho',
    name: 'width',
    type: 'number',
    value: ''
  },
  height: {
    label: 'Alto',
    name: 'height',
    type: 'number',
    value: ''
  },
  previousRegister: {
    name: 'previousRegister',
    type: 'checkbox',
    value: true
  },
  productService: {
    label: 'Ingrese su producto / servicios',
    name: 'productService',
    type: 'text',
    value: ''
  },
  classProducts: {
    type: 'checkbok',
    name: 'classProducts',
    options: [
      {
        label: 'Seleccionar todos',
        name: 'selectallclase1',
        value: false
      },
      {
        label: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the insdustry standard dummy',
        name: 'clase1valor1',
        value: false
      },
      {
        label: 'is simply text of the printing and typerestting industry. Lorem ipsum has been the insdustry standard dummy',
        name: 'clase1valor2',
        value: false
      }
    ]
  }
}

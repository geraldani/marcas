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
  registerType: {
    name: 'registerType',
    type: 'radio',
    value: 'persona',
    options: [
      {
        value: 'empresa',
        label: 'Registrarme como una empresa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dapibus est, sit amet mattis urna. Sed laoreet egestas est, consectetur vehicula mi cursus ut. Nullam elementum volutpat quam ac dapibus. Quisque imperdiet orci purus, vel mattis turpis euismod vitae. Duis eget purus nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sagittis venenatis lorem eu commodo. Nam aliquet pulvinar nulla id vulputate. Integer dictum sagittis nunc quis commodo. Donec lacus arcu, tincidunt faucibus nisl a, auctor vulputate nunc. Sed sed nisi tempor augue tempor porta. Maecenas metus urna, facilisis id ipsum in, ultricies vestibulum urna. Curabitur viverra quam eget elit pharetra maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
      },
      {
        value: 'persona',
        label: 'Registrarme como persona física',
        description: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32'
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
    type: 'number',
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
  }
  /* classProducts: {
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
  } */
}

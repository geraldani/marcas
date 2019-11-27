import { ROUTES } from './utils/constants'

const routesRegisterBrand = {
  register: {
    id: 'registro-marca',
    title: 'Registro de marcas'
  },
  disputa: {
    id: 'disputa-dominios',
    title: 'Disputa de dominios'
  },
  international: {
    id: 'registros-internacionales',
    title: 'Registros internacionales'
  },
  protocolo: {
    id: 'procolo-registro',
    title: 'Protocolo de registro Madrid'
  }
}

const data = {
  menu: {
    home: [
      {
        name: 'Trámites',
        submenu: [
          {
            name: routesRegisterBrand.register.title,
            path: ROUTES.beginBrand + '/' + routesRegisterBrand.register.id
          },
          {
            name: routesRegisterBrand.disputa.title,
            path: ROUTES.beginBrand + '/' + routesRegisterBrand.disputa.id
          },
          {
            name: routesRegisterBrand.international.title,
            path: ROUTES.beginBrand + '/' + routesRegisterBrand.international.id
          },
          {
            name: routesRegisterBrand.protocolo.title,
            path: ROUTES.beginBrand + '/' + routesRegisterBrand.protocolo.id
          }
        ]
      },
      {
        name: '¿Disputas de nombres de dominio?',
        path: '/domain'
      },
      {
        name: 'Registrarme',
        path: ROUTES.signup
      },
      {
        name: 'Ingresar',
        path: ROUTES.signin
      }
    ]
  },
  work: {
    title: '¿Cómo trabajamos?',
    cards:
      [
        {
          title: 'Selecciona tu trámite',
          description: 'Podemos ayudarlo y simplificar el proceso de su trámite.',
          iconPath: 'https://trello-attachments.s3.amazonaws.com/5da9c8ca832543113673af0f/5db04fffebfb0a55f8063c0c/dfd4b985d54c8f433d23e8c059880edd/icon-tramite.svg'
        },
        {
          title: 'Ingresa los datos',
          description: 'Le pedimos la información necesaria para encarar su trámite.',
          iconPath: 'https://trello-attachments.s3.amazonaws.com/5da9c8ca832543113673af0f/5db04fffebfb0a55f8063c0c/461d19daf748d7bf63ff42195f9e420e/icon-datos.svg'
        },
        {
          title: 'Proceso de seguimiento',
          description: 'Aviso de seguimiento en que estado esta su trámite.',
          iconPath: 'https://trello-attachments.s3.amazonaws.com/5da9c8ca832543113673af0f/5db04fffebfb0a55f8063c0c/6b5dea02a706adcde19ed5ec5ca448fb/icon-seguimiento.svg'
        },
        {
          title: 'Finalización',
          description: 'Confirmación de cierre de su trámite y aviso de próximas novedades.',
          iconPath: 'https://trello-attachments.s3.amazonaws.com/5da9c8ca832543113673af0f/5db04fffebfb0a55f8063c0c/164df6f27ec1ecb77326eb3b39f27983/icon-finalizacion.svg'
        }
      ]
  },
  about: {
    title: 'Sobre nosotros',
    text:
      'Somos una empresa que se especializa en brindar servicios globales de propiedad intelectual. Brindamos soluciones rentables para las necesidades relacionadas con disputas de marcas registradas, patentes, derechos de autor y nombres de dominio de nuestros clientes.'
  },
  help: {
    title: 'En qué podemos ayudarte',
    description: 'It is a long fact that a reader will be distracted. It is a long fact that a reader will be distracted. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonTitle: 'Iniciar Trámite',
    buttonInfo: 'Más info',
    url: ROUTES.beginBrand,
    brands:
      [
        {
          id: routesRegisterBrand.register.id,
          title: routesRegisterBrand.register.title,
          description: 'Una marca es un signo con capacidad distintiva que permite diferenciar de los demás aquellos productos o servicios que son propiedad de una persona o empresa. Registrarla te otorga el título de propiedad y derecho exclusivo sobre ella.',
          info: [
            {
              title: '¿Para sirve una marca?',
              isEnum: true,
              text: [
                'Para individualizar productos y servicios.',
                'Para brindar información a los consumidores respecto del origen de los productos o servicios, cualquiera sea el lugar y la persona en cuyo poder se encuentre.',
                'Para realizar y reforzar la función publicitaria.',
                'Para identificarse en el mercado comercial y poder competir.'
              ]
            },
            {
              title: '¿Es necesario registrar una marca?',
              isEnum: false,
              text: [
                'El derecho exclusivo sobre una marca solo se adquiere con su registro ante el Instituto Nacional de la Propiedad Industrial.'
              ]
            },
            {
              title: '¿Qué derechos obtengo al registrarla?',
              isEnum: true,
              text: [
                'La propiedad de tu marca en relación con los productos o servicios amparados por el registro.',
                'El derecho a utilizar de manera exclusiva tu marca en el mercado económico.',
                'Derecho a transferir el dominio de tu marca a terceros, ya sea vendiéndola o cediéndola gratuitamente.',
                'Derecho a licenciar el uso de manera exclusiva o no, a favor de terceros.',
                'Derecho a impedir que terceros sin tu autorización, utilicen dicha marca.',
                'Derecho a oponerse a la inscripción en el INPI de signos confundibles con el tuyo.',
                'Solicitar ante los Tribunales competentes la nulidad de otras marcas posteriores que sean confundibles con la marca de tu propiedad.'
              ]
            },
            {
              title: '¿A quién está dirigido?',
              isEnum: false,
              text: [
                'A cualquier persona humana o jurídica, sus apoderados o agentes de la propiedad industrial matriculados.',
                'Los apoderados deberán acompañar copia del poder suscripta por ellos, declarando bajo juramento que es fiel a su original e instrumenta mandato vigente.',
                'Cuando estos fueran, además, agentes de la propiedad industrial, no deberán acompañar el poder respectivo. Si se presentan en carácter de gestores deberán ratificar su gestión ya sea mediante escrito del titular del derecho u obtención de poder dentro del plazo de 40 días hábiles desde la presentación.'
              ]
            },
            {
              title: '¿Qué necesito?',
              isEnum: true,
              text: [
                'Ser mayor de edad (Conforme lo estipulado en el Código Civil y Ley 26.579).',
                'Declarar un domicilio legal electrónico.',
                'Poseer CUIL o CUIT.',
                'Cuando se trata de apoderados: copia del poder firmada por el apoderado declarando bajo juramento que es fiel a su original e instrumenta mandato vigente.',
                'Personas jurídicas: declaración jurada sobre las facultades del firmante detallando los instrumentos societarios (Actas de Asamblea, de Directorio) con datos de inscripción y expresión de que poseen facultades para realizar este acto.'
              ]
            },
            {
              title: '¿Cómo hago?',
              isEnum: true,
              text: [
                'Buscá si la marca está disponible',
                'Presentá la solicitud',
                'Seguí el trámite',
                'Obtené el registro de la marca'
              ]
            },
            {
              title: '¿Cuánto tiempo lleva hacer el trámite?',
              isEnum: false,
              text: [
                'El trámite lleva: 20 meses',
                'Este lapso se cuenta desde el inicio de la solicitud hasta la aprobación del registro de la marca, en caso de que no haya ninguna oposición. En caso contrario, demanda aproximadamente unos 18 meses.'
              ]
            },
            {
              title: '¿Cuál es el costo del trámite?',
              isEnum: false,
              text: ['$2210.00']
            },
            {
              title: 'Vigencia',
              isEnum: false,
              text: [
                '10 años',
                'Desde la fecha de concesión del registro, renovables indefinidamente por periodos iguales siempre que solicites la renovación antes de su vencimiento.'
              ]
            }
          ]
        },
        {
          id: routesRegisterBrand.disputa.id,
          title: routesRegisterBrand.disputa.title,
          description: 'Algo que describa la disputa de dominio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          info: []
        },
        {
          id: routesRegisterBrand.international.id,
          title: routesRegisterBrand.international.title,
          description: 'Algo que describa los registros internacionales. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          info: []
        },
        {
          id: routesRegisterBrand.protocolo.id,
          title: routesRegisterBrand.protocolo.title,
          description: 'Algo que describa el protocolo de registro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          info: []
        }
      ]
  },
  formalities: {
    title: 'Trámites realizados',
    brands:
      [
        {
          number: '100.000',
          description: 'Registros de marcas'
        },
        {
          number: '15.000',
          description: 'Disputas de dominio'
        },
        {
          number: '45.000',
          description: 'Registros internacionales'
        },
        {
          number: '4.000',
          description: 'Protocolos de registros Madrid'
        }
      ]
  },
  contact: {
    title: 'Quiero que se contacten conmigo',
    buttonTitle:
      'Escribinos'
  },
  footer: [
    {
      name: 'Contactanos',
      url: ROUTES.contact
    },
    {
      name: 'Terminos y condiciones',
      url: ROUTES.terms
    },
    {
      name: 'Pregutas frecuentes',
      url: ROUTES.faq
    }
  ],
  countries: [
    'Argentina',
    'Brasil',
    'Estados Unidos',
    'España',
    'Colombia',
    'Chile',
    'Ecuador',
    'Venezuela'
  ]
}

export { data }

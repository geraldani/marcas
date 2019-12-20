import { ROUTES } from './utils/constants'

const Tramites = [
  {
    id: 'registro-marca',
    title: 'Registro de marcas',
    title2: 'Registros de marcas',
    wordDone: '100.000',
    description: 'Una marca es un signo con capacidad distintiva que permite diferenciar de los demás aquellos productos o servicios que son propiedad de una persona o empresa. Registrarla te otorga el título de propiedad y derecho exclusivo sobre ella.',
    url: ROUTES.registerBrand,
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
    id: 'renovar-marca',
    title: 'Renovar una marca',
    title2: 'Renovaciones de marcas',
    wordDone: '15.000',
    url: ROUTES.beginBrand + '/' + 'renovar-marca',
    description: 'Al cumplirse los 10 años de haber registrado tu marca, debés renovar el registro para conservar tus derechos otorgados por el registro marcario.',
    info: [
      {
        title: '',
        isEnum: false,
        text: [
          'Las marcas están protegidas durante 10 años. Podés renovar el registro indefinidamente (durante nuevos períodos consecutivos de 10 años), en un plazo de 60 días previos al vencimiento.'
        ]
      },
      {
        title: '¿A quién está dirigido?',
        isEnum: false,
        text: [
          'A los titulares de la marca o legítimos sucesores, apoderados o agentes de la propiedad industrial matriculados, y gestores autorizados.',
          'Una marca puede ser renovada sólo si fue utilizada durante los últimos 5 años.'
        ]
      },
      {
        title: '¿Qué necesito?',
        isEnum: true,
        text: [
          'Clave fiscal (nivel 2), en caso realizar el trámite bajo la modalidad en línea. Para eso tenés que vincular el servicio del INPI en tu cuenta de AFIP, como te indica el Instructivo',
          'Tener declarado un domicilio legal en la Ciudad Autónoma de Buenos Aires.',
          'Transmisión de los derechos marcarios como transferencia, en caso de que el titular haya fallecido.',
          'Para apoderados: copia del poder firmada por el apoderado declarando bajo juramento que es fiel a su original e instrumenta mandato vigente.',
          'Personas jurídicas: declaración jurada sobre las facultades del firmante detallando instrumentos societarios (Actas de Asamblea, de Directorio) con datos de inscripción y expresión de que poseen facultades para realizar el acto de renovación.',
          'Declaración jurada de uso, manifestando que la marca fue utilizada dentro de los 5 años previos al vencimiento en estas instancias:'
        ]
      }
    ]
  }, {
    id: 'transferir-marca',
    title: 'Transferir o cambiar de rubro de Marcas',
    title2: 'Transferencias de marcas',
    wordDone: '45.000',
    url: ROUTES.beginBrand + '/' + 'transferir-marca',
    description: 'Es el trámite de inscripción de una modificación en la titularidad de un derecho de MARCA ya sea por transmisión (transferencia) o por modificación en el nombre o tipo societario o nombre de persona humana (cambio de rubro)',
    info: [
      {
        title: '¿A quién está dirigido?',
        isEnum: false,
        text: [
          'Cualquier persona física o jurídica TITULAR DE DERECHOS en trámite o concedidos DE MARCAS que pretendan transferir sus derechos o haya modificado su denominación social.',
          'Se puede realizar a través de Agentes de la Propiedad Industrial pero estos deben resultar apoderados y si actúan por el transmitente para instrumentar la transferencia deben poseer facultades de disposición para el acto.'
        ]
      },
      {
        title: '¿Qué necesito?',
        isEnum: true,
        text: [
          'La transferencia puede instrumentarse mediante el formulario ACREDITACIÓN DE CESIÓN (certificando la firma del cedente y cónyuge en el) el cual se halla disponible dentro del Formulario de Transferencia y Cambio de Rubro link Formulario de Transferencia de Marcas.o mediante instrumento público o privado con firma certificada.',
          'Los firmantes que actuaren por un derecho que no es el propio, deberán acreditar, por medio de la certificación notarial o judicial, la representación que invoquen y que se encuentran debidamente facultados para la realización del acto.',
          'Cuando el acto se hubiese celebrado en el extranjero su forma se regirá por las leyes del país en el que se hubiera otorgado. El acto puede instrumentarse en el mismo formulario (Citado en el punto 1).',
          'Cuando la transferencia se opere como consecuencia de la venta del fondo de comercio, del que la marca forme parte, la misma se deberá justificarse mediante el documento que acredite la respectiva inscripción en el Registro Público de Comercio (Ley 11.867).',
          'Cuando la transferencia se efectúe por causa de muerte del titular, no se tomará razón de la misma sin orden expresa del Juez interviniente en la sucesión del titular del derecho que se transmite. Deberán consignarse los datos de los herederos, sus partes indivisas y el autorizado a suscribir el formulario.',
          'Para hacer efectiva la transmisión el cedente o la denominación anterior no debe hallarse con medidas cautelares que lo impidan.',
          'Para el caso de tratarse de múltiples TITULARES – CEDENTES y/o múltiples ADQUIRENTES – CESIONARIOS deben presentarse tantos formularios como cedentes o adquirentes resulten.'
        ]
      },
      {
        title: '¿Cómo hago?',
        isEnum: true,
        text: [
          'Poseer clave fiscal y registrarse.',
          'Completar las diferentes pantallas de información.',
          'Adjuntar PDF con la documentación que acredite la transferencia (contrato o el mismo formulario) escaneada, cumpliendo con los requisitos informados precedentemente (certificación de firmas, entre otros).',
          'Generar y abonar Volante Electrónico de Pago (VEP).'
        ]
      },
      {
        title: '¿Cuánto tiempo lleva hacer el trámite?',
        isEnum: false,
        text: [
          'El trámite lleva: 2 meses',
          'El tramite sin observaciones hasta su inscripción demora 2 meses.'
        ]
      }
    ]
  }, {
    id: 'oponer-marca',
    title: 'Oponer a una marca',
    title2: 'Opocisiones de marcas',
    wordDone: '4.000',
    description: 'Algo que describa la opocicion del registro de marca',
    info: [
      {
        title: '',
        isEnum: false,
        text: [
          'Para realizar el trámite de forma presencial o por correo postal descargar los siguientes formularios (obligatorios a partir del 1 de enero de 2019).',
          'Importante: Los formularios deben ser completados utilizando la computadora o a máquina, ser impresos en hoja A4, blanca y simple faz. No se recibirán formularios o documentación que no posea firma original.'
        ]
      }
    ]
  }
]

const menu = {
  home: [
    {
      name: 'Trámites',
      submenu: Tramites.map((elem, i) => ({
        name: elem.title,
        path: i === 0 ? ROUTES.registerBrand : `${ROUTES.beginBrand}/${elem.id}`
      }))
    },
    {
      name: 'Registrarme',
      path: ROUTES.register
    },
    {
      name: 'Ingresar',
      path: ROUTES.login
    }
  ]
}

const work = {
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
}

const about = {
  title: 'Sobre nosotros',
  text:
    'Somos una empresa que se especializa en brindar servicios globales de propiedad intelectual. Brindamos soluciones rentables para las necesidades relacionadas con disputas de marcas registradas, patentes, derechos de autor y nombres de dominio de nuestros clientes.'
}

const formalities = {
  title: 'Trámites realizados',
  brands: Tramites.map(elem => ({ number: elem.wordDone, description: elem.title2 }))
}

const contact = {
  title: 'Quiero que se contacten conmigo',
  buttonTitle: 'Escribinos'
}

const countries = [
  'Argentina',
  'Brasil',
  'Estados Unidos',
  'España',
  'Colombia',
  'Chile',
  'Ecuador',
  'Venezuela'
]

const help = {
  title: 'En qué podemos ayudarte',
  description: 'It is a long fact that a reader will be distracted. It is a long fact that a reader will be distracted. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  buttonTitle: 'Iniciar Trámite',
  buttonInfo: 'Más info',
  brands: Tramites
}

const footer = [
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
]

const pricing = [
  {
    name: 'Plan Basico',
    price: '100',
    description: 'Pago basico mensual'
  },
  {
    name: 'Plan Intermedio',
    price: '250',
    description: 'El doblde de beneficios'
  },
  {
    name: 'Plan Express',
    price: '300',
    description: 'Plan para sacar el maximo provecho'
  },
  {
    name: 'Plan Premium',
    price: '100',
    description: 'Para clientes que lo quieren todo'
  }
]

export { menu, work, about, formalities, contact, countries, help, footer, pricing }

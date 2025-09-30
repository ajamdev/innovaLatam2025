import type {Servicios} from '../types/servicios'
import Shield from '@/assets/shield.svg'
import Users from '@/assets/users.svg'

export const SERVICIOS:Servicios[] = [
  {
    name:'Experiencia del cliente',
    description:[
      'Optimización integral de la experiencia del cliente',
      'Transformamos la manera en que tus clientes interactúan con tu marca a través de estrategias personalizadas, análisis de datos avanzados y tecnologías de vanguardia. Desde el primer contacto hasta la fidelización a largo plazo.'
    ],
    icon:{
      name:Users
    },
    list:[
      'Consultoría CX',
      'CRM de servicios',
      'Orquestador de experiencia',
      'Voz y analítica de clientes'
    ]
    
  },
  {
    name:'Ciberseguridad',
    description:[
      'Protección integral de activos digitales empresariales',
      'En Xkale transformamos la ciberseguridad en un habilitador de confianza y continuidad para tu negocio. No solo protegemos tu infraestructura digital: diseñamos arquitecturas seguras, realizamos auditorías estratégicas y desplegamos sistemas de protección avanzados que evolucionan al ritmo de las amenazas.'
    ],
    icon:{
      name:Shield
    },
    list:[
      'Protección de la infraestructura informática ',
      'Gestión integral de las identidades',
      'Gestión del registro operativo',
    ]
  }
]
import type {Servicios} from '../types/servicios'
import Shield from '@/assets/shield.svg'
import Users from '@/assets/users.svg'

export const SERVICIOS:Servicios[] = [
  {
    name:'Experiencia del cliente',
    description:[
      'En Xkale optimizamos de manera integral la experiencia de tus clientes a través de estrategias personalizadas, análisis de datos avanzados y tecnologías de vanguardia. Desde el primer contacto hasta la fidelización a largo plazo.'
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
      'En Xkale transformamos la ciberseguridad en un habilitador de confianza y continuidad para tu negocio. No solo protegemos tu infraestructura digital: diseñamos arquitecturas seguras, realizamos auditorías estratégicas y desplegamos sistemas de protección avanzados que evolucionan al ritmo de las amenazas.'
    ],
    icon:{
      name:Shield
    },
    list:[
      'Protección de la infraestructura informática ',
      'Gestión integral de las identidades',
      'Gestión del riesgo operativo',
    ]
  }
]
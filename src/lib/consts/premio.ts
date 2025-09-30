import type { Premios } from "../types/premios";
import Primero from '@/assets/primer-prmio.svg'
import Segundo from '@/assets/segundo-premio.svg'

export const PREMIO : Premios[]=[
  {
    id: 'primer-premio',
    name: 'Primer Premio',
    title: 5000,
    description:'Bono de  consultoría CX',
    list: [
      'Diagnóstico completo del modelo de atención.',
      'Hoja de ruta estratégica personalizada, alineada con los objetivos de negocio.',
      'Sesiones ejecutivas de trabajo con consultores expertos.',
      'Análisis comparativo (benchmark) frente al mercado.',
      'Definición de prioridades claras para transformar la experiencia de cliente.'
    ],
    icon: {
      name: Primero
    }
  },
  {
    id: 'segundo-premio',
    name: 'Segundo Premio',
    title: 2500,
    description:'Bono de  consultoría CX',
    list: [
      'Identificación de brechas críticas en el modelo de atención.',
      'Recomendaciones prácticas de alto impacto para la toma de decisiones.',
      'Priorización de iniciativas rápidas que generen resultados visibles.',
      'Feedback especializado con perspectiva externa.'
    ],
    icon: {
      name: Segundo
    }
  }
]
type servicioName =
  |'Experiencia del cliente'
  |'Ciberseguridad'

export interface Servicios {
  name: servicioName
  description: string[]
  icon:{
    name: any
  }
  list: string[]
}
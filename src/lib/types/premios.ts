type premioId = 
  |'primer-premio'
  |'segundo-premio'

type premioName =
  |'Primer Premio'
  |'Segundo Premio'

export interface Premios {
  id: premioId
  name: premioName
  title: number
  description: string
  list: string[]
  icon:{
    name: any
  }
}
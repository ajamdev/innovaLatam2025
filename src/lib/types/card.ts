type cardId =
  |'aumenta-eficiencia'
  |'tomar-decisiones'
  |'convertir-desafios'

type cardName =
  |'Aumenta eficiencia'
  |'Tomar decisiones'
  |'Convertir desafios'

export interface Card {
  id: cardId
  name: cardName
  description: string
}
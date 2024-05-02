import ProductsList from '../../components/ProductsList'

import { useGetRestaurantsQuery } from '../../services/api'
import Header from '../../components/Header'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (!restaurantes) {
    return <h3>CARREGANDO...</h3>
  }

  return (
    <>
      <Header />
      <ProductsList restaurants={restaurantes} />
    </>
  )
}

export default Home

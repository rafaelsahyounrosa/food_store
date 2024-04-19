import ProductsList from '../../components/ProductsList'

import hiokiSushiCard from '../../asets/images/hioki_sushi_card.png'
import vitaTrattoria from '../../asets/images/vita_trattoria.png'
import Restaurante from '../../models/Restaurante'
import Header from '../../components/Header'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    capa: hiokiSushiCard,
    destacado: true,
    cardapio: []
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: vitaTrattoria,
    destacado: false,
    cardapio: []
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: vitaTrattoria,
    destacado: false,
    cardapio: []
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: vitaTrattoria,
    destacado: false,
    cardapio: []
  },
  {
    id: 5,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: vitaTrattoria,
    destacado: false,
    cardapio: []
  },
  {
    id: 6,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: vitaTrattoria,
    destacado: false,
    cardapio: []
  }
]

const Home = () => (
  <>
    {/* <Banner /> */}
    <Header />
    <ProductsList restaurants={restaurantes} />
  </>
)

export default Home
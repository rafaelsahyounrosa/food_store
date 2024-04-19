import ProductsList from '../../components/ProductsList'

import hiokiSushiCard from '../../asets/images/hioki_sushi_card.png'
import vitaTrattoria from '../../asets/images/vita_trattoria.png'
import Restaurante from '../../models/Restaurante'
import Banner from '../../components/Banner'
import BannerRest from '../../asets/images/BannerRest.png'
import HeaderRest from '../../components/HeaderRestaurant'
import { MenuItem } from '../../components/Products'
import pizza from '../../asets/images/pizza.png'
import DishList from '../../components/DishList'

const dishList: MenuItem[] = [
  {
    id: 1,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  },
  {
    id: 2,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  },
  {
    id: 3,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  },
  {
    id: 4,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  },
  {
    id: 5,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  },
  {
    id: 6,
    foto: pizza,
    preco: 10,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'Duas pessoas'
  }
]

const Restaurant1 = () => (
  <>
    <HeaderRest />
    <Banner capa={BannerRest} tipo={'Italiana'} titulo={'Teste'} />
    <DishList dishList={dishList} />
  </>
)

export default Restaurant1

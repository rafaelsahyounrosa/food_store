import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import HeaderRest from '../../components/HeaderRestaurant'
import DishList from '../../components/DishList'
import { Restaurante } from '../Home'

// const dishList: MenuItem[] = [
//   {
//     id: 1,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   },
//   {
//     id: 2,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   },
//   {
//     id: 3,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   },
//   {
//     id: 4,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   },
//   {
//     id: 5,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   },
//   {
//     id: 6,
//     foto: pizza,
//     preco: 10,
//     nome: 'Pizza Marguerita',
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     porcao: 'Duas pessoas'
//   }
// ]

const Restaurant1 = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  console.log(`Imprimindo o id passado para a url + ${id}`)
  console.log(restaurante)

  return (
    <>
      <HeaderRest />
      <Banner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <DishList dishList={restaurante.cardapio} />
    </>
  )
}

export default Restaurant1

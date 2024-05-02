import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderRest from '../../components/HeaderRestaurant'
import DishList from '../../components/DishList'
import { useGetCurrentRestQuery } from '../../services/api'

const Restaurant1 = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCurrentRestQuery(id!)

  if (!restaurante) {
    return <h3>CARREGANDO...</h3>
  }

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

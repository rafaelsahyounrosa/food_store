import { List } from './styles'
import { ListContainer } from '../ProductsList/styles'
import Dish from '../Dish'
import { CardapioItem } from '../../pages/Home'

type Props = {
  dishList: CardapioItem[]
}

const DishList = ({ dishList }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <ListContainer className="container">
      <List>
        {dishList.map((dish: CardapioItem) => (
          <li key={dish.id}>
            <Dish
              id={dish.id}
              nome={dish.nome}
              foto={dish.foto}
              descricao={getDescricao(dish.descricao)}
            />
          </li>
        ))}
      </List>
    </ListContainer>
  )
}

export default DishList

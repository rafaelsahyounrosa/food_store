import { Close, List, Modal, ModalContainer, ModalContent } from './styles'
import Restaurant, {
  DadosRestaurante,
  MenuItem,
  getDescription
} from '../../components/Products'
import { ListContainer } from '../ProductsList/styles'
import Dish from '../Dish'

type Props = {
  // restaurants: DadosRestaurante[]
  dishList: MenuItem[]
}

const DishList = ({ dishList }: Props) => (
  <ListContainer className="container">
    <List>
      {dishList.map((dish) => (
        <li key={dish.id}>
          <Dish
            id={dish.id}
            nome={dish.nome}
            foto={dish.foto}
            descricao={dish.descricao}
          />
        </li>
      ))}
    </List>
  </ListContainer>
)

export default DishList

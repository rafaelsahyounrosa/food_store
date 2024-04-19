import Restaurant, { DadosRestaurante } from '../../components/Products'
import { List, ListContainer } from './styles'

type Props = {
  restaurants: DadosRestaurante[]
}

const RestList = ({ restaurants }: Props) => (
  <ListContainer className="container">
    <List>
      {restaurants.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurant
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            descricao={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
            capa={restaurante.capa}
            destacado={restaurante.destacado}
          />
        </li>
      ))}
    </List>
  </ListContainer>
)

export default RestList

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  ButtonCart
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { formataPreco } from '../DishList'
import { RootRedducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootRedducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formataPreco(getTotalPrice())}</span>{' '}
        </Prices>
        <ButtonCart
          type="button"
          title="Clique aqui para continuar com a compra"
        >
          Continuar com a entrega
        </ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

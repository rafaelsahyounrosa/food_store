import { Link } from 'react-router-dom'
import logo from '../../asets/images/logo.svg'
import { CartButton, Header, HeaderContainer, LinkHome, Logo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootRedducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderRest = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootRedducer) => state.cart)

  const OpenCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <HeaderContainer className="container">
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        <CartButton onClick={OpenCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderRest

import { Link } from 'react-router-dom'
import logo from '../../asets/images/logo.svg'
import { CartButton, Header, HeaderContainer, LinkHome, Logo } from './styles'

const HeaderRest = () => {
  return (
    <Header>
      <HeaderContainer className="container">
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        <CartButton>0 produto(s) no carrinho</CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderRest

import { Link } from 'react-router-dom'
import { HeaderBar, Title } from './styles'
import logo from '../../asets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Efood Logo" />
      </Link>
    </div>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header

import { Link } from 'react-router-dom'
import {
  Copyright,
  FooterContaine,
  LogoFooter,
  SocialIcon,
  Socialcontainer
} from './styles'

import Facebook from '../../asets/images/facebook-round-svgrepo-com.svg'
import Twitter from '../../asets/images/twitter-2-svgrepo-com.svg'
import Instagram from '../../asets/images/instagram-round-svgrepo-com.svg'
import logo from '../../asets/images/logo.svg'

const Footer = () => (
  <FooterContaine>
    <Link to="/">
      <LogoFooter src={logo} alt="Efood Logo" />
    </Link>

    {/* <LogoFooter src={logo} alt="" /> */}
    <Socialcontainer>
      <SocialIcon src={Facebook} alt="" />
      <SocialIcon src={Twitter} alt="" />
      <SocialIcon src={Instagram} alt="" />
    </Socialcontainer>
    <Copyright>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Copyright>
  </FooterContaine>
)

export default Footer

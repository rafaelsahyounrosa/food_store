import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  height: 186px;
  width: 100%;
  background-color: ${cores.amareloMedio};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${cores.vermelho};
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkHome = styled.a`
  text-decoration: none;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.vermelho};
`

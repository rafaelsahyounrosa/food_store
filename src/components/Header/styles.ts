import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../asets/images/Vector.svg'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding-bottom: 136px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${cores.vermelho};
  max-width: 539px;
  width: 100%;
  text-align: center;
`

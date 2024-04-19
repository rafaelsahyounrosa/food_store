import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 48px;
  color: ${cores.vermelho};
  a {
    text-decoration: none;
  }
  .fundo {
    background-color: ${cores.branca};
  }
`

export const RestaurantBanner = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 22px;
`

export const Button = styled.a`
  background-color: ${cores.vermelho};
  padding: 4px 8px;
  color: ${cores.branca};
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export const CardContainer = styled.div`
  padding: 8px;
  border: 1px solid ${cores.vermelho};
  border-top: none;
  margin-bottom: 48px;
`

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-size: 12px;
  padding: 6px 4px;
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  text-transform: capitalize;
`

export const Rate = styled.span`
  margin-right: 8px;
  font-weight: bold;
  font-size: 18px;
`

export const RateDiv = styled.div`
  display: flex;
  align-items: center;
`

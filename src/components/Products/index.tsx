import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardContainer,
  Description,
  Rate,
  RateDiv,
  RestaurantBanner,
  Tag,
  Title,
  TitleContainer
} from './styles'

import star from '../../asets/images/estrela.svg'

export interface MenuItem {
  foto: string
  id: number
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type DadosRestaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: MenuItem[]
}

export const getDescription = (descricao: string) => {
  if (descricao.length > 250) {
    return descricao.slice(0, 250) + '...'
  }

  return descricao
}

const Restaurant = ({
  titulo,
  tipo,
  // destacado,
  descricao,
  avaliacao,
  capa,
  id
}: DadosRestaurante) => {
  return (
    <Card>
      <div className="fundo">
        <RestaurantBanner src={capa} alt="foto do restaurante" />
        <CardContainer>
          <TitleContainer>
            <Title>{titulo}</Title>
            <RateDiv>
              <Rate>{avaliacao}</Rate>
              <span>
                <img src={star} alt="" />
              </span>
            </RateDiv>
          </TitleContainer>
          <Description>{getDescription(descricao)}</Description>
          <Link to={`/restaurant/${id}`}>
            {/* Passar solução definitiva para to={`/restaurant/${id}`}> */}{' '}
            <Button>Saiba mais</Button>{' '}
          </Link>
        </CardContainer>

        <Tag>{tipo}</Tag>
      </div>
    </Card>
  )
}

export default Restaurant

import { MenuItem } from '../components/Products'

class Restaurante {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado?: boolean
  cardapio?: MenuItem[]

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    destacado?: boolean,
    cardapio?: MenuItem[]
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.destacado = destacado
    this.cardapio = cardapio
  }
}

export default Restaurante

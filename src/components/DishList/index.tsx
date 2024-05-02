import { Close, List, Modal, ModalContainer, ModalContent } from './styles'
import { ListContainer } from '../ProductsList/styles'
import Dish from '../Dish'
import { CardapioItem } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { MenuItem } from '../Products'
import closeIcon from '../../asets/images/close.png'
import { useParams } from 'react-router-dom'
import Restaurante from '../../models/Restaurante'
import { useDispatch } from 'react-redux'
import { add, open, close } from '../../store/reducers/cart'

type Props = {
  dishList: CardapioItem[]
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const DishList = ({ dishList }: Props) => {
  const { id } = useParams()

  const [currentRest, setCurrentRest] = useState<Restaurante>()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  const [selectedProduct, setSelectedProduct] = useState<MenuItem>()
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  const openModal = (product: MenuItem) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(selectedProduct!))
    dispatch(open())
    setModal({
      isVisible: false
    })
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

  return (
    <ListContainer className="container">
      <List>
        {currentRest.cardapio?.map((dish) => (
          <li key={dish.id} onClick={() => openModal(dish)}>
            <Dish
              id={dish.id}
              nome={dish.nome}
              foto={dish.foto}
              descricao={getDescricao(dish.descricao)}
            />
          </li>
        ))}
      </List>

      {selectedProduct && (
        <Modal className={modal.isVisible ? 'active' : ''}>
          <ModalContent className="container">
            <ModalContainer>
              <img src={selectedProduct.foto} alt="" />
              <div>
                <h4>{selectedProduct.nome}</h4>

                <p>{selectedProduct.descricao}</p>
                <span>{selectedProduct.porcao}</span>
                <button onClick={addToCart}>
                  Adicionar ao carrinho {formataPreco(selectedProduct.preco)}
                </button>
              </div>
            </ModalContainer>
            <Close
              src={closeIcon}
              alt="fechar"
              onClick={() => {
                setModal({
                  isVisible: false
                })
              }}
            />
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              setModal({
                isVisible: false
              })
            }}
          ></div>
        </Modal>
      )}
    </ListContainer>
  )
}

export default DishList

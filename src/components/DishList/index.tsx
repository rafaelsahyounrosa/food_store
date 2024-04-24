import { Close, List, Modal, ModalContainer, ModalContent } from './styles'
import { ListContainer } from '../ProductsList/styles'
import Dish from '../Dish'
import { CardapioItem } from '../../pages/Home'
import { useState } from 'react'
import { MenuItem } from '../Products'
import closeIcon from '../../asets/images/close.png'

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

  return (
    <ListContainer className="container">
      <List>
        {dishList.map((dish: CardapioItem) => (
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
                <button
                // onClick={console.log('Adicionando ao carrinho')}
                >
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

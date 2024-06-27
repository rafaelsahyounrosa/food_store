import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const cardapioItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!cardapioItem) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer

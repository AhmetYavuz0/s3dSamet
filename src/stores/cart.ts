// src/stores/cart.ts
import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

interface CartState {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
  }),
  getters: {
    // Sepetteki tüm ürünlerin toplam tutarı
    totalPrice (state): number {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
  actions: {
    // Sepete ürün ekleme
    addToCart (product: { id: number, name: string, price: number, imageUrl?: string }) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    // Sepetten ürün silme
    removeFromCart (productId: number) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    // Ürün miktarını güncelleme
    updateQuantity (productId: number, quantity: number) {
      const item = this.items.find(i => i.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },
    // Sepeti tamamen boşaltma
    clearCart () {
      this.items = []
    },
  },
})

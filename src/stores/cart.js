// src/stores/cart.ts
import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    getters: {
        // Sepetteki tüm ürünlerin toplam tutarı
        totalPrice(state) {
            return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    actions: {
        // Sepete ürün ekleme
        addToCart(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            }
            else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        // Sepetten ürün silme
        removeFromCart(productId) {
            this.items = this.items.filter(item => item.id !== productId);
        },
        // Ürün miktarını güncelleme
        updateQuantity(productId, quantity) {
            const item = this.items.find(i => i.id === productId);
            if (item) {
                if (quantity <= 0) {
                    this.removeFromCart(productId);
                }
                else {
                    item.quantity = quantity;
                }
            }
        },
        // Sepeti tamamen boşaltma
        clearCart() {
            this.items = [];
        },
    },
});
//# sourceMappingURL=cart.js.map
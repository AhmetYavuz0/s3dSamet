interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}
interface CartState {
    items: CartItem[];
}
export declare const useCartStore: import("pinia").StoreDefinition<"cart", CartState, {
    totalPrice(state: {
        items: {
            id: number;
            name: string;
            price: number;
            quantity: number;
            imageUrl?: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<CartState>): number;
}, {
    addToCart(product: {
        id: number;
        name: string;
        price: number;
        imageUrl?: string;
    }): void;
    removeFromCart(productId: number): void;
    updateQuantity(productId: number, quantity: number): void;
    clearCart(): void;
}>;
export {};
//# sourceMappingURL=cart.d.ts.map
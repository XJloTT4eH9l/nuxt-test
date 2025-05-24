import { defineStore } from "pinia";
import { ref } from "vue";
import type { CartItem } from "~/types";

export const useCartStore = defineStore('cartStore', () => {
    const cartItems: Ref<CartItem[]> = ref([]);

    const addItemToCart = (item: CartItem): void => {
        const existingItem = findCartItem(item.id);

        if (existingItem) return;

        cartItems.value.push(item);
    };

    const incrementItemQuantity = (id: number): void => {
        const existingItem = findCartItem(id);

        if (!existingItem) return;

        existingItem.quantity += 1;
    };

    const decrimentItemQuantity = (id: number): void => {
        const existingItem = findCartItem(id);

        if (!existingItem) return;

        existingItem.quantity -= 1;

        if(existingItem.quantity <= 0) {
            removeItemFromCart(id);
        }
    };

    const findCartItem = (id: number): CartItem | undefined => {
        return cartItems.value.find(cartItem => cartItem.id === id)
    }

    const removeItemFromCart = (id: number): void => {
        cartItems.value = cartItems.value.filter(item => item.id !== id);
    };

    const clearCart = (): void => {
        cartItems.value = [];
    };

    return {
        cartItems,
        addItemToCart,
        incrementItemQuantity,
        decrimentItemQuantity,
        findCartItem,
        removeItemFromCart,
        clearCart
    }
}, {
    persist: true
});
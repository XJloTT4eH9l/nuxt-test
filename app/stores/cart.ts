import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import type { CartItem } from "~/types";

export const useCartStore = defineStore('cartStore', () => {
    const cartItems: Ref<CartItem[]> = ref([]);

    const loadCartFromStorage = (): void => {
        const data = localStorage.getItem('cartItems');

        if (data) {
            cartItems.value = JSON.parse(data);
        } else {
            cartItems.value = [];
        }
    };

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

    if (import.meta.client) {
        loadCartFromStorage();
    }

    watch(
        cartItems,
        (newCart) => {
            localStorage.setItem('cartItems', JSON.stringify(newCart));
        },
        { deep: true }
    );

    return {
        cartItems,
        addItemToCart,
        incrementItemQuantity,
        decrimentItemQuantity,
        findCartItem,
        removeItemFromCart,
        clearCart
    }
});
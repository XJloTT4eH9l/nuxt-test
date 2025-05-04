import { defineStore } from "pinia";
import { ref } from "vue";
import type { CartItem } from "~/types";

export const useCartStore = defineStore('cartStore', () => {
    const cartItems: Ref<CartItem[]> = ref([]);

    return {
        cartItems
    }
});
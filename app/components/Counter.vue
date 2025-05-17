<script setup lang="ts">
    defineProps<{
        id: number;
        quantity: number;
        increment: (id: number) => void;
        decriment: (id: number) => void;
    }>()
</script>

<template>
    <div class="counter">
        <button @click="decriment(id)" class="counter__button decriment">-</button>
        <span class="counter__value">{{ quantity }}</span>
        <button @click="increment(id)" class="counter__button increment">+</button>
    </div>
</template>

<style scoped lang="scss">
    .counter {
        display: flex;
        align-items: center;
        font-size: 16px;
        border: 1px solid gray;
        border-radius: 4px;
        &__value {
            width: 50px;
            text-align: center;
            padding: 8px 12px;
            font-weight: 700;
            border-left: 1px solid gray;
            border-right: 1px solid gray;
        }
        &__button {
            width: 40px;
            height: 40px;
            padding: 8px;
            transition: background-color 0.2s linear;
            &:hover {
                background-color: rgb(182, 182, 182);
            }
        }
    }
</style>
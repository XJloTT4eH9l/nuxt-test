<script setup lang="ts">
    import { type Product } from '~/types';

    defineProps<{
        item: Product
    }>()
</script>

<template>
    <li class="item">
        <div class="item__img-wrapper" :class="item.images[1] && 'item__img-wrapper--multiple'">
            <NuxtImg 
                class="item__img item__img--main"
                width="300px"
                height="300px"
                fit="contain"
                :src="item.images[0]" 
                :alt="item.title + 'image'" 
                placeholder
                placeholder-class="item__img-placeholder"
            />
            <NuxtImg
                v-if="item.images[1]" 
                class="item__img item__img--secondary"
                width="300px"
                height="300px"
                fit="contain"
                :src="item.images[1]" 
                :alt="item.title + 'image'" 
                placeholder
                placeholder-class="item__img-placeholder"
            />
        </div>
        <div class="item__title">{{ item.title }}</div>
        <NuxtLink class="item__link" :to="`/categories/${item.category}/product/${item.id}`">View</NuxtLink>
    </li>
</template>

<style scoped lang="scss">
    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        &__img-wrapper {
            position: relative;
            margin: 0 auto;
            width: 300px;
            height: 300px;
            border-radius: 10px;
            border: 1px solid rgb(175, 172, 172);
            &--multiple {
                &:hover {
                    .item__img--main {
                        opacity: 0;
                    }
                    .item__img--secondary {
                        opacity: 1;
                    }
                }
            }
        }
        &__img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: opacity 0.2s ease-in;
            &--secondary {
                opacity: 0;
            }
            &-placeholder {
                display: block;
                width: 300px;
                height: 300px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    #e0e0e0 0%,
                    #f0f0f0 50%,
                    #e0e0e0 100%
                );
                background-size: 200% 100%;
                animation: shimmer 1.5s infinite;
                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            }
        }
        &__title {
            text-align: center;
            font-weight: 600;
            font-size: 18px;
        }
        &__link {
            width: 100%;
            text-align: center;
            padding: 8px 10px;
            border-radius: 8px;
            background-color: #0cb90c;
            color: white;
            &:hover {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            }
        }
    }
</style>
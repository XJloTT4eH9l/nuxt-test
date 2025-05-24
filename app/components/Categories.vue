<script setup lang="ts">
    import { API_CATEGORIES } from '~/api';
    import type { Category } from '~/types';

    const { data } = await useFetch<Category[]>(API_CATEGORIES);
</script>

<template>
    <section class="categories">
        <h2>Categories</h2>
        <ul class="categories__list">
            <li v-for="category in data" :key="category.slug">
                <NuxtLink
                    :to="`/categories/${category.slug}`"
                    class="categories__item"
                >
                    {{ category.name }}
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
    .categories {
        padding: 20px 0;
        h2 {
            font-size: 22px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            @media screen and (max-width: 1024px) {
                grid-template-columns: repeat(3, 1fr);
            }
            @media screen and (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
        }
        &__item {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #0cb90c;
            font-size: 18px;
            text-align: center;
            border-radius: 6px;
            transition: background-color 0.2s ease;
            @media screen and (max-width: 768px) {
                padding: 6px;
            }
            &:hover {
                background-color: #0cb90c;
            }
        }
    }
</style>
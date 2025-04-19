<script setup lang="ts">
    import { API_PRODUCTS_BY_CATEGORY } from '~/api';
    import type { ProductsResponce } from '~/types';
    const params = useRoute().params;
    
    const { data, error } = await useFetch<ProductsResponce>(`${API_PRODUCTS_BY_CATEGORY}/${params.category}`);
</script>

<template>
    <main class="container">

        <div v-if="error">Error during the download</div>

        <div v-else class="content">
            <h1>{{ params.id }}</h1>
            <ul class="products-list">
                <ProductCard
                    v-for="product in data?.products"
                    :key="product.id"
                    :item = product
                />
            </ul>
            
        </div>
        
    </main>
</template>

<style scoped lang="scss">
    h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    .products-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
</style>
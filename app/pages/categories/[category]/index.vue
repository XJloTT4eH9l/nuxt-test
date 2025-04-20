<script setup lang="ts">
    import { ref } from 'vue';
    import { API_PRODUCTS_BY_CATEGORY } from '~/api';
    import makeCategoryTitle from '~/helpers/makeCategoryTitle';
    import type { ProductsResponce, BreadcrumbsItem } from '~/types';

    const params = useRoute().params;
    const categoryName = ref<string>(makeCategoryTitle(String(params.category)));

    const breadCrumbsOptions = computed<BreadcrumbsItem[]>(() => {
        return [
            { name: 'Categories', link: '/categories' },
            { name: categoryName.value },
        ]
    });
    
    const { data, error } = await useFetch<ProductsResponce>(`${API_PRODUCTS_BY_CATEGORY}/${params.category}`);
</script>

<template>
    <Breadcrumbs :options="breadCrumbsOptions" />
    <div v-if="error">Error during the download</div>

    <template v-else class="content">
        <h1>{{ categoryName }}</h1>
        <ul class="products-list">
            <ProductCard
                v-for="product in data?.products"
                :key="product.id"
                :item = product
            />
        </ul>
    </template>
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
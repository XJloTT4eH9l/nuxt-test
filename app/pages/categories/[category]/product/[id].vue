<script setup lang="ts">
    import { BASE } from '~/api';
    import makeCategoryTitle from '~/helpers/makeCategoryTitle';
    import type {  Product, BreadcrumbsItem } from '~/types';

    const params = useRoute().params;

    const breadCrumbsOptions = computed<BreadcrumbsItem[]>(() => {
        return [
            { name: 'Categories', link: '/categories' },
            { name: makeCategoryTitle(String(params.category)), link: `/categories/${params.category}` },
            { name: data.value ? data.value.title : String(params.id) }
        ]
    });
   
    const { data, error } = await useFetch<Product>(`${BASE}/${params.id}`);
</script>

<template>
    <Breadcrumbs :options="breadCrumbsOptions" />
    <template v-if="error">
        {{ error.message }}
    </template>
    
    <template v-else>
        <h1>{{ data?.title }}</h1>
    </template>
</template>

<style scoped>

</style>
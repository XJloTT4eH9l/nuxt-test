<script setup lang="ts">
    import { type BreadcrumbsItem } from '~/types';
    
    const breadCrumbsOptions = computed<BreadcrumbsItem[]>(() => {
        return [
            { name: 'Categories' }
        ]
    });

    useSeoMeta({
        title: 'TechnoStore - Categories',
        ogTitle: 'TechnoStore - Categories',
        description: 'TechnoStore - Categories',
        ogDescription: 'TechnoStore - Categories',
    });
</script>

<template>
    <Breadcrumbs :options="breadCrumbsOptions" />
    <h1>Categories list</h1>
    <Categories />
</template>

<style scoped>
    h1 {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
    }
</style>
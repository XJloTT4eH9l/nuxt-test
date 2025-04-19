<script setup lang="ts">
    import { BASE } from '~/api';
    import { type Product } from '~/types';
    const params = useRoute().params;
   
    const { data, error } = await useFetch<Product>(`${BASE}/${params.id}`);
</script>

<template>
    <main class="container">

        <template v-if="error">
            {{ error.message }}
        </template>
        
        <template v-else>
            <h1>{{ data?.title }}</h1>
        </template>

    </main>
</template>

<style scoped>

</style>
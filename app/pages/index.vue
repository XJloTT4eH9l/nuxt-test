<script setup lang="ts">
    definePageMeta({
        layout: 'home'
    });

    useSeoMeta({
        title: 'TechnoStore',
        ogTitle: 'TechnoStore',
        description: 'Buy Phones, Computers, Tablets & More – Top Tech at Great Prices',
        ogDescription: 'Buy Phones, Computers, Tablets & More – Top Tech at Great Prices',
        ogImage: '/logo.svg'
    });
</script>

<template>
    <Hero />
    <div class="container">
        <Categories />
    </div>
</template>

<style lang="scss">
    .container {
        max-width: 1230px;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>

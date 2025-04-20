<script setup lang="ts">
    import { type BreadcrumbsItem } from '~/types';

    defineProps<{
        options: BreadcrumbsItem[];
    }>()
</script>

<template>
    <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <NuxtLink to="/">Main page</NuxtLink>
        </li>
        <li v-for="item in options" class="breadcrumbs__item">
            <NuxtLink v-if="item.link" :to="item.link">
                {{ item.name }}
            </NuxtLink>
            <span v-else>{{ item.name }}</span>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 20px;
        &__item {
            &:not(:last-child) {
                color: #0cb90c;
                position: relative;
                &:hover {
                    text-decoration: underline;
                    text-decoration-color: #0cb90c;
                    text-underline-offset: 5px;
                }
                &::after {
                    content: '';
                    width: 10px;
                    height: 1px;
                    background-color: rgb(163, 161, 161);
                    position: absolute;
                    right: -14px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>
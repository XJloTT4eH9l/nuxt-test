<script setup lang="ts">
    import { BASE } from '~/api';
    import makeCategoryTitle from '~/helpers/makeCategoryTitle';
    import type {  Product, BreadcrumbsItem } from '~/types';

    const params = useRoute().params;

    const { data, error } = await useFetch<Product>(`${BASE}/${params.id}`);

    const breadCrumbsOptions = computed<BreadcrumbsItem[]>(() => {
        return [
            { name: 'Categories', link: '/categories' },
            { name: makeCategoryTitle(String(params.category)), link: `/categories/${params.category}` },
            { name: data.value ? data.value.title : String(params.id), link: `/categories/${params.category}/${params.id}` },
            { name: 'Reviews' }
        ]
    });

    useSeoMeta({
        title: `TechnoStore - ${data ? data.value?.title + 'reviews' : 'product reviews'}`,
        ogTitle: `TechnoStore - ${data ? data.value?.title + 'reviews' : 'product reviews'}`,
        description: `Reviews about ${data && data.value?.title}`,
        ogDescription: `Reviews about ${data && data.value?.title}`,
    });
</script>

<template>
    <template v-if="error && !data">
        {{ error.message }}
    </template>

    <template v-else>
        <Breadcrumbs :options="breadCrumbsOptions" />
        <div class="reviews" v-if="data">
            <h1 class="reviews__title">Reviews about {{ data.title }}:</h1>
            <ul class="reveiws__list">
                <li class="reviews__item" v-for="item in data.reviews" :key="item.reviewerEmail">
                    <div class="reviews__item-date">{{ String(item.date).split('T')[0] }}</div>
                    <div class="reviews__item-top">
                        <span class="reviews__item-name">{{ item.reviewerName }}</span>
                        <span class="reviews__item-rating">{{ item.rating }}</span>
                    </div>
                    <p class="reviews__item-comment">{{ item.comment }}</p>
                </li>
            </ul>
        </div>
    </template>
</template>

<style scoped lang="scss">
    .reviews {
        &__title {
            font-size: 28px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        &__item {
            padding: 10px;
            border-radius: 6px;
            border: 1px solid rgb(167, 166, 166);
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            &-date {
                font-size: 12px;
                color: rgb(167, 166, 166);
            }
            &-top {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 6px;
            }
            &-name {
                font-size: 18px;
                font-weight: 500;
            }
            &-rating {
                display: flex;
                align-items: center;
                gap: 8px;
                &::before {
                    content: '';
                    width: 20px;
                    height: 20px;
                    background-image: url("data:image/svg+xml,%3Csvg height='200px' width='200px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 53.867 53.867' xml:space='preserve' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpolygon style='fill:%23EFCE4A;' points='26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 '%3E%3C/polygon%3E%3C/g%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                }
            }
            &-comment {
                font-size: 16px;
            }
        }
    }
</style>
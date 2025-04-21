<script setup lang="ts">
    import { ref } from 'vue';
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

    provide('data', data);

    const mainImage = ref<string | undefined>(data?.value?.images[0]);

    function chnangeMainImg(imgSrc: string):void {
        mainImage.value = imgSrc;
    }
</script>

<template>
    <template v-if="error">
        {{ error.message }}
    </template>

    <template v-else>
        <Breadcrumbs :options="breadCrumbsOptions" />
        
        <div class="product" v-if="data">
            <div class="product__left">
                <div class="product__main-image">
                    <NuxtImg
                        width="400px"
                        height="400px"
                        fit="cover"
                        :src="mainImage" 
                        :alt="data.title + 'image'" 
                        placeholder
                        placeholder-class="product__img-placeholder"
                    />
                </div>
                <ul v-if="data?.images && data.images.length > 1" class="product__images-list">
                    <li 
                        v-for="(img, index) in data.images" 
                        :key="img"
                        class="product__mini-img"
                        @click="() => chnangeMainImg(img)"
                    >
                        <NuxtImg
                            width="80px"
                            height="80px"
                            fit="contain"
                            :src="img"
                            :alt="data.title + `image ${index + 1}`"
                            placeholder
                            placeholder-class="product__img-placeholder" 
                        />
                    </li>
                </ul>
            </div>
            <div class="product__right">
                <h1 class="product__title">{{ data.title }}</h1>
                <div v-if="data.description" class="product__description">{{ data.description }}</div>
                <div class="product__rating-wrapper">
                    <div class="product__rating">
                        <span>Rating: {{ data.rating }} / 5</span>
                    </div>
                    <div class="product__barcode">Code: {{ data.meta.barcode }}</div>
                </div>
                <NuxtLink :to="`/categories/${params.category}/${params.id}/comments`">Comments</NuxtLink>
            </div>
        </div>
    </template>   

    <!-- <NuxtPage title="comments title" /> -->
</template>

<style scoped lang="scss">
    .product {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        margin-top: 30px;
        &__left, &__right {
            width: 45%;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__title {
            font-size: 28px;
            font-weight: 500;
        }
        &__images-list {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &__main-image {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid rgb(167, 164, 164);
            border-radius: 6px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        &__mini-img {
            width: 80px;
            height: 80px;
            position: relative;
            padding: 8px;
            border: 1px solid rgb(167, 164, 164);
            border-radius: 6px;
            cursor: pointer;
        }
        &__img-placeholder {
            position: absolute;
            inset: 0;
            border-radius: 6px;
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
        &__rating {
            width: max-content;
            padding: 8px;
            border: 1px solid #0cb90c;
            border-radius: 6px;
            &-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        &__barcode {
            font-size: 14px;
            color: rgb(161, 161, 161);
        }
    }
</style>
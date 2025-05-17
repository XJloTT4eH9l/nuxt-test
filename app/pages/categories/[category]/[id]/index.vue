<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { BASE } from '~/api';
    import { useCartStore } from '#imports';
    import makeCategoryTitle from '~/helpers/makeCategoryTitle';
    import type {  Product, BreadcrumbsItem } from '~/types';

    const params = useRoute().params;
    const cartStore = useCartStore();
    const itemInCart = computed(() => cartStore.cartItems.find(item => item.id === Number(params.id)));
    const breadCrumbsOptions = computed<BreadcrumbsItem[]>(() => {
        return [
            { name: 'Categories', link: '/categories' },
            { name: makeCategoryTitle(String(params.category)), link: `/categories/${params.category}` },
            { name: data.value ? data.value.title : String(params.id) }
        ]
    });
    const { data, error } = await useFetch<Product>(`${BASE}/${params.id}`);
    const mainImage = ref<string | undefined>(data?.value?.images[0]);

    function chnangeMainImg(imgSrc: string):void {
        mainImage.value = imgSrc;
    }

    function onAddToCart() {
        if(data && data.value) {
            const newCartItem = {
                id: data.value.id,
                title: data.value.title,
                price: data.value.price,
                thumbnail: data.value.thumbnail,
                quantity: 1
            }
            cartStore.addItemToCart(newCartItem);
        }
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
                <div class="product__price-wrapper">
                    <div class="product__price">{{ data.price }}$</div>
                    <template v-if="!itemInCart">
                        <button  @click="onAddToCart" class="product__cart-button">Add to cart</button>
                    </template>
                    <template v-else>
                        <Counter
                            :id="data.id" 
                            :quantity="itemInCart.quantity"
                            :increment="cartStore.incrementItemQuantity"
                            :decriment="cartStore.decrimentItemQuantity"
                        />
                    </template>
                </div>
                <div class="product__rating-wrapper">
                    <div class="product__rating">
                        <span>Rating: {{ data.rating }} / 5</span>
                    </div>
                    <div class="product__barcode">Code: {{ data.meta.barcode }}</div>
                </div>
                <NuxtLink class="product__reviews-link" :to="`/categories/${params.category}/${params.id}/reviews`">Reviews</NuxtLink>
            </div>
        </div>
    </template>   
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
        &__price-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__cart-button {
            width: 150px;
            padding: 8px 12px;
            border-radius: 6px;
            color: #ffffff;
            background-color: #0cb90c;
        }
        &__rating {
            width: max-content;
            padding: 8px;
            border: 1px solid #EFCE4A;
            border-radius: 6px;
            span {
                display: flex;
                align-items: center;
                gap: 4px;
                &::after {
                    content: '';
                    width: 20px;
                    height: 20px;
                    background-image: url("data:image/svg+xml,%3Csvg height='200px' width='200px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 53.867 53.867' xml:space='preserve' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpolygon style='fill:%23EFCE4A;' points='26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 '%3E%3C/polygon%3E%3C/g%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                }
            }
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
        &__reviews-link {
            width: max-content;
            padding: 8px 10px;
            border: 1px solid #0cb90c;
            border-radius: 6px;
            transition: background-color 0.2s ease-in;
            &:hover {
                background-color: #0cb90c;
            }
        }
    }
</style>
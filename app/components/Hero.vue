<template>
    <section class="hero">
        <div class="hero__inner">
            <div class="hero__info">
                <h1>Buy Phones, Computers, Tablets & More – Top Tech at Great Prices</h1>
                <p>Discover the latest in technology at unbeatable prices – all in one place</p>
                <NuxtLink to="/categories">Browse categories</NuxtLink>
            </div>
            <NuxtImg src="/iphone.png" width="200px" alt="hero image iphone" /> 
        </div>
    </section>
</template>

<style scoped lang="scss">
    .hero {
        height: 40vh;
        background-color: rgb(176, 233, 159);
        @media screen and (max-width: 768px) {
            height: auto;
        }
        &__inner { 
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            max-width: 1230px;
            margin: auto;
            padding: 0 15px;
            gap: 15px;
            @media screen and (max-width: 768px) {
                flex-direction: column-reverse;
                padding: 15px;
            }
        }
        &__info {
            max-width: 400px;
            @media screen and (max-width: 768px) {
                max-width: unset;
                text-align: center;
            }
            h1 {
                font-size: 32px;
                font-weight: 700;
                line-height: 1.2;
                margin-bottom: 16px;
            }
            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 1.2;
                margin-bottom: 16px;
            }
            a {
                padding: 10px 15px;
                border-radius: 6px;
                color: #ffffff;
                background-color: #808080;
            }
        }
    }
</style>
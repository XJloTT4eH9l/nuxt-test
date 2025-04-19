<script setup lang="ts">
</script>

<template>
    <header class="header">
        <div class="header__container">
            <NuxtLink to="/">
                <NuxtImg src="/logo.svg" width="40px" />
            </NuxtLink>
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <NuxtLink to="/" active-class="active">Home</NuxtLink>
                    </li>
                    <li class="header__nav-item">
                        <NuxtLink to="/categories" active-class="active">Categories</NuxtLink>
                    </li>
                </ul>
            </nav>
            <button class="header__cart"></button>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    background-color: #808080;
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        max-width: 1230px;
        margin: 0 auto;
    }
    &__nav {
        &-list {
            display: flex;
            align-items: center;
            column-gap: 10px;
        }
        &-item {
            a {
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
                color: white;
                transition: color 0.2s linear;
                &.active {
                    color: #0ba70b;
                }
                &:hover {
                    color: #0ba70b;
                }
            }
        }
    }
    &__cart {
        width: 40px;
        height: 40px;
        min-width: 40px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23231f20%7D%3C/style%3E%3C/defs%3E%3Cg id='cart'%3E%3Cpath class='cls-1' d='M29.46 10.14A2.94 2.94 0 0 0 27.1 9H10.22L8.76 6.35A2.67 2.67 0 0 0 6.41 5H3a1 1 0 0 0 0 2h3.41a.68.68 0 0 1 .6.31l1.65 3 .86 9.32a3.84 3.84 0 0 0 4 3.38h10.37a3.92 3.92 0 0 0 3.85-2.78l2.17-7.82a2.58 2.58 0 0 0-.45-2.27zM28 11.86l-2.17 7.83A1.93 1.93 0 0 1 23.89 21H13.48a1.89 1.89 0 0 1-2-1.56L10.73 11H27.1a1 1 0 0 1 .77.35.59.59 0 0 1 .13.51z'/%3E%3Ccircle class='cls-1' cx='14' cy='26' r='2'/%3E%3Ccircle class='cls-1' cx='24' cy='26' r='2'/%3E%3C/g%3E%3C/svg%3E");
    }
}
</style>

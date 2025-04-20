<template>
    <Header />

    <main class="container">
        <slot />
    </main>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    a {
        display: inline-block;
    }
    body {
        line-height: 1.5;
        font-size: 16px;
    }
</style>
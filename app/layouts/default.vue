<script setup lang="ts">

</script>

<template>
        <Header />
        <div class="container">
            <slot />
        </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
}
</style>
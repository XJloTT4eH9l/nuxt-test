<script setup lang="ts">
    const params = useRoute().params;
</script>

<template>
    <div>
        <h1>{{ params.id }}</h1>
    </div>
</template>

<style scoped>

</style>
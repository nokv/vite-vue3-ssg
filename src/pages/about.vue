<template>
    <div>
        <h1 :class="styles.pageTitle">about</h1>
    </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import { useHead } from '@vueuse/head';
const styles = useCssModule();

useHead({
    title: 'About',
});
</script>

<style module lang="scss">
@use '~/assets/styles/pages/about.scss';
</style>

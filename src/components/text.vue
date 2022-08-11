<template>
    <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ message?: string }>();
const message = computed(() => `== ${props?.message as string} ==`);
</script>

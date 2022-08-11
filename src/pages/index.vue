<template>
    <div>
        <p :class="styles.message">
            {{ message }} <span :class="styles.message__annotation">dd</span>
        </p>

        <button @click="onClickButton">update</button>
        <Text :message="message" />
    </div>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import { useHead } from '@vueuse/head';
import Text from '~/components/text.vue';

useHead({
    title: 'hello world!',
});

const styles = useCssModule();

const message = ref('hello world');
const onClickButton = (): void => {
    message.value += '_1_';
};
</script>

<style module lang="scss">
@use '~/assets/styles/global' as global;

.message {
    font-weight: bold;

    &__annotation {
        color: #f00;

        @include global.mq-mobile {
            color: #000;
        }
    }
}
</style>

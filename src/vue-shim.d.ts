import type { defineComponent } from 'vue';

declare module '*.vue' {
    const component: ReturnType<typeof defineComponent>;
    export default component;
}

// declare module '*.vue' {
//     import type { DefineComponent } from 'vue';
//     const component: DefineComponent<[], [], []>;
//     export default component;
// }

// declare module '*.vue' {
//     import Vue from 'vue';
//     export default Vue;
// }

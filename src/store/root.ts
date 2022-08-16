import { defineStore } from 'pinia';

interface RootState {
    loading: boolean;
}

export const useRootStore = defineStore({
    id: 'root',
    state: (): RootState => ({
        loading: false,
    }),
    getters: {
        isLoading(state): boolean {
            return state.loading;
        },
    },
    actions: {
        start(): void {
            this.$state.loading = true;
        },
        done(): void {
            this.$state.loading = false;
        },
    },
});

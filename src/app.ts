import '~/assets/styles/app.scss';
import { ViteSSG } from 'vite-ssg';
import generatedRoutes from '~pages';
import App from '~/App.vue';

const routes = generatedRoutes;

export const createApp = ViteSSG(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    App,
    { routes }
);

import '~/assets/styles/app.scss';
import { ViteSSG } from 'vite-ssg';
import routes from '~pages';
import App from '~/App.vue';

export const createApp = ViteSSG(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    App,
    { routes },
);

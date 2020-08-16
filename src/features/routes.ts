import cardRoutes from './card';
import fontRoutes from './font';
import languageRoutes from './language';
import healthRoutes from './health';

const routes = [
    ...cardRoutes,
    ...fontRoutes,
    ...languageRoutes,
    ...healthRoutes
];

export default routes;

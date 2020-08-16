import cardRoutes from './card';
import deckRoutes from './deck';
import fontRoutes from './font';
import languageRoutes from './language';
import healthRoutes from './health';

const routes = [
    ...cardRoutes,
    ...deckRoutes,
    ...fontRoutes,
    ...languageRoutes,
    ...healthRoutes
];

export default routes;

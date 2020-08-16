import cardRoutes from './card';
import languageRoutes from './language';
import healthRoutes from './health';

const routes = [...cardRoutes, ...languageRoutes, ...healthRoutes];

export default routes;

import { createRoute } from '@tanstack/react-router'
import rootRoute from '../root-route.tsx';
import ShowsPage from './shows-page.tsx';


export const moviesRoute = createRoute({
  path: '/',
  component: ShowsPage,
  getParentRoute: () => rootRoute,
})

export default moviesRoute;

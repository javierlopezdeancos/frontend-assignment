import { createRoute } from '@tanstack/react-router'
import rootRoute from '../root-route.tsx';
import MoviesPage from './movies-page.tsx';


export const moviesRoute = createRoute({
  path: '/',
  component: MoviesPage,
  getParentRoute: () => rootRoute,
})

export default moviesRoute;

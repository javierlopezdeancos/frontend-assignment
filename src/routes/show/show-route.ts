import { createRoute } from '@tanstack/react-router'
import rootRoute from '../root-route.tsx';
import ShowsPage from './show-page.tsx';


export const showRoute = createRoute({
  path: '/show/:id',
  component: ShowsPage,
  getParentRoute: () => rootRoute,
})

export default showRoute;

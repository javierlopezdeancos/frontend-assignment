import { createRoute } from '@tanstack/react-router'
import rootRoute from '../root-route.tsx';
import ShowPage from './show-page.tsx';
import getShowApi from '@/shows/get-show-api.ts';

export const showRoute = createRoute({
  path: '/show/$id',
  component: ShowPage,
  getParentRoute: () => rootRoute,
   loader: async ({ params }) => {
    return getShowApi(params.id ? Number(params.id) : undefined)
  },
})

export default showRoute;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import rootRoute from '@/routes/root-route.tsx'
import moviesRoute from '@/routes/shows/shows-route'
import ErrorBoundaryComponent from '@/components/error-boundary/error-boundary-component.tsx'

const routeTree = rootRoute.addChildren([moviesRoute])
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)

  root.render(
    <StrictMode>
      <ErrorBoundaryComponent fallback={<div>Error</div>}>
        <RouterProvider router={router} />
      </ErrorBoundaryComponent>
    </StrictMode>,
  )
}


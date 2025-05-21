import { createRootRoute, Outlet } from '@tanstack/react-router'
import AppLayout from "@/app-layout.tsx"

export const rootRoute = createRootRoute({
  component: () => <AppLayout><Outlet/></AppLayout>,
})

export default rootRoute;

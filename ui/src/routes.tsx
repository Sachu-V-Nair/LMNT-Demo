import type { LmntProductRoute } from "@lmnt-platform/lmnt-ui-core"
import { Navigate } from "react-router-dom"
import { DemoHomePage } from "./pages/DemoHomePage"
import { SamplePage } from "./pages/SamplePage"

type DemoProductRoute = LmntProductRoute & {
  overrides?: string[]
}

export const demoRoutes = [

  { path: "/home", element: <Navigate to="/demo/home" replace /> },
  { path: "/demo/home", element: <DemoHomePage />, overrides: ["/home"] },
  { path: "/demo/sample", element: <SamplePage /> },

] satisfies DemoProductRoute[]

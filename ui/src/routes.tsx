import type { LmntProductRoute } from "@titan3rd/framework-ui"
import { Navigate } from "react-router-dom"
import { DemoHomePage } from "./pages/DemoHomePage"
import { SamplePage } from "./pages/SamplePage"

export const demoRoutes: LmntProductRoute[] = [

  { path: "/home", element: <Navigate to="/demo/home" replace /> },
  { path: "/demo/home", element: <DemoHomePage /> },
  { path: "/demo/sample", element: <SamplePage /> },

]

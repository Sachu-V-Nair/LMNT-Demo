import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createLmntApp } from "@titan3rd/framework-ui"
import "@titan3rd/framework-ui/styles.css"
import { demoRoutes } from "./routes"

const App = createLmntApp({
  productRoutes: demoRoutes,
  defaultRoute: "/demo/sample",
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createLmntApp } from "@titan3rd/framework-ui"
import "@titan3rd/framework-ui/styles.css"
import demoPackage from "../package.json"
import { demoRoutes } from "./routes"

const App = createLmntApp({
    productRoutes: demoRoutes,
    defaultRoute: "/demo/sample",
    productFrontendVersion: demoPackage.version,
} as Parameters<typeof createLmntApp>[0] & { productFrontendVersion: string })

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
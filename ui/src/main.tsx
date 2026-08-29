import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { lmntBoardModule } from "@titan3rd/lmnt-ui-board"
import { lmntCommunicationModule } from "@titan3rd/lmnt-ui-communication"
import { createLmntApp } from "@titan3rd/lmnt-ui-core"
import { lmntFinanceModule } from "@titan3rd/lmnt-ui-finance"
import { lmntOperationsModule } from "@titan3rd/lmnt-ui-operations"
import { lmntWebhookModule } from "@titan3rd/lmnt-ui-webhook"
import { lmntWorkflowModule } from "@titan3rd/lmnt-ui-workflow"
import "@titan3rd/lmnt-ui-board/styles.css"
import "@titan3rd/lmnt-ui-communication/styles.css"
import "@titan3rd/lmnt-ui-core/styles.css"
import "@titan3rd/lmnt-ui-finance/styles.css"
import "@titan3rd/lmnt-ui-operations/styles.css"
import "@titan3rd/lmnt-ui-webhook/styles.css"
import "@titan3rd/lmnt-ui-workflow/styles.css"
import demoPackage from "../package.json"
import { demoRoutes } from "./routes"

const App = createLmntApp({
    modules: [
        lmntOperationsModule,
        lmntWorkflowModule,
        lmntFinanceModule,
        lmntCommunicationModule,
        lmntBoardModule,
        lmntWebhookModule,
    ],
    productRoutes: demoRoutes,
    defaultRoute: "/demo/home",
    productLogoPath: "/__missing-demo-logo.svg",
    productFrontendVersion: demoPackage.version,
} as Parameters<typeof createLmntApp>[0] & { productFrontendVersion: string })

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

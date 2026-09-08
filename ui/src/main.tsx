import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { lmntBoardModule } from "@lmnt-platform/lmnt-ui-board"
import { lmntCommunicationModule } from "@lmnt-platform/lmnt-ui-communication"
import { createLmntApp } from "@lmnt-platform/lmnt-ui-core"
import { lmntFinanceModule } from "@lmnt-platform/lmnt-ui-finance"
import { lmntOperationsModule } from "@lmnt-platform/lmnt-ui-operations"
import { lmntWebhookModule } from "@lmnt-platform/lmnt-ui-webhook"
import { lmntWorkflowModule } from "@lmnt-platform/lmnt-ui-workflow"
import "@lmnt-platform/lmnt-ui-board/styles.css"
import "@lmnt-platform/lmnt-ui-communication/styles.css"
import "@lmnt-platform/lmnt-ui-core/styles.css"
import "@lmnt-platform/lmnt-ui-finance/styles.css"
import "@lmnt-platform/lmnt-ui-operations/styles.css"
import "@lmnt-platform/lmnt-ui-webhook/styles.css"
import "@lmnt-platform/lmnt-ui-workflow/styles.css"
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

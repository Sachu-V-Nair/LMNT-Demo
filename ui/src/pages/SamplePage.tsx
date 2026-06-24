import { useMemo, useState } from "react"

type ModuleStatus = "ready" | "draft" | "blocked"

type ProductModule = {
  name: string
  route: string
  description: string
  status: ModuleStatus
  owner: string
}

type ProductActivity = {
  id: string
  title: string
  description: string
  time: string
  type: "workflow" | "audit" | "menu" | "api"
}

type SampleRecord = {
  id: string
  customer: string
  stage: string
  amount: string
  updatedAt: string
}

const productModules: ProductModule[] = [
  {
    name: "Product Dashboard",
    route: "/demo/dashboard",
    description: "Landing page for product-specific KPIs and daily operations.",
    status: "ready",
    owner: "Product UI",
  },
  {
    name: "Business Records",
    route: "/demo/records",
    description: "CRUD screens owned by the product application.",
    status: "ready",
    owner: "Product Backend",
  },
  {
    name: "Approvals",
    route: "/demo/approvals",
    description: "Product workflow screens that can reuse LMNT workflow services.",
    status: "draft",
    owner: "LMNT Workflow",
  },
  {
    name: "Reports",
    route: "/demo/reports",
    description: "Product-specific reports using framework layout and security.",
    status: "blocked",
    owner: "Product Team",
  },
]

const frameworkServices = [
  "Auth + JWT session",
  "RBAC permissions",
  "Dynamic menus",
  "Tenant / organization context",
  "App shell + responsive layout",
  "Audit logs and metrics",
  "Workflow hooks",
  "Theme and shared styles",
]

const activities: ProductActivity[] = [
  {
    id: "ACT-1001",
    title: "Product route mounted",
    description: "SamplePage is loaded through productRoutes inside createLmntApp.",
    time: "09:30 AM",
    type: "menu",
  },
  {
    id: "ACT-1002",
    title: "Demo record created",
    description: "A product-owned backend endpoint can be called from this page later.",
    time: "10:05 AM",
    type: "api",
  },
  {
    id: "ACT-1003",
    title: "Approval workflow prepared",
    description: "Product screens can trigger LMNT workflow definitions when wired.",
    time: "11:20 AM",
    type: "workflow",
  },
  {
    id: "ACT-1004",
    title: "Framework audit captured",
    description: "Security and audit concerns stay in LMNT instead of product code.",
    time: "12:10 PM",
    type: "audit",
  },
]

const sampleRecords: SampleRecord[] = [
  {
    id: "REC-001",
    customer: "Acme Enterprises",
    stage: "New request",
    amount: "₹24,500",
    updatedAt: "Today, 09:40 AM",
  },
  {
    id: "REC-002",
    customer: "Northstar Labs",
    stage: "In review",
    amount: "₹82,000",
    updatedAt: "Today, 10:15 AM",
  },
  {
    id: "REC-003",
    customer: "Blue Orchid Group",
    stage: "Approved",
    amount: "₹1,18,750",
    updatedAt: "Yesterday, 05:30 PM",
  },
]

const statusClasses: Record<ModuleStatus, string> = {
  ready: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  draft: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  blocked: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
}

const typeClasses: Record<ProductActivity["type"], string> = {
  workflow: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
  audit: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  menu: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  api: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
}

function SectionCard({
  title,
  description,
  children,
  className = "",
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`overflow-hidden rounded-2xl border bg-card shadow-sm ${className}`}>
      <div className="border-b bg-muted/25 px-5 py-4">
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        {description ? <p className="mt-1 text-xs text-muted-foreground">{description}</p> : null}
      </div>
      <div className="p-5">{children}</div>
    </section>
  )
}

function StatTile({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{helper}</div>
    </div>
  )
}

function StatusBadge({ status }: { status: ModuleStatus }) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold capitalize ${statusClasses[status]}`}>
      {status}
    </span>
  )
}

export function SamplePage() {
  const [selectedStatus, setSelectedStatus] = useState<"all" | ModuleStatus>("all")
  const [selectedRecord, setSelectedRecord] = useState(sampleRecords[0])

  const filteredModules = useMemo(() => {
    if (selectedStatus === "all") return productModules
    return productModules.filter((module) => module.status === selectedStatus)
  }, [selectedStatus])

  return (
    <main className="flex flex-1 flex-col gap-6">
      <header className="overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="border-b bg-muted/25 px-6 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Product extension demo
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Running inside LMNT shell
                </span>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Sample Product Page</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                This page is owned by the product UI, but it runs inside LMNT using framework authentication,
                menus, layout, tenant context, permissions, and shared styling.
              </p>
            </div>

            <div className="grid min-w-[260px] grid-cols-2 gap-3 rounded-2xl border bg-background/70 p-3">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Product</div>
                <div className="mt-1 text-sm font-semibold">Demo App</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Base</div>
                <div className="mt-1 text-sm font-semibold">LMNT</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Route</div>
                <div className="mt-1 font-mono text-xs">/sample</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Mode</div>
                <div className="mt-1 text-sm font-semibold">Extension</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Product routes" value="4" helper="Mounted through productRoutes" />
        <StatTile label="Framework services" value="8" helper="Reused from LMNT" />
        <StatTile label="Demo records" value="3" helper="Product-owned data area" />
        <StatTile label="Pending workflows" value="2" helper="Ready for backend wiring" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionCard
          title="Product modules"
          description="These menus/pages belong to the product application. LMNT only provides the shell and common services."
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {(["all", "ready", "draft", "blocked"] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${selectedStatus === status
                    ? "border-primary/30 bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                  }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {filteredModules.map((module) => (
              <article key={module.route} className="rounded-2xl border bg-background/60 p-4 transition-colors hover:bg-muted/25">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold">{module.name}</h3>
                    <p className="mt-1 font-mono text-xs text-primary">{module.route}</p>
                  </div>
                  <StatusBadge status={module.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{module.description}</p>
                <div className="mt-4 rounded-xl border bg-card px-3 py-2 text-xs text-muted-foreground">
                  Owner: <span className="font-semibold text-foreground">{module.owner}</span>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="LMNT services reused" description="The product should not rebuild these.">
          <div className="space-y-2">
            {frameworkServices.map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-xl border bg-background/60 px-3 py-2.5">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <SectionCard
          title="Sample product data"
          description="This table represents data your product backend will own later. It is dummy UI for now."
        >
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Record</th>
                  <th className="px-4 py-3 text-left font-semibold">Customer</th>
                  <th className="px-4 py-3 text-left font-semibold">Stage</th>
                  <th className="px-4 py-3 text-right font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {sampleRecords.map((record) => (
                  <tr
                    key={record.id}
                    onClick={() => setSelectedRecord(record)}
                    className={`cursor-pointer border-t transition-colors hover:bg-muted/30 ${selectedRecord.id === record.id ? "bg-primary/5" : ""
                      }`}
                  >
                    <td className="px-4 py-3 font-mono text-xs text-primary">{record.id}</td>
                    <td className="px-4 py-3 font-medium">{record.customer}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border bg-background px-2.5 py-1 text-xs">{record.stage}</span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">{record.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="Selected record" description="A detail panel pattern for product-owned screens.">
          <div className="rounded-2xl border bg-background/60 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-mono text-xs text-primary">{selectedRecord.id}</div>
                <h3 className="mt-1 text-lg font-semibold">{selectedRecord.customer}</h3>
              </div>
              <span className="rounded-full border bg-card px-3 py-1 text-xs font-semibold">{selectedRecord.stage}</span>
            </div>
            <dl className="mt-5 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border bg-card px-3 py-2">
                <dt className="text-muted-foreground">Amount</dt>
                <dd className="font-semibold">{selectedRecord.amount}</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border bg-card px-3 py-2">
                <dt className="text-muted-foreground">Updated</dt>
                <dd className="font-semibold">{selectedRecord.updatedAt}</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border bg-card px-3 py-2">
                <dt className="text-muted-foreground">Backend</dt>
                <dd className="font-mono text-xs">/api/demo/records</dd>
              </div>
            </dl>
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Open product workflow
            </button>
          </div>
        </SectionCard>
      </section>

      <SectionCard
        title="Extension activity"
        description="Use this area to show what is product-owned and what is handled by LMNT."
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => (
            <article key={activity.id} className="rounded-2xl border bg-background/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold capitalize ${typeClasses[activity.type]}`}>
                  {activity.type}
                </span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{activity.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{activity.description}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <section className="rounded-2xl border border-dashed bg-muted/20 p-5 text-sm text-muted-foreground">
        <div className="font-semibold text-foreground">Developer note</div>
        <p className="mt-2 leading-6">
          Keep product screens focused on business logic. Use LMNT for auth, layout, menus, permissions,
          tenant context, audit, and shared platform services. Replace the dummy arrays in this page with
          product API calls when the backend is ready.
        </p>
      </section>
    </main>
  )
}

export default SamplePage

const modules = [
  { name: "Sample workspace", route: "/demo/sample", state: "Ready" },
  { name: "Product dashboard", route: "/demo/dashboard", state: "Planned" },
  { name: "Business records", route: "/demo/records", state: "Planned" },
]

const services = [
  "Framework shell",
  "Dynamic menu access",
  "Tenant context",
  "Shared theme",
]

export function DemoHomePage() {
  return (
    <main className="flex flex-1 flex-col gap-6">
      <section className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-md border bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground">
            Demo product
          </span>
          <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            Custom /home
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Demo Product Home</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          This screen replaces the framework home route to show how product applications can own their landing experience.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-semibold">Product modules</h2>
          <div className="mt-4 grid gap-3">
            {modules.map((module) => (
              <a key={module.name} href={module.route} className="rounded-md border bg-background p-3 transition-colors hover:bg-muted">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">{module.name}</span>
                  <span className="rounded-md border px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">{module.state}</span>
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{module.route}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="text-sm font-semibold">Inherited services</h2>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <div key={service} className="rounded-md border bg-background px-3 py-2 text-sm font-medium">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

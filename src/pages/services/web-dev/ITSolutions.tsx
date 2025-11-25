import { Helmet } from "react-helmet-async"
import { Motion } from "../../../components/animation-provider"

const solutions = [
  {
    name: "IT Consultation & Strategy",
    description:
      "CxO workshops that translate business outcomes into secure, scalable technology roadmaps with measurable ROI.",
    stack: ["Advisory Sprints", "Architecture Reviews", "Budget Planning"],
    services: ["Discovery & stakeholder interviews", "Roadmap + RACI creation", "Budget + tooling alignment"],
  },
  {
    name: "Infrastructure & Cloud",
    description:
      "Hybrid infrastructure builds covering network design, zero-trust policies, and cloud landing zones on AWS, Azure, and Supabase.",
    stack: ["Azure", "AWS", "Supabase", "Kubernetes", "Terraform"],
    services: ["Network & security baselines", "Cloud migration playbooks", "Backup and DR automation"],
  },
  {
    name: "Security & Compliance",
    description:
      "24/7 monitoring and remediation covering identity, device posture, and compliance reporting for regulated industries.",
    stack: ["Defender", "Sentinel", "Custom SIEM", "Policy as Code"],
    services: ["Managed SOC workflows", "Compliance dashboards", "Pen-test & hardening cycles"],
  },
  {
    name: "Managed Support & ITES",
    description:
      "Dedicated pods that deliver helpdesk, onboarding, and asset management with Supabase-backed ticketing.",
    stack: ["Modern Helpdesk", "Supabase Tables", "Automation Runbooks"],
    services: ["Employee onboarding automation", "Hardware lifecycle tracking", "SLA reporting & insights"],
  },
]

const ITSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Punk IT Solutions | IT Enabled Services</title>
        <meta
          name="description"
          content="End-to-end IT enabled services from Punk Records including consultation, infrastructure, security, and managed IT pods."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-950/90 via-emerald-900/70 to-green-950/90 text-white pt-24">
        <section className="py-16 px-4 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Punk IT Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            IT enabled services with{" "}
            <span className="text-emerald-300">two-week deployment rhythms</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-emerald-100">
            Each section below outlines the dedicated pod, toolset, and immediate deliverables so stakeholders can see
            exactly what lands at the end of our sprint window.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-24 space-y-12">
          {solutions.map((solution, index) => (
            <Motion.section
              key={solution.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.3em] text-emerald-200/80 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-100">Delivery: 2 Weeks</span>
                <span className="px-3 py-1 rounded-full border border-white/15 text-white/70">ITES Pod</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{solution.name}</h2>
                <p className="text-emerald-100 leading-relaxed">{solution.description}</p>

                <div className="flex flex-wrap gap-2">
                  {solution.stack.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full border border-white/20 text-sm text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                      Sprint deliverables
                    </p>
                    <ul className="space-y-2 text-emerald-50/90">
                      {solution.services.map((service) => (
                        <li key={service} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-900/40 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                      Engagement snapshot
                    </p>
                    <p className="text-lg text-white/90">
                      Dedicated Slack + Notion channels, automated Supabase status dashboards, and executive-ready recap
                      decks at the end of every sprint.
                    </p>
                  </div>
                </div>
              </div>
            </Motion.section>
          ))}
        </div>
      </div>
    </>
  )
}

export default ITSolutions


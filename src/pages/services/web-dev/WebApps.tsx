import { Helmet } from "react-helmet-async"
import { Motion } from "../../../components/animation-provider"

const projects = [
  {
    name: "Safaiwalay",
    url: "https://safaiwalay.com",
    description: "Facilities and deep-cleaning brand for homes and commercial spaces across central India.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Booking funnel with lead scoring and instant notifications",
      "Multi-city service catalogue with testimonial carousels",
    ],
    videoSrc: "/assets/videos/safaiwalay_intro.mp4",
  },
  {
    name: "Punktech",
    url: "https://punktech.in",
    description: "Corporate site for Punk Records Creative Studio showcasing service verticals and thought leadership.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "SEO-focused long-form sections and structured data",
      "Service microsite navigation sharing one design language",
    ],
  },
  {
    name: "Coco Intimo",
    url: "https://cocointimo.com",
    description: "Luxury confectionery storefront with bespoke gifting workflows and seasonal drops.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Rich storytelling layouts with scroll-triggered reveals",
      "Quick inquiry forms that sync to Supabase CRM tables",
    ],
  },
  {
    name: "PrintCraft India",
    url: "https://printcraftindia.com",
    description: "Next.js powered print-on-demand storefront with configurable catalogues.",
    stack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    highlights: [
      "Server-rendered landing pages for fast initial paint",
      "Quotation builder tied to Supabase workflow automation",
    ],
  },
  {
    name: "Skylite Lounge",
    url: "https://skylitelounge.com",
    description: "Hospitality experience site for Skylite Lounge with menu highlights and reservation CTAs.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Motion-forward hero with reservation prompts",
      "CMS-ready sections for events and artist lineups",
    ],
  },
  {
    name: "Curiosity Edutech",
    url: "https://curiosityedutech.com",
    description: "Education platform landing hub promoting hybrid learning programs for schools.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Program comparison cards with trust badges",
      "Lead capture forms connected to Supabase automations",
    ],
  },
  {
    name: "Dishani Water Purifier",
    url: "https://dishaniwaterpurifier.in",
    description: "Product-first site for Dishani water purifiers with service booking and AMC flows.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "SKU galleries with feature chips",
      "Post-purchase service scheduling built in Supabase",
    ],
  },
]

const getPreviewUrl = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/800/${url.replace(/^https?:\/\//, "")}`

const WebApps = () => {
  return (
    <>
      <Helmet>
        <title>Web Applications Portfolio | Punk Webapps</title>
        <meta
          name="description"
          content="Preview the React + Supabase powered web applications delivered by Punk Records Creative Studio in two-week sprints."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-950/85 via-emerald-900/70 to-green-950/85 text-white pt-24">
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Punk Webapps</p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Launch-ready products in{" "}
              <span className="text-emerald-300">two-week delivery sprints</span>
            </h1>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              Every build ships with Supabase auth, database, and storage wired up out of the box.
              Scroll through live previews, tech stacks, and delivery outcomes for recent launches.
            </p>
          </div>
        </section>

        <div className="space-y-16 pb-24">
          {projects.map((project, index) => (
            <section
              key={project.name}
              className="px-4"
            >
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur">
                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold uppercase tracking-widest">
                      Delivery: 2 Weeks
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-emerald-200 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Visit live site
                    </a>
                  </div>
                  <h2 className="text-3xl font-bold">{project.name}</h2>
                  <p className="text-emerald-100 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full border border-white/20 text-sm text-white/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-emerald-100/90">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="order-first lg:order-none"
                >
                  <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600/30 to-green-900/40 shadow-2xl overflow-hidden">
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: 'none' }}
                      />
                    ) : (
                      <>
                        <img
                          src={getPreviewUrl(project.url)}
                          alt={`${project.name} preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-4 py-2 rounded-full text-xs tracking-[0.3em] text-white/80">
                          LIVE PREVIEW
                        </div>
                      </>
                    )}
                  </div>
                </Motion.div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

export default WebApps


import { Helmet } from "react-helmet-async"
import { Motion } from "../../../components/animation-provider"
import { useState, useRef } from "react"
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"

const saasProducts = [
  {
    name: "Liquor Management System",
    description:
      "Excise-ready SaaS that manages procurement, bonded warehouse inventory, outlet distribution, and retail analytics.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    modules: ["Excise document automation", "Inventory + outlet transfers", "Retail performance dashboards"],
    gradient: "from-amber-500/40 via-rose-500/30 to-amber-900/40",
    videoSrc: "/assets/videos/FL-IV saas main.mp4",
  },
  {
    name: "Learning Management System",
    description:
      "White-label LMS for schools and training institutes with cohort tracking, assessments, and hybrid classrooms.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    modules: ["Content & assessments", "Cohort analytics", "Parent + mentor portals"],
    gradient: "from-sky-500/40 via-indigo-500/30 to-sky-900/40",
    videoSrc: null,
  },
  {
    name: "School ERP",
    description:
      "Comprehensive administrative suite built with a PHP/MySQL core and native services for finance, HR, and compliance.",
    stack: ["PHP", "MySQL", "C Services", "Modern UI Layer"],
    modules: ["Finance & fee automation", "HR + payroll", "Asset & transport control"],
    gradient: "from-emerald-500/40 via-teal-500/30 to-emerald-900/40",
    videoSrc: null,
  },
]

// Video Player Component with Mute Toggle
const VideoPlayer = ({ src, gradient }: { src: string; gradient: string }) => {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br shadow-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover relative z-10"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm hover:bg-black/80 px-4 py-2 rounded-full text-white transition-all duration-300 flex items-center gap-2 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <SpeakerXMarkIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <SpeakerWaveIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
        <span className="text-xs tracking-[0.2em]">{isMuted ? "MUTED" : "UNMUTED"}</span>
      </button>
    </div>
  )
}

// Placeholder Component
const MediaPlaceholder = ({ gradient }: { gradient: string }) => {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br shadow-2xl overflow-hidden flex items-center justify-center">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative z-10 text-center space-y-2 p-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Media slot</p>
        <p className="text-2xl font-semibold text-white">Video & image preview coming soon</p>
        <p className="text-sm text-white/80">
          Drop in Loom tours or Figma prototypes without changing layout.
        </p>
      </div>
    </div>
  )
}

const Software = () => {
  return (
    <>
      <Helmet>
        <title>Punk Software | SaaS Products</title>
        <meta
          name="description"
          content="Liquor management, school ERP, and LMS platforms engineered by Punk Records with React, Supabase, PHP, and MySQL stacks."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-950/90 via-green-900/70 to-green-950/90 text-white pt-24">
        <section className="py-16 px-4 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Punk Software</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            SaaS products tailored for{" "}
            <span className="text-emerald-300">regulated and education-first teams</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-emerald-100">
            Media walkthroughs are landing shortly. Until then, explore the stack choices, core modules, and delivery
            narrative for each platform. Every rollout follows a predictable two-week milestone cadence.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-24 space-y-12">
          {saasProducts.map((product, index) => (
            <section
              key={product.name}
              className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur space-y-6"
            >
              <Motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.3em] text-emerald-200/80">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-100">Delivery: 2 Weeks</span>
                  <span className="px-3 py-1 rounded-full border border-white/15 text-white/70">Productized SaaS</span>
                  {product.videoSrc ? (
                    <span className="px-3 py-1 rounded-full border border-white/15 text-white/70">
                      Video Demo
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full border border-white/15 text-white/70">
                      Media Placeholder
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-emerald-100 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.stack.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full border border-white/20 text-sm text-white/90"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-[2fr_3fr] gap-6 items-center">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                      Core modules
                    </p>
                    <ul className="space-y-2 text-emerald-50/90">
                      {product.modules.map((module) => (
                        <li key={module} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.videoSrc ? (
                    <VideoPlayer src={product.videoSrc} gradient={product.gradient} />
                  ) : (
                    <MediaPlaceholder gradient={product.gradient} />
                  )}
                </div>
              </Motion.div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

export default Software


"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { AnimatePresence } from "framer-motion"
import { Suspense } from "react"
import { ThemeProvider } from "./components/theme-provider"
import { AnimationProvider } from "./components/animation-provider"
import { CreativeBackground } from "./components/CreativeBackground"
import ServiceMatrixBackground from "./components/ServiceMatrixBackground"
import ServiceNavbar from "./components/ServiceNavbar"
import Footer from "./components/Footer"
import { Loader } from "./components/ui/loader"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Reveal from "./pages/Reveal"
import Protect from "./pages/Protect"
import Solutions from "./pages/Solutions"
import Newsroom from "./pages/Newsroom"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import WebDev from "./pages/services/WebDev"
import Music from "./pages/services/Music"
import PhotoVideo from "./pages/services/PhotoVideo"
import GraphicsEditing from "./pages/services/GraphicsEditing"
import SocialMarketing from "./pages/services/SocialMarketing"
import WebApps from "./pages/services/web-dev/WebApps"
import Software from "./pages/services/web-dev/Software"
import ITSolutions from "./pages/services/web-dev/ITSolutions"

// Performance optimization: Memoized route components
const AppRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-dev" element={<WebDev />} />
          <Route path="/services/web-dev/webapps" element={<WebApps />} />
          <Route path="/services/web-dev/software" element={<Software />} />
          <Route path="/services/web-dev/it-solutions" element={<ITSolutions />} />
          <Route path="/services/photo-video" element={<PhotoVideo />} />
          <Route path="/services/graphics-editing" element={<GraphicsEditing />} />
          <Route path="/services/music" element={<Music />} />
          <Route path="/services/social-marketing" element={<SocialMarketing />} />
          <Route path="/reveal" element={<Reveal />} />
          <Route path="/protect" element={<Protect />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  return (
    <AnimationProvider>
      <ThemeProvider>
        <HelmetProvider>
          <Router>
            <div className="min-h-screen bg-avocado-dark relative overflow-x-hidden">
              {/* Optimized backgrounds with reduced opacity for better performance */}
              <CreativeBackground />
              <ServiceMatrixBackground />
              
              {/* Dynamic service navbar */}
              <ServiceNavbar />
              
              {/* Optimized route rendering */}
              <AppRoutes />
              
              <Footer />
            </div>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </AnimationProvider>
  )
}

export default App

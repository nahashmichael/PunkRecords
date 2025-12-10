"use client"

import { Motion } from "../components/animation-provider"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"
import {
  CameraIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

// Service navigation data structure
const serviceNavigation = [
  {
    id: 'web-dev',
    name: 'Web Development',
    path: '/services/web-dev',
    icon: CodeBracketIcon,
    color: 'green',
    subServices: [
      { name: 'Punk Software', path: '/services/web-dev/software', description: 'Custom software development solutions' },
      { name: 'Punk Webapps', path: '/services/web-dev/webapps', description: 'Progressive web applications' },
      { name: 'Punk IT Solutions', path: '/services/web-dev/it-solutions', description: 'Comprehensive IT consulting and solutions' },
    ]
  },
  {
    id: 'photo-video',
    name: 'Photography & Videography',
    path: '/services/photo-video',
    icon: CameraIcon,
    color: 'red',
    subServices: [
      { name: 'Punk Product', path: '/services/photo-video/product', description: 'Professional product photography services' },
      { name: 'Punk Service', path: '/services/photo-video/service', description: 'Event and service photography' },
      { name: 'Punk Weddings', path: '/services/photo-video/weddings', description: 'Wedding photography and videography' },
    ]
  },
  {
    id: 'graphics-editing',
    name: 'Graphics & Editing',
    path: '/services/graphics-editing',
    icon: PaintBrushIcon,
    color: 'purple',
    subServices: [
      { name: 'Punk Graphics', path: '/services/graphics-editing/graphics', description: 'Professional graphic design services' },
      { name: 'Punk Editings', path: '/services/graphics-editing/editing', description: 'Video and photo editing services' },
      { name: 'Punk Creation', path: '/services/graphics-editing/creation', description: '2D and 3D image creation' },
    ]
  },
  {
    id: 'music',
    name: 'Music Production',
    path: '/services/music',
    icon: MusicalNoteIcon,
    color: 'orange',
    subServices: [
      { name: 'Punk Production', path: '/services/music/production', description: 'Music production and recording services' },
      { name: 'Punk Recordings', path: '/services/music/recordings', description: 'Professional recording studio services' },
      { name: 'Punk Affiliations', path: '/services/music/affiliations', description: 'Artist development and partnerships' },
    ]
  },
  {
    id: 'social-marketing',
    name: 'Social Media Marketing',
    path: '/services/social-marketing',
    icon: MegaphoneIcon,
    color: 'blue',
    subServices: [
      { name: 'Punk Strategies', path: '/services/social-marketing/strategies', description: 'Digital marketing strategies and planning' },
      { name: 'Punk Campaigns', path: '/services/social-marketing/campaigns', description: 'Social media and digital campaigns' },
      { name: 'Punk Surveys', path: '/services/social-marketing/surveys', description: 'Market research and customer surveys' },
    ]
  },
]

const Home = () => {
  const { theme } = useTheme()

  // Service-specific content
  const serviceContent = {
    music: {
      title: "MUSIC PRODUCTION & AUDIO DESIGN",
      subtitle: "Creating Sonic Experiences",
      description: "Professional music production, sound design, and audio engineering services that bring your creative vision to life with cutting-edge technology and artistic excellence.",
      heroImage: "/music-production-1.png",
      features: [
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Music Production", description: "Full-service music production from concept to final master.", color: "bg-red-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Sound Design", description: "Custom sound effects and audio branding for your projects.", color: "bg-teal-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Audio Engineering", description: "Professional mixing, mastering, and post-production services.", color: "bg-blue-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Jingle Creation", description: "Memorable jingles and audio logos for brand recognition.", color: "bg-mint-500" }
      ]
    },
    web: {
      title: "WEB DEVELOPMENT & DIGITAL SOLUTIONS",
      subtitle: "Building Digital Excellence",
      description: "Cutting-edge web development, mobile apps, and digital solutions that drive business growth and create engaging user experiences for the modern digital landscape.",
      heroImage: "/creative-agency-workspace.png",
      features: [
        { icon: <CodeBracketIcon className="w-8 h-8 text-white" />, title: "Web Development", description: "Custom websites and web applications built with modern technologies.", color: "bg-green-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", color: "bg-blue-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "E-commerce Solutions", description: "Complete online store development with payment integration.", color: "bg-purple-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "UI/UX Design", description: "User-centered design that enhances engagement and conversion.", color: "bg-orange-500" }
      ]
    },
    photography: {
      title: "PHOTOGRAPHY & VISUAL STORYTELLING",
      subtitle: "Capturing Moments of Beauty",
      description: "Professional photography services that tell your story through compelling visuals, from corporate headshots to artistic portraits and product photography.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Portrait Photography", description: "Professional headshots and artistic portrait sessions.", color: "bg-purple-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Product Photography", description: "High-quality product images that showcase your offerings.", color: "bg-orange-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Coverage", description: "Comprehensive photography for corporate events and celebrations.", color: "bg-blue-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Brand Photography", description: "Visual storytelling that strengthens your brand identity.", color: "bg-green-500" }
      ]
    },
    video: {
      title: "VIDEO PRODUCTION & CINEMATIC CONTENT",
      subtitle: "Bringing Stories to Life",
      description: "Professional video production services including corporate videos, promotional content, and cinematic storytelling that engages your audience and drives results.",
      heroImage: "/music-production-2.png",
      features: [
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Corporate Videos", description: "Professional corporate videos that communicate your message effectively.", color: "bg-pink-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Promotional Content", description: "Engaging promotional videos that boost your marketing campaigns.", color: "bg-cyan-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Videos", description: "Comprehensive video coverage of your important events.", color: "bg-amber-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Social Media Content", description: "Short-form videos optimized for social media platforms.", color: "bg-light-green-500" }
      ]
    },
    wedding: {
      title: "WEDDING PHOTOGRAPHY & VIDEOGRAPHY",
      subtitle: "Capturing Love Stories Forever",
      description: "Premier wedding photography and videography studio in Nagpur specializing in cinematic storytelling, candid moments, and timeless memories. From intimate ceremonies to grand celebrations, we capture every precious moment of your special day.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Wedding Photography", description: "Professional wedding photography with candid shots, traditional poses, and artistic compositions that tell your love story beautifully.", color: "bg-rose-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Cinematic Wedding Films", description: "Cinematic wedding videography with drone shots, highlight reels, and full ceremony coverage for timeless memories.", color: "bg-pink-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Pre-Wedding Shoots", description: "Romantic pre-wedding photography sessions at stunning locations in and around Nagpur with creative concepts.", color: "bg-purple-500" },
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Wedding Albums & Films", description: "Beautifully crafted wedding albums and edited films with custom music and professional post-production.", color: "bg-indigo-500" }
      ]
    },
    default: {
      title: "CONTENT CREATION & PRODUCTION STUDIO",
      subtitle: "Integrated Creative Solutions for Modern Brands",
      description: "Punk Records is an integrated solutions company specializing in content creation, production, and digital innovation. We combine creative excellence with technical expertise to deliver comprehensive solutions including video production, photography, web development, music production, graphic design, and digital marketing. From concept to execution, we transform ideas into compelling content that drives engagement and business growth.",
      heroImage: "/creative-agency-workspace.png",
      features: [
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Video Production & Content Creation", description: "Professional video production, cinematography, and content creation services for brands, businesses, and digital platforms.", color: "bg-blue-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Photography & Visual Storytelling", description: "High-quality photography services including product photography, event coverage, and creative visual content.", color: "bg-purple-500" },
        { icon: <CodeBracketIcon className="w-8 h-8 text-white" />, title: "Web Development & Digital Solutions", description: "Custom websites, web applications, and digital solutions built with modern technologies and best practices.", color: "bg-green-500" },
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Music Production & Audio Design", description: "Professional music production, sound design, audio engineering, and recording studio services.", color: "bg-orange-500" }
      ]
    }
  }

  const currentContent = serviceContent[theme] || serviceContent.default

  return (
    <>
      <Helmet>
        <title>Content Creation & Production Studio India | Integrated Creative Solutions | Punk Records</title>
        <meta
          name="description"
          content="Integrated content creation and production studio offering comprehensive creative solutions across India including video production, photography, web development, music production, graphic design, and digital marketing. Full-service creative agency delivering end-to-end content solutions for brands and businesses."
        />
        <meta
          name="keywords"
          content="content creation india, video production india, content production studio india, integrated solutions company india, creative agency india, video production company india, photography services india, web development india, music production india, graphic design india, digital marketing india, content creators india, production company india, creative studio india, video content creation india, social media content india, brand content creation india, corporate video production india, commercial photography india, product photography india, event photography india, website development india, music studio india, recording studio india, digital agency india, creative services india, content marketing india, video editing india, photo editing india, motion graphics india, animation services india, wedding photographer india, wedding photography india, shaadi photographer india, music studio india, recording studio india, music production india, web development india, website design india, digital marketing india, social media marketing india, graphic designer india, logo design india, video production india, video editing india, videographer india, mumbai, delhi, bangalore, hyderabad, chennai, pune, kolkata, ahmedabad, jaipur, punjab, haryana, rajasthan, gujarat, maharashtra, karnataka, tamil nadu, telangana, west bengal, punjab, punktech, punk records"
        />
        <meta property="og:title" content="Content Creation & Production Studio India | Punk Records Creative Studio" />
        <meta
          property="og:description"
          content="Integrated creative solutions company specializing in content creation, video production, photography, web development, music production, and digital marketing. Full-service creative agency serving clients across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://punktech.in" />
        <meta property="og:image" content="https://punktech.in/creative-studio-hero.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:creator" content="@punktechstudio" />
        <meta name="twitter:title" content="Content Creation & Production Studio India | Punk Records" />
        <meta name="twitter:description" content="Integrated creative solutions company specializing in content creation, production, and digital innovation." />
        <meta name="twitter:image" content="https://punktech.in/creative-studio-hero.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458, 79.0882" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Punk Records Creative Studio",
            "alternateName": "PunkTech",
            "url": "https://punktech.in",
            "logo": "https://punktech.in/logo.png",
            "description": "Integrated content creation and production studio offering comprehensive creative solutions across India including video production, photography, web development, music production, graphic design, and digital marketing.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-74477-76766",
              "contactType": "customer service",
              "email": "Keshav.Paliwal@punktech.in",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "sameAs": [
              "https://instagram.com/punkr.ecords",
              "https://facebook.com/punktechstudio",
              "https://linkedin.com/company/punktech"
            ],
            "priceRange": "₹₹₹"
          })}
        </script>
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://punktech.in/#localbusiness",
            "name": "Punk Records Creative Studio",
            "image": "https://punktech.in/studio-image.jpg",
            "telephone": "+91-74477-76766",
            "email": "Vansh.Rajak@punktech.in",
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "postalCode": "440001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1458,
              "longitude": 79.0882
            },
            "url": "https://punktech.in",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section with enhanced animations and particles */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(0, 2).join(' ')}
                  </Motion.span>
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="gradient-text block"
                  >
                    {currentContent.title.split(' ').slice(2, 4).join(' ')}
                  </Motion.span>
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(4).join(' ')}
                  </Motion.span>
                </Motion.h1>

                <Motion.h2
                  className="text-2xl md:text-3xl font-semibold text-avocado-green mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  {currentContent.subtitle}
                </Motion.h2>

                <Motion.p
                  className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  {currentContent.description}
                </Motion.p>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <Link to="/reveal" className="btn-primary inline-flex items-center space-x-2 group">
                    <span>EXPLORE SERVICES</span>
                    <Motion.svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </Motion.svg>
                  </Link>
                </Motion.div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Motion.img
                    src={currentContent.heroImage}
                    alt={`Punk Records Creative Studio - ${currentContent.title}`}
                    className="w-full h-auto rounded-lg shadow-2xl hover-glow"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </Motion.div>

                {/* ... existing gradient animations ... */}
                <Motion.div
                  className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-avocado-green/30 to-green-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Motion.div
                  className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-avocado-blue/30 to-blue-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Wedding Photography & Videography Section */}
        <section className="bg-gradient-to-br from-rose-500/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wedding Photography & Videography India</h1>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                India's premier wedding photography and videography studio. We specialize in capturing your love story with 
                cinematic excellence, artistic vision, and attention to every precious detail of your special day.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Wedding Photography
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Cinematic Wedding Films
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Pre-Wedding Shoots
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Engagement Photography
                </span>
                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Bridal Portraits
                </span>
                <span className="bg-fuchsia-500/20 text-fuchsia-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Destination Weddings
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services/photo-video" className="btn-primary inline-flex items-center space-x-2">
                  <span>VIEW WEDDING PORTFOLIO</span>
                  <CameraIcon className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-rose-500 text-rose-300 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center space-x-2">
                  <span>GET WEDDING QUOTE</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access to Services Section */}
        <section className="py-20 bg-avocado-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quick Access to All Services</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                Explore our specialized service divisions and find exactly what you need for your business.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceNavigation.map((service, index) => {
                const IconComponent = service.icon
                const getColorClasses = (color: string) => {
                  switch (color) {
                    case 'green':
                      return {
                        border: 'border-green-500/30 hover:border-green-400/60',
                        bg: 'bg-green-900/10',
                        iconBg: 'bg-green-600/20',
                        text: 'text-green-300',
                      }
                    case 'red':
                      return {
                        border: 'border-red-500/30 hover:border-red-400/60',
                        bg: 'bg-red-900/10',
                        iconBg: 'bg-red-600/20',
                        text: 'text-red-300',
                      }
                    case 'purple':
                      return {
                        border: 'border-purple-500/30 hover:border-purple-400/60',
                        bg: 'bg-purple-900/10',
                        iconBg: 'bg-purple-600/20',
                        text: 'text-purple-300',
                      }
                    case 'orange':
                      return {
                        border: 'border-orange-500/30 hover:border-orange-400/60',
                        bg: 'bg-orange-900/10',
                        iconBg: 'bg-orange-600/20',
                        text: 'text-orange-300',
                      }
                    case 'blue':
                      return {
                        border: 'border-blue-500/30 hover:border-blue-400/60',
                        bg: 'bg-blue-900/10',
                        iconBg: 'bg-blue-600/20',
                        text: 'text-blue-300',
                      }
                    default:
                      return {
                        border: 'border-gray-500/30 hover:border-gray-400/60',
                        bg: 'bg-gray-900/10',
                        iconBg: 'bg-gray-600/20',
                        text: 'text-gray-300',
                      }
                  }
                }
                const colors = getColorClasses(service.color)
                
                return (
                  <Motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-avocado-dark p-5 rounded-lg border ${colors.border} ${colors.bg} transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2.5 rounded-lg ${colors.iconBg} mr-3`}>
                        <IconComponent className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <Link 
                        to={service.path}
                        className={`text-lg font-bold ${colors.text} hover:underline`}
                      >
                        {service.name}
                      </Link>
                    </div>
                    <div className="space-y-1.5">
                      {service.subServices.map((subService) => (
                        <Link
                          key={subService.path}
                          to={subService.path}
                          className="block text-avocado-text hover:text-white text-xs py-1.5 px-2 rounded-md hover:bg-avocado-gray transition-colors duration-200"
                        >
                          <span className="font-medium">{subService.name}</span>
                          <span className="text-xs ml-2 opacity-75">→</span>
                        </Link>
                      ))}
                    </div>
                  </Motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comprehensive SEO Services Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Creative Services Across India</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-4xl mx-auto">
                Premier content creation studio, music production facility, web development company, and digital marketing agency serving clients across India with professional creative solutions.
              </p>
            </Motion.div>

            {/* Service Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Wedding Photography Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-rose-300"
              >
                <h3 className="text-rose-300 font-bold text-xl mb-4">Wedding Photography Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Wedding Photographer India • Shaadi Photographer</li>
                  <li>• Marriage Photographer • Vivah Photography</li>
                  <li>• Candid Wedding Photography • Pre Wedding Photoshoot</li>
                  <li>• Mehendi Photography • Haldi Photography</li>
                  <li>• Engagement Photography • Reception Photography</li>
                  <li>• Drone Wedding Photography • Cinematic Videos</li>
                  <li>• Bridal Photography • Couple Photoshoot</li>
                </ul>
              </Motion.div>

              {/* Music Production Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-orange-300"
              >
                <h3 className="text-orange-300 font-bold text-xl mb-4">Music Studio Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Music Studio India • Recording Studio</li>
                  <li>• Song Recording • Album Recording</li>
                  <li>• Bollywood Music Recording • Classical Music</li>
                  <li>• Voice Over Recording • Dubbing Studio</li>
                  <li>• Mixing Mastering • Sound Design</li>
                  <li>• Jingle Recording • Background Music</li>
                  <li>• Music Producer • Sound Engineer</li>
                </ul>
              </Motion.div>

              {/* Web Development Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-blue-300"
              >
                <h3 className="text-blue-300 font-bold text-xl mb-4">Web Development Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Web Development India • Website Design</li>
                  <li>• Ecommerce Development • Mobile App Development</li>
                  <li>• WordPress Development • Custom Websites</li>
                  <li>• React Development • PHP Development</li>
                  <li>• Online Store Development • Payment Gateway</li>
                  <li>• Business Website Design • Domain Hosting</li>
                  <li>• Website Maintenance • SSL Certificate</li>
                </ul>
              </Motion.div>

              {/* Digital Marketing Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-green-300"
              >
                <h3 className="text-green-300 font-bold text-xl mb-4">Digital Marketing Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Digital Marketing India • SEO Services</li>
                  <li>• Social Media Marketing • Google Ads</li>
                  <li>• Facebook Marketing • Instagram Marketing</li>
                  <li>• Local SEO India • Content Marketing</li>
                  <li>• YouTube Marketing • Email Marketing</li>
                  <li>• Online Reputation Management • PPC</li>
                  <li>• Restaurant Marketing • Real Estate Marketing</li>
                </ul>
              </Motion.div>

              {/* Graphic Design Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-purple-300"
              >
                <h3 className="text-purple-300 font-bold text-xl mb-4">Graphic Design Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Logo Design India • Graphic Designer</li>
                  <li>• Brand Identity Design • Business Card Design</li>
                  <li>• Brochure Design • Flyer Design</li>
                  <li>• Social Media Design • Instagram Post Design</li>
                  <li>• Website Banner Design • Poster Design</li>
                  <li>• Packaging Design • Menu Design</li>
                  <li>• Corporate Identity • Rebranding Services</li>
                </ul>
              </Motion.div>

              {/* Video Production Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-cyan-300"
              >
                <h3 className="text-cyan-300 font-bold text-xl mb-4">Video Production Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Video Production India • Corporate Videos</li>
                  <li>• Commercial Video Production • Product Videos</li>
                  <li>• Event Videography • Conference Coverage</li>
                  <li>• YouTube Video Editing • Social Media Videos</li>
                  <li>• Motion Graphics • 3D Animation</li>
                  <li>• Documentary Videos • Training Videos</li>
                  <li>• Video Post Production • Color Grading</li>
                </ul>
              </Motion.div>
            </div>

            {/* Location Coverage */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-avocado-green mb-6">Serving Clients Across India</h3>
              <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-green mb-8">
                <p className="text-avocado-text mb-4">
                  Professional creative services available across India including major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, and all other cities and regions.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Mumbai</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Delhi</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Bangalore</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Hyderabad</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Chennai</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Pune</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Kolkata</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">All Over India</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>GET FREE CONSULTATION</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-avocado-green text-avocado-green hover:bg-avocado-green hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center space-x-2">
                  <span>VIEW ALL SERVICES</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Motion } from "./animation-provider"
import { 
  Bars3Icon, 
  XMarkIcon, 
  CodeBracketIcon,
  CameraIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  MegaphoneIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline"
import Logo from "./Logo"

interface ServiceMenuItem {
  name: string
  path: string
  description: string
}

interface Service {
  id: string
  name: string
  shortName: string
  path: string
  dynamicMenu: ServiceMenuItem[]
  staticMenu: ServiceMenuItem[]
}

// Service configurations with dynamic and static menus
const SERVICES: Service[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    shortName: 'Punk Software',
    path: '/services/web-dev',
    dynamicMenu: [
      {
        name: 'Punk Software',
        path: '/services/web-dev/software',
        description: 'Custom software development solutions'
      },
      {
        name: 'Punk Webapps',
        path: '/services/web-dev/webapps',
        description: 'Progressive web applications'
      },
      {
        name: 'Punk IT Solutions',
        path: '/services/web-dev/it-solutions',
        description: 'Comprehensive IT consulting and solutions'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'photo-video',
    name: 'Photography & Videography',
    shortName: 'Punk Visual Stories',
    path: '/services/photo-video',
    dynamicMenu: [
      {
        name: 'Punk Product',
        path: '/services/photo-video/product',
        description: 'Professional product photography services'
      },
      {
        name: 'Punk Service',
        path: '/services/photo-video/service',
        description: 'Event and service photography'
      },
      {
        name: 'Punk Weddings',
        path: '/services/photo-video/weddings',
        description: 'Wedding photography and videography'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'graphics-editing',
    name: 'Graphics & Editing',
    shortName: 'Punk Creative Studio',
    path: '/services/graphics-editing',
    dynamicMenu: [
      {
        name: 'Punk Graphics',
        path: '/services/graphics-editing/graphics',
        description: 'Professional graphic design services'
      },
      {
        name: 'Punk Editings',
        path: '/services/graphics-editing/editing',
        description: 'Video and photo editing services'
      },
      {
        name: 'Punk Creation',
        path: '/services/graphics-editing/creation',
        description: '2D and 3D image creation'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'music',
    name: 'Music Production',
    shortName: 'Punk Records Studio',
    path: '/services/music',
    dynamicMenu: [
      {
        name: 'Punk Production',
        path: '/services/music/production',
        description: 'Music production and recording services'
      },
      {
        name: 'Punk Recordings',
        path: '/services/music/recordings',
        description: 'Professional recording studio services'
      },
      {
        name: 'Punk Affiliations',
        path: '/services/music/affiliations',
        description: 'Artist development and partnerships'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'social-marketing',
    name: 'Social Media Marketing',
    shortName: 'Punk Marketing Hub',
    path: '/services/social-marketing',
    dynamicMenu: [
      {
        name: 'Punk Strategies',
        path: '/services/social-marketing/strategies',
        description: 'Digital marketing strategies and planning'
      },
      {
        name: 'Punk Campaigns',
        path: '/services/social-marketing/campaigns',
        description: 'Social media and digital campaigns'
      },
      {
        name: 'Punk Surveys',
        path: '/services/social-marketing/surveys',
        description: 'Market research and customer surveys'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  }
]

// Service navigation data for dropdown
const serviceNavigationData = [
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

const ServiceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [servicesDropdownTimeout, setServicesDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(serviceNavigationData[0]?.id || null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Determine current service based on path
    const path = location.pathname
    console.log('ServiceNavbar - Current path:', path)
    
    if (path.startsWith('/services/')) {
      const service = SERVICES.find(s => path.startsWith(s.path)) || 
                     SERVICES.find(s => path.includes(s.id))
      console.log('ServiceNavbar - Found service:', service?.name || 'null')
      setCurrentService(service || null)
    } else {
      console.log('ServiceNavbar - Not a service path, setting to null')
      setCurrentService(null)
    }
  }, [location.pathname])

  // Default navigation when not in a specific service
  const defaultNavItems = [
    { name: "SERVICES", path: "/services", description: "Our Services" },
    { name: "SOLUTIONS", path: "/solutions", description: "Industry Solutions" },
    { name: "NEWSROOM", path: "/newsroom", description: "Latest News" },
    { name: "TEAM", path: "/team", description: "Our Team" },
    { name: "CONTACT", path: "/contact", description: "Get In Touch" },
    { name: "MORE", path: "/more", description: "Additional Resources" },
  ]

  // Service-specific navigation
  const getServiceNavItems = () => {
    if (!currentService) return defaultNavItems

    return [
      ...currentService.dynamicMenu.map(item => ({
        name: item.name.toUpperCase(),
        path: item.path,
        description: item.description
      })),
      ...currentService.staticMenu.map(item => ({
        name: item.name.toUpperCase(),
        path: item.path,
        description: item.description
      }))
    ]
  }

  const navItems = getServiceNavItems()
  console.log('ServiceNavbar - Navigation items:', navItems.map(item => item.name))

  // Dropdown handlers
  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimeout) {
      clearTimeout(servicesDropdownTimeout)
      setServicesDropdownTimeout(null)
    }
    setIsServicesDropdownOpen(true)
    // Set first service as default hovered
    if (!hoveredServiceId && serviceNavigationData.length > 0) {
      setHoveredServiceId(serviceNavigationData[0].id)
    }
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 200) // Small delay to allow moving to dropdown
    setServicesDropdownTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (servicesDropdownTimeout) {
      clearTimeout(servicesDropdownTimeout)
      setServicesDropdownTimeout(null)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false)
    setHoveredServiceId(serviceNavigationData[0]?.id || null)
  }

  const handleServicesClick = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  // Get color classes for service dropdown
  const getServiceColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          border: 'border-green-500/30',
          bg: 'bg-green-900/10',
          iconBg: 'bg-green-600/20',
          text: 'text-green-300',
          hover: 'hover:bg-green-800/20',
        }
      case 'red':
        return {
          border: 'border-red-500/30',
          bg: 'bg-red-900/10',
          iconBg: 'bg-red-600/20',
          text: 'text-red-300',
          hover: 'hover:bg-red-800/20',
        }
      case 'purple':
        return {
          border: 'border-purple-500/30',
          bg: 'bg-purple-900/10',
          iconBg: 'bg-purple-600/20',
          text: 'text-purple-300',
          hover: 'hover:bg-purple-800/20',
        }
      case 'orange':
        return {
          border: 'border-orange-500/30',
          bg: 'bg-orange-900/10',
          iconBg: 'bg-orange-600/20',
          text: 'text-orange-300',
          hover: 'hover:bg-orange-800/20',
        }
      case 'blue':
        return {
          border: 'border-blue-500/30',
          bg: 'bg-blue-900/10',
          iconBg: 'bg-blue-600/20',
          text: 'text-blue-300',
          hover: 'hover:bg-blue-800/20',
        }
      default:
        return {
          border: 'border-gray-500/30',
          bg: 'bg-gray-900/10',
          iconBg: 'bg-gray-600/20',
          text: 'text-gray-300',
          hover: 'hover:bg-gray-800/20',
        }
    }
  }

  // Get safe CSS variables for the current service
  const getServiceStyles = () => {
    if (!currentService) {
      return {
        navBg: scrolled ? 'bg-gray-400' : 'bg-gray-400/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-yellow-600',
        buttonBg: 'bg-gray-500',
        buttonHover: 'hover:bg-gray-600',
        activeBg: 'bg-gray-200',
        activeText: 'text-gray-900'
      }
    }
    
    // Map service IDs to safe Tailwind classes
    const serviceColorMap = {
      'web-dev': {
        navBg: scrolled ? 'bg-green-600' : 'bg-green-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-green-600',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
        activeBg: 'bg-green-100',
        activeText: 'text-green-800'
      },
      'photo-video': {
        navBg: scrolled ? 'bg-red-600' : 'bg-red-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-red-600',
        buttonBg: 'bg-red-600',
        buttonHover: 'hover:bg-red-700',
        activeBg: 'bg-red-100',
        activeText: 'text-red-800'
      },
      'graphics-editing': {
        navBg: scrolled ? 'bg-purple-600' : 'bg-purple-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-purple-600',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700',
        activeBg: 'bg-purple-100',
        activeText: 'text-purple-800'
      },
      'music': {
        navBg: scrolled ? 'bg-orange-600' : 'bg-orange-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-orange-600',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700',
        activeBg: 'bg-orange-100',
        activeText: 'text-orange-800'
      },
      'social-marketing': {
        navBg: scrolled ? 'bg-blue-600' : 'bg-blue-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-blue-600',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
        activeBg: 'bg-blue-100',
        activeText: 'text-blue-800'
      }
    }
    
    return serviceColorMap[currentService.id as keyof typeof serviceColorMap] || serviceColorMap['web-dev']
  }

  const styles = getServiceStyles()

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${styles.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="medium" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                // Special handling for SERVICES dropdown
                if (item.name === "SERVICES" && !currentService) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <div className="fixed inset-0 pointer-events-none z-[59]" style={{ display: isServicesDropdownOpen ? 'block' : 'none' }}></div>
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                          location.pathname.startsWith('/services')
                            ? `${styles.activeText} ${styles.activeBg}`
                            : `${styles.textColor} ${styles.hoverColor}`
                        }`}
                        title={item.description}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Services Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <Motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onMouseEnter={handleDropdownMouseEnter}
                            onMouseLeave={handleDropdownMouseLeave}
                            className="fixed top-16 left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-4xl bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border-2 border-cyan-500/50 z-[60] overflow-hidden pointer-events-auto"
                            style={{
                              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)'
                            }}
                          >
                            <div className="flex">
                              {/* Left Column - Service Categories */}
                              <div className="w-56 border-r-2 border-cyan-500/30 bg-black/60">
                                {serviceNavigationData.map((service, index) => {
                                  const getCyberpunkColor = (color: string) => {
                                    switch (color) {
                                      case 'green':
                                        return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-400' }
                                      case 'red':
                                        return { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-400' }
                                      case 'purple':
                                        return { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-400' }
                                      case 'orange':
                                        return { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-400' }
                                      case 'blue':
                                        return { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-400' }
                                      default:
                                        return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-400' }
                                    }
                                  }
                                  const cyberpunk = getCyberpunkColor(service.color)
                                  const isActive = hoveredServiceId === service.id
                                  
                                  return (
                                    <Motion.div
                                      key={service.id}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                      onMouseEnter={() => setHoveredServiceId(service.id)}
                                      className={`px-4 py-3 border-l-4 ${isActive ? cyberpunk.border : 'border-transparent'} ${isActive ? cyberpunk.bg : ''} transition-all duration-200 cursor-pointer group relative overflow-hidden`}
                                    >
                                      {/* Scanline effect */}
                                      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)'
                                      }}></div>
                                      
                                      <Link
                                        to={service.path}
                                        className="relative z-10 block"
                                      >
                                        <span className={`font-mono font-bold ${cyberpunk.text} text-sm transition-all duration-200 ${isActive ? 'scale-105' : ''}`}
                                          style={{
                                            textShadow: isActive ? (service.color === 'green' ? '0 0 10px rgba(34,211,238,0.8)' :
                                                       service.color === 'red' ? '0 0 10px rgba(244,114,182,0.8)' :
                                                       service.color === 'purple' ? '0 0 10px rgba(192,132,252,0.8)' :
                                                       service.color === 'orange' ? '0 0 10px rgba(250,204,21,0.8)' :
                                                       '0 0 10px rgba(96,165,250,0.8)') : 'none'
                                          }}
                                        >
                                          {service.name.toUpperCase()}
                                        </span>
                                      </Link>
                                    </Motion.div>
                                  )
                                })}
                              </div>

                              {/* Right Column - Sub-Services */}
                              <div className="flex-1 p-4 bg-black/40 min-h-[300px]">
                                {hoveredServiceId && (() => {
                                  const activeService = serviceNavigationData.find(s => s.id === hoveredServiceId)
                                  if (!activeService) return null
                                  
                                  const getCyberpunkColor = (color: string) => {
                                    switch (color) {
                                      case 'green':
                                        return { text: 'text-cyan-400', border: 'border-cyan-400/50' }
                                      case 'red':
                                        return { text: 'text-pink-400', border: 'border-pink-400/50' }
                                      case 'purple':
                                        return { text: 'text-purple-400', border: 'border-purple-400/50' }
                                      case 'orange':
                                        return { text: 'text-yellow-400', border: 'border-yellow-400/50' }
                                      case 'blue':
                                        return { text: 'text-blue-400', border: 'border-blue-400/50' }
                                      default:
                                        return { text: 'text-cyan-400', border: 'border-cyan-400/50' }
                                    }
                                  }
                                  const cyberpunk = getCyberpunkColor(activeService.color)
                                  
                                  return (
                                    <Motion.div
                                      key={activeService.id}
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      transition={{ duration: 0.2 }}
                                      className="h-full"
                                    >
                                      <h3 className={`font-mono font-bold ${cyberpunk.text} text-lg mb-4 pb-2 border-b-2 ${cyberpunk.border}`}
                                        style={{
                                          textShadow: activeService.color === 'green' ? '0 0 10px rgba(34,211,238,0.8)' :
                                                     activeService.color === 'red' ? '0 0 10px rgba(244,114,182,0.8)' :
                                                     activeService.color === 'purple' ? '0 0 10px rgba(192,132,252,0.8)' :
                                                     activeService.color === 'orange' ? '0 0 10px rgba(250,204,21,0.8)' :
                                                     '0 0 10px rgba(96,165,250,0.8)'
                                        }}
                                      >
                                        {activeService.name.toUpperCase()}
                                      </h3>
                                      <div className="space-y-2">
                                        {activeService.subServices.map((subService) => (
                                          <Link
                                            key={subService.path}
                                            to={subService.path}
                                            className="block text-gray-300 hover:text-white text-sm py-2 px-3 rounded border-l-2 border-transparent hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200 font-mono hover:pl-4"
                                            style={{
                                              textShadow: '0 0 5px rgba(255,255,255,0.3)'
                                            }}
                                          >
                                            {'>'} {subService.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </Motion.div>
                                  )
                                })()}
                              </div>
                            </div>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                
                // Regular nav items
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? `${styles.activeText} ${styles.activeBg}`
                        : `${styles.textColor} ${styles.hoverColor}`
                    }`}
                    title={item.description}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${styles.textColor} ${styles.hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95">
              {navItems.map((item) => {
                // Special handling for SERVICES dropdown on mobile
                if (item.name === "SERVICES" && !currentService) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={handleServicesClick}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          location.pathname.startsWith('/services')
                            ? `${styles.activeText} ${styles.activeBg}`
                            : `${styles.textColor} ${styles.hoverColor}`
                        }`}
                        title={item.description}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <Motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 space-y-2"
                          >
                            {serviceNavigationData.map((service) => {
                              const IconComponent = service.icon
                              const colors = getServiceColorClasses(service.color)
                              return (
                                <div key={service.id} className="space-y-1">
                                  <Link
                                    to={service.path}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setIsServicesDropdownOpen(false)
                                    }}
                                    className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700/50 transition-colors"
                                  >
                                    <div className={`p-1.5 rounded ${colors.iconBg} mr-2`}>
                                      <IconComponent className={`w-4 h-4 ${colors.text}`} />
                                    </div>
                                    <span className={`text-sm font-medium ${colors.text}`}>
                                      {service.name}
                                    </span>
                                  </Link>
                                  <div className="ml-8 space-y-1">
                                    {service.subServices.map((subService) => (
                                      <Link
                                        key={subService.path}
                                        to={subService.path}
                                        onClick={() => {
                                          setIsOpen(false)
                                          setIsServicesDropdownOpen(false)
                                        }}
                                        className="block text-gray-400 hover:text-white text-xs py-1.5 px-2 rounded-md hover:bg-gray-700/50 transition-colors"
                                      >
                                        {subService.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )
                            })}
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                
                // Regular nav items
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? `${styles.activeText} ${styles.activeBg}`
                        : `${styles.textColor} ${styles.hoverColor}`
                    }`}
                    onClick={() => setIsOpen(false)}
                    title={item.description}
                  >
                    {item.name}
                  </Link>
                )
              })}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
    </nav>
  )
}

export default ServiceNavbar


"use client"

import { Motion } from "../components/animation-provider"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ComputerDesktopIcon,
  CameraIcon,
  MusicalNoteIcon,
  MegaphoneIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  VideoCameraIcon,
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

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Punk Records Solutions - Creative Services for Every Industry</title>
        <meta
          name="description"
          content="Comprehensive creative solutions including web development, photography, videography, music production, and digital marketing for Indian businesses."
        />
        <meta
          name="keywords"
          content="web development, photography, videography, music production, social media marketing, digital marketing, creative agency, punk records, punktech, nagpur"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <Motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="gradient-text">CREATIVE SOLUTIONS</span>
                  <br />
                  FOR EVERY INDUSTRY
                </h1>
                <p className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
                  Tailored creative services designed for your specific industry needs. From startups to enterprises, we
                  provide comprehensive web development, visual content, and marketing solutions that drive results.
                </p>
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Link to="/contact" className="btn-primary">
                    EXPLORE SOLUTIONS
                  </Link>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Explore Our Services Section */}
        <section className="py-20 bg-avocado-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore Our Services</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                Discover our comprehensive range of creative services and specialized solutions tailored to your business needs.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className={`bg-avocado-dark p-6 rounded-lg border ${colors.border} ${colors.bg} transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${colors.iconBg} mr-4`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <Link 
                        to={service.path}
                        className={`text-xl font-bold ${colors.text} hover:underline`}
                      >
                        {service.name}
                      </Link>
                    </div>
                    <p className="text-avocado-text text-sm mb-4">
                      Explore our specialized {service.name.toLowerCase()} services
                    </p>
                    <div className="space-y-2">
                      {service.subServices.map((subService) => (
                        <Link
                          key={subService.path}
                          to={subService.path}
                          className="block text-avocado-text hover:text-white text-sm py-2 px-3 rounded-md hover:bg-avocado-gray transition-colors duration-200"
                        >
                          <span className="font-semibold">{subService.name}</span>
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

        {/* Industry Solutions */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industry-Specific Solutions</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                We understand that different industries have unique creative challenges. Our solutions are tailored to
                meet specific brand requirements and business objectives.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BuildingStorefrontIcon className="w-8 h-8 text-white" />}
                title="Retail & E-commerce"
                description="Complete e-commerce websites, product photography, promotional videos, and social media campaigns to boost online sales."
                color="bg-avocado-blue"
                delay={0}
              />
              <FeatureCard
                icon={<MusicalNoteIcon className="w-8 h-8 text-white" />}
                title="Entertainment & Music"
                description="Professional music production, artist websites, promotional content, and social media management for musicians and labels."
                color="bg-avocado-purple"
                delay={0.2}
              />
              <FeatureCard
                icon={<ComputerDesktopIcon className="w-8 h-8 text-white" />}
                title="Technology & Startups"
                description="Modern web applications, corporate videos, brand photography, and digital marketing strategies for tech companies."
                color="bg-avocado-orange"
                delay={0.4}
              />
              <FeatureCard
                icon={<CameraIcon className="w-8 h-8 text-white" />}
                title="Hospitality & Tourism"
                description="Stunning property photography, promotional videos, booking websites, and social media content for hotels and resorts."
                color="bg-avocado-green"
                delay={0.6}
              />
              <FeatureCard
                icon={<MegaphoneIcon className="w-8 h-8 text-white" />}
                title="Healthcare & Wellness"
                description="Professional websites, educational videos, patient testimonials, and digital marketing for healthcare providers."
                color="bg-avocado-blue"
                delay={0.8}
              />
              <FeatureCard
                icon={<ChartBarIcon className="w-8 h-8 text-white" />}
                title="Education & Training"
                description="E-learning platforms, course videos, educational content, and digital marketing for educational institutions."
                color="bg-avocado-purple"
                delay={1.0}
              />
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete Service Packages</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                See how businesses across India are using Punk Records to transform their digital presence and
                accelerate growth with our comprehensive creative solutions.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Digital Transformation Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete digital makeover including modern website, professional photography, promotional videos,
                    and social media setup.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Responsive website development</li>
                    <li>• Professional brand photography</li>
                    <li>• Promotional video production</li>
                    <li>• Social media account setup</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹1,50,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Content Creation Suite</h3>
                  <p className="text-avocado-text mb-4">
                    Monthly content creation including photography, videography, graphic design, and social media
                    management for consistent brand presence.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Monthly photo/video shoots</li>
                    <li>• Social media content creation</li>
                    <li>• Graphic design and branding</li>
                    <li>• Content calendar management</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">₹25,000/month</div>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">E-commerce Launch Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete e-commerce solution with product photography, promotional videos, website development, and
                    digital marketing strategy.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• E-commerce website development</li>
                    <li>• Product photography sessions</li>
                    <li>• Marketing video production</li>
                    <li>• Digital marketing strategy</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹2,00,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Music Production Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete music production including recording, mixing, mastering, music videos, and digital
                    distribution across platforms.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Professional recording and mixing</li>
                    <li>• Music video production</li>
                    <li>• Digital distribution setup</li>
                    <li>• Artist website and promotion</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹75,000</div>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                See how our clients have transformed their businesses with Punk Records creative solutions.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-avocado-gray p-8 rounded-lg border border-avocado-light-gray"
              >
                <div className="text-avocado-green text-4xl mb-4">"</div>
                <p className="text-avocado-text mb-6 italic leading-relaxed">
                  "Punk Records transformed our restaurant's online presence. The food photography and website design
                  increased our online orders by 300% within 3 months."
                </p>
                <div>
                  <p className="text-white font-semibold">Rajesh Sharma</p>
                  <p className="text-avocado-text text-sm">Owner, Spice Garden Restaurant, Mumbai</p>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-avocado-gray p-8 rounded-lg border border-avocado-light-gray"
              >
                <div className="text-avocado-green text-4xl mb-4">"</div>
                <p className="text-avocado-text mb-6 italic leading-relaxed">
                  "The music production quality and promotional videos helped us get signed with a major label. Their
                  creative vision is unmatched."
                </p>
                <div>
                  <p className="text-white font-semibold">Priya Mehta</p>
                  <p className="text-avocado-text text-sm">Lead Singer, Indie Band 'Echoes', Delhi</p>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss how Punk Records can elevate your business with our comprehensive creative solutions and
                digital marketing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  GET STARTED
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  VIEW PORTFOLIO
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Solutions

import { Motion } from '../../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import MSMEStartupBanner from '../../components/MSMEStartupBanner'
import { 
  CameraIcon, 
  VideoCameraIcon, 
  PhotoIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const PhotoVideo = () => {
  const features = [
    {
      icon: CameraIcon,
      title: "Professional Photography",
      description: "High-quality photography services with state-of-the-art equipment and creative vision.",
      color: "text-red-400"
    },
    {
      icon: VideoCameraIcon,
      title: "Cinematography",
      description: "Professional video production and cinematography for all types of content.",
      color: "text-red-500"
    },
    {
      icon: PhotoIcon,
      title: "Creative Direction",
      description: "Expert creative direction to bring your vision to life through visual storytelling.",
      color: "text-red-600"
    }
  ]

  const services = [
    {
      name: "Wedding Photography & Videography",
      description: "Premier wedding photography and cinematic videography services across India",
      features: ["Candid Wedding Photography", "Traditional Wedding Photography", "Cinematic Wedding Films", "Drone Wedding Coverage", "Wedding Highlights Video", "Same Day Editing"]
    },
    {
      name: "Pre-Wedding & Engagement Shoots",
      description: "Romantic pre-wedding photography and engagement sessions at beautiful Nagpur locations",
      features: ["Pre-Wedding Photography", "Engagement Photography", "Couple Portraits", "Save the Date Photos", "Location Scouting", "Creative Concepts"]
    },
    {
      name: "Bridal & Special Occasions",
      description: "Bridal portraits, mehendi, sangam, and reception photography services",
      features: ["Bridal Portraits", "Mehendi Photography", "Sangam Photography", "Reception Coverage", "Ring Ceremony", "Haldi Photography"]
    }
  ]

  const weddingStyles = [
    "Candid", "Traditional", "Cinematic", "Artistic", "Documentary", "Photojournalistic", "Fine Art", "Contemporary", "Classic", "Destination"
  ]

  return (
    <>
      <Helmet>
        <title>Wedding Photography & Videography India | Best Wedding Photographers | Punk Records</title>
        <meta 
          name="description" 
          content="Premier wedding photography & videography services across India. Cinematic wedding films, pre-wedding shoots, engagement photography, and destination wedding coverage. Book India's top wedding photographers." 
        />
        <meta 
          name="keywords" 
          content="wedding photographer india, wedding photography india, shaadi photographer india, marriage photographer india, wedding videographer india, wedding videography india, best wedding photographer india, candid wedding photographer india, pre wedding photographer india, destination wedding photographer india, wedding photography mumbai, wedding photography delhi, wedding photography bangalore, wedding photography hyderabad, wedding photography chennai, wedding photography pune, wedding photography kolkata, wedding photography ahmedabad, wedding photography jaipur, candid wedding photography india, traditional wedding photography india, cinematic wedding videography india, documentary wedding photography india, photojournalistic wedding photography india, artistic wedding photography india, vintage wedding photography india, contemporary wedding photography india, pre wedding photoshoot india, couple photoshoot india, drone wedding photography india, 4k wedding videography india, same day edit wedding video india, wedding highlight video india, wedding album design india, wedding photo editing india, wedding video editing india, outdoor wedding photographer india, destination wedding photographer india, palace wedding photographer india, garden wedding photographer india, beach wedding photographer goa, hill station wedding photographer, resort wedding photographer india, affordable wedding photographer india, budget wedding photography india, wedding photography packages india, wedding photography price india, punktech wedding, punk records wedding photography"
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best Wedding Photography & Videography in India | Punk Records Creative Studio" />
        <meta property="og:description" content="Capture your dream wedding with India's premier wedding photography & videography studio. Cinematic storytelling meets artistic excellence." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://punktech.in/services/photo-video" />
        <meta property="og:image" content="https://punktech.in/wedding-portfolio-hero.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:title" content="Wedding Photography & Videography India | Punk Records" />
        <meta name="twitter:description" content="Premier wedding photography and videography services across India. Cinematic wedding films and artistic photography." />
        <meta name="twitter:image" content="https://punktech.in/wedding-portfolio-hero.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://punktech.in/services/photo-video" />
        
        {/* Structured Data for Wedding Photography Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wedding Photography & Videography Services India",
            "description": "Professional wedding photography and videography services across India including pre-wedding shoots, engagement photography, bridal portraits, and cinematic wedding films.",
            "provider": {
              "@type": "Organization",
              "name": "Punk Records Creative Studio",
              "url": "https://punktech.in",
              "logo": "https://punktech.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "@region": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-74477-76766",
              "email": "Keshav.Paliwal@punktech.in"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Wedding Photography",
            "category": "Photography Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wedding Photography Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Wedding Photography Package",
                    "description": "Full day wedding photography with multiple photographers"
                  },
                  "price": "75000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Premium Wedding Photography & Videography",
                    "description": "Complete wedding coverage with photography, videography, and pre-wedding shoot"
                  },
                  "price": "125000",
                  "priceCurrency": "INR"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Punk Records Wedding Photography Studio",
            "image": "https://punktech.in/studio-wedding-setup.jpg",
            "telephone": "+91-74477-76766",
            "email": "Vansh.Rajak@punktech.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1458,
              "longitude": 79.0882
            },
            "url": "https://punktech.in/services/photo-video",
            "priceRange": "₹₹₹",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://instagram.com/punkr.ecords",
              "https://facebook.com/punktechstudio"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-red-900/80 via-red-800/60 to-red-900/80 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
                <CameraIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent">
                Wedding Photography & Videography India
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                India's premier wedding photography studio capturing your love story with cinematic excellence and artistic vision
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {weddingStyles.map((style) => (
                <span
                  key={style}
                  className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium"
                >
                  {style}
                </span>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Wedding Photography & Videography Services
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Comprehensive wedding photography and videography services covering every aspect of your special day, available across India
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    {service.name}
                  </h3>
                  <p className="text-red-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-red-200">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20 px-4 bg-red-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Why Choose Punk Visual Stories?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                We combine technical expertise with artistic vision to create visuals that inspire and engage
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-2xl mb-6 group-hover:bg-red-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-red-300">
                    {feature.title}
                  </h3>
                  <p className="text-red-100 leading-relaxed">
                    {feature.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Professional Equipment
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                State-of-the-art gear to ensure your photos and videos look their absolute best
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Canon EOS R5", desc: "4K video & 45MP photos" },
                { name: "Sony FX3", desc: "Cinema-grade video camera" },
                { name: "DJI RS 3 Pro", desc: "Professional gimbal" },
                { name: "Profoto B10", desc: "Studio lighting system" }
              ].map((equipment, index) => (
                <Motion.div
                  key={equipment.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-red-300">
                    {equipment.name}
                  </h3>
                  <p className="text-red-200 text-sm">
                    {equipment.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Testimonials Section */}
        <section className="relative z-10 py-20 px-4 bg-red-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                What Our Wedding Couples Say
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Real stories from couples who trusted us to capture their special day
              </p>
            </Motion.div>

            <div className="max-w-4xl mx-auto mb-12">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-red-100 text-lg mb-8 leading-relaxed text-center">
                  "Punk Records captured our wedding day perfectly! Every emotion, every precious moment was beautifully documented. 
                  Their team was professional, creative, and made us feel so comfortable throughout our special day."
                </p>
              </Motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <p className="text-red-300 font-semibold mb-2 text-sm">WEDDING TESTIMONIAL:</p>
                  <blockquote className="text-white text-base italic mb-4 leading-relaxed">
                    "The pre-wedding shoot was absolutely magical! They found the most beautiful locations in Nagpur 
                    and captured our love story in the most artistic way. Our wedding film still gives us goosebumps!"
                  </blockquote>
                  <p className="text-red-300 font-semibold text-sm">
                    PRIYA & ARJUN SHARMA • MARRIED DECEMBER 2023
                  </p>
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                >
                  <p className="text-red-300 font-semibold mb-2 text-sm">COUPLE REVIEW:</p>
                  <blockquote className="text-white text-base italic mb-4 leading-relaxed">
                    "From our engagement shoot to the wedding day, Punk Records exceeded all expectations. 
                    The cinematic quality of our wedding film is beyond amazing. Highly recommended!"
                  </blockquote>
                  <p className="text-red-300 font-semibold text-sm">
                    SNEHA & RAHUL JOSHI • MARRIED FEBRUARY 2024
                  </p>
                </Motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Pricing Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Wedding Photography & Videography Packages
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Choose the perfect package for your special day. All packages include professional editing and online gallery access.
              </p>
            </Motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-red-800/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30"
              >
                <h3 className="text-red-300 text-xl font-bold mb-4">Essential Wedding Package</h3>
                <p className="text-3xl font-bold text-white mb-2">₹75,000</p>
                <p className="text-red-200 mb-6 text-sm">Complete Coverage</p>
                <ul className="text-red-100 text-left space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>6 Hours Wedding Photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>300+ Edited Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Online Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Basic Wedding Highlights Video</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>2 Photographers</span>
                  </li>
                </ul>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-800/20 backdrop-blur-sm rounded-xl p-8 border-2 border-red-500 relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                </div>
                <h3 className="text-red-300 text-xl font-bold mb-4 mt-4">Premium Wedding Package</h3>
                <p className="text-3xl font-bold text-white mb-2">₹1,25,000</p>
                <p className="text-red-200 mb-6 text-sm">Full Day Coverage</p>
                <ul className="text-red-100 text-left space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>10 Hours Wedding Photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>500+ Edited Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Cinematic Wedding Film</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Pre-Wedding Shoot (4 Hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>3 Photographers + Videographer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Premium Album (50 Pages)</span>
                  </li>
                </ul>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-red-800/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30"
              >
                <h3 className="text-red-300 text-xl font-bold mb-4">Luxury Wedding Package</h3>
                <p className="text-3xl font-bold text-white mb-2">₹2,00,000</p>
                <p className="text-red-200 mb-6 text-sm">Multi-Day Coverage</p>
                <ul className="text-red-100 text-left space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>3 Days Wedding Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>800+ Edited Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Feature-Length Wedding Film</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Pre-Wedding + Engagement Shoot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>4 Photographers + 2 Videographers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Luxury Album + USB Drive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Drone Coverage</span>
                  </li>
                </ul>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-300">
                Ready to Capture Your Story?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Let's discuss your project and create visuals that tell your story perfectly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <CameraIcon className="w-5 h-5" />
                  <span>Book a Session</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-300 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <SparklesIcon className="w-5 h-5" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* MSME & Startup Support Section */}
        <MSMEStartupBanner variant="service-specific" service="photo-video" />
      </div>
    </>
  )
}

export default PhotoVideo

import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive event planning and styling for every occasion
          </p>
        </div>
      </div>

      {/* Private Events Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image Section */}
          <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[600px] bg-gradient-to-br from-primary-500 via-purple-600 to-pink-500">
              <div className="absolute inset-0 flex items-center">
                <div className="absolute left-12 md:left-20 z-10 text-white max-w-md">
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    Personalized Private Celebrations
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8">
                    Every detail tailored to your vision, creating memories that last a lifetime
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Plan Your Celebration
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Private Events Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Private Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personal celebrations crafted with care, attention to detail, and creativity
            </p>
          </div>

          {/* Private Events Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Birthday Celebrations',
                description: 'From milestone birthdays to intimate gatherings, we create personalized celebrations',
                icon: '🎂',
              },
              {
                title: "Children's Parties",
                description: 'Magical themed parties that kids will remember forever',
                icon: '🎉',
              },
              {
                title: 'Garden Parties',
                description: 'Elegant outdoor celebrations with beautiful décor and styling',
                icon: '🌺',
              },
              {
                title: 'Baby Showers',
                description: 'Sweet celebrations for mothers-to-be with charming details',
                icon: '🎁',
              },
              {
                title: "Ladies' Lunches",
                description: 'Sophisticated gatherings with elegant table settings',
                icon: '✨',
              },
              {
                title: 'Christmas Parties',
                description: 'Festive celebrations with seasonal décor and warmth',
                icon: '🎄',
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-center">{event.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {event.description}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Events Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Corporate Events
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Professional event planning and execution for businesses of all sizes. From intimate team gatherings to large-scale corporate celebrations, we deliver events that reflect your brand excellence.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Corporate Party Planning',
                    description: 'Professional events that reflect your company culture and values',
                  },
                  {
                    title: 'Team Building Events',
                    description: 'Engaging activities and experiences that strengthen team bonds',
                  },
                  {
                    title: 'Awards Ceremonies',
                    description: 'Prestigious events celebrating achievement and excellence',
                  },
                  {
                    title: 'Product Launches',
                    description: 'Impressive showcases that make your brand shine',
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url('/IMG-20251126-WA0039.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Light overlay to keep text readable if we add it later */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proposal & Engagement Planning Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url('/IMG-20251126-WA0021.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Light overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <svg className="w-20 h-20 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Proposal & Engagement Planning
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create the perfect moment for your proposal with our bespoke planning services. We design romantic setups that capture the magic of your love story.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Romantic venue arrangements',
                  'Beautiful floral and candlelight setups',
                  'Photography and videography coordination',
                  'Personalized touches and surprises',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Plan Your Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event Styling & Décor Section */}
      <div className="py-24 bg-gradient-to-r from-primary-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Event Styling & Décor
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Transform any space into a stunning venue with our expert styling services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Seasonal Styling',
                description: 'Beautiful décor that captures the essence of each season',
              },
              {
                title: 'Themed Decorations',
                description: 'Creative themes brought to life with stunning details',
              },
              {
                title: 'Table Styling',
                description: 'Elegant table settings that wow your guests',
              },
              {
                title: 'Premium Aesthetics',
                description: 'Luxury touches that elevate every element',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

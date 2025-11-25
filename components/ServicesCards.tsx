import Link from 'next/link'

export default function ServicesCards() {
  const services = [
    {
      title: 'Private Events',
      description: 'Birthdays, anniversaries, and intimate celebrations crafted to perfection.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      imageBg: 'bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200',
      imageEmoji: '🎂',
    },
    {
      title: 'Corporate Events',
      description: 'Professional event planning for team building, awards, and product launches.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      imageBg: 'bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200',
      imageEmoji: '💼',
    },
    {
      title: 'Proposals & Engagements',
      description: 'Romantic setups and bespoke proposal planning for your special moment.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      imageBg: 'bg-gradient-to-br from-pink-200 via-purple-300 to-rose-200',
      imageEmoji: '💕',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            From intimate gatherings to grand celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className={`relative h-64 ${service.imageBg} flex items-center justify-center`}>
                <div className="text-8xl opacity-80">{service.imageEmoji}</div>
                {/* Icon overlay at bottom-left */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-600">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


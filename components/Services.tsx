// Icon components with purple theme
const WeddingIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" opacity="0.3" />
  </svg>
)

const CorporateIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-9 18h9" />
  </svg>
)

const PartyIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

const CateringIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" opacity="0.3" />
  </svg>
)

const PlanningIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12V12zm0 3h.008v.008H12V15zm0 3h.008v.008H12V18zm-3-6h.008v.008H9V12zm0 3h.008v.008H9V15zm0 3h.008v.008H9V18zm-3-6h.008v.008H6V12zm0 3h.008v.008H6V15zm0 3h.008v.008H6V18z" />
  </svg>
)

const AudioVisualIcon = () => (
  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.343 6.343l-1.414 1.414M18.364 18.364l-1.414 1.414M12 2.25v4.5m-7.5 0h15M12 17.25v4.5m-7.5 0h15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
)

export default function Services() {
  const services = [
    {
      title: 'Weddings',
      description:
        'Transform your dream wedding into reality with our elegant venue, expert planning, and attention to every romantic detail.',
      icon: <WeddingIcon />,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Corporate Events',
      description:
        'Professional spaces designed for success. Perfect for conferences, meetings, product launches, and corporate celebrations.',
      icon: <CorporateIcon />,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Private Parties',
      description:
        "Celebrate life's special moments in style. From milestone birthdays to anniversary celebrations, we make every occasion memorable.",
      icon: <PartyIcon />,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Catering Services',
      description:
        'Exquisite culinary experiences crafted by our award-winning chefs. Custom menus tailored to your taste and dietary preferences.',
      icon: <CateringIcon />,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Event Planning',
      description:
        'Full-service event planning from concept to execution. Our experienced team ensures every detail is perfect, so you can enjoy the moment.',
      icon: <PlanningIcon />,
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Audio/Visual',
      description:
        'State-of-the-art sound systems, lighting, and visual technology. Create immersive experiences that captivate your guests.',
      icon: <AudioVisualIcon />,
      gradient: 'from-violet-500 to-purple-600',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to your vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300 shadow-md group-hover:shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-primary-600 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

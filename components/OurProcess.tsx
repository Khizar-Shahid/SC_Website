export default function OurProcess() {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'We understand your vision, needs, and budget to create the perfect plan',
      color: 'bg-primary-600',
    },
    {
      number: 2,
      title: 'Planning & Design',
      description: 'Theme, décor, styling, and vendor coordination - we handle everything',
      color: 'bg-orange-500',
    },
    {
      number: 3,
      title: 'Event Day',
      description: 'Relax and enjoy while we execute flawlessly on your special day',
      color: 'bg-orange-500',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-800 mb-4">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Simple, transparent, and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Number Circle */}
              <div className={`${step.color} w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-800 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


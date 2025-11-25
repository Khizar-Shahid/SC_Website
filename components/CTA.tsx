import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Ready to Create Your Event?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's transform your vision into an unforgettable experience
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


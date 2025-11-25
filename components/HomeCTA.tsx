import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
          Ready to Create Something Extraordinary?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Let us bring your dream event to life with elegance and sophistication.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-800 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}


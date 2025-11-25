import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between min-h-screen py-16 md:py-20">
        {/* Top Section - Logo */}
        <div className="text-center text-white pt-4 mb-8 md:mb-10">
          <div className="flex flex-col items-center">
            <p className="text-base md:text-lg lg:text-xl uppercase tracking-widest text-white font-medium">
              SUTHERLAND CLUB VENUE
            </p>
          </div>
        </div>

        {/* Middle Section - Quote and Description */}
        <div className="text-center text-white space-y-4 md:space-y-5 flex-1 flex flex-col justify-center">
          {/* Quote Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-primary-600 rounded-lg">
              <p className="text-base md:text-lg font-medium">
                We May not have it all together,
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold uppercase leading-tight">
              BUT TOGETHER
              <br />
              WE HAVE IT ALL
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Experience an atmosphere of elegance and artistry where every event is crafted to perfection.
          </p>
        </div>

        {/* Bottom Section - Buttons */}
        <div className="text-center text-white pb-6 md:pb-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/50"
            >
              Book Your Event
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of excellence in event hosting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Creating Unforgettable
              <br />
              <span className="text-primary-600">Experiences</span>
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Sutherland Club Venue stands as a beacon of sophistication and elegance in the world of event hosting. 
                For over a decade, we have been the premier destination for those who demand nothing but the extraordinary.
              </p>
              <p>
                Our meticulously designed venue seamlessly blends timeless architectural beauty with cutting-edge amenities, 
                creating the perfect canvas for your most important moments. From intimate wedding ceremonies to grand 
                corporate galas, every detail is crafted with precision and passion.
              </p>
              <p>
                What sets us apart is our unwavering commitment to excellence. Our dedicated team of event specialists 
                works tirelessly to ensure that every aspect of your celebration exceeds expectations, leaving you free 
                to savor every moment.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-5xl font-serif font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Events Hosted</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: "url('/IMG-20251126-WA0033.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Subtle overlay for readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Passion */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                Passion
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We're passionate about creating memorable experiences that exceed expectations
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                Excellence
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Premium quality in every detail, from planning to execution
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a46.65 46.65 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.998 1.549m0 0a6.772 6.772 0 01-3.998-1.549M6.75 21H3v-1.5M6.75 21v-1.5m0 1.5H9m-2.25-1.5H3m9 0h.75" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                Experience
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Years of expertise delivering flawless events across all occasions
              </p>
            </div>

            {/* Client-Focused */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                Client-Focused
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Your vision is our mission - we listen, understand, and deliver
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Sutherland Club Section */}
        <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Sutherland Club?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    Premium Suppliers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work exclusively with the finest vendors and suppliers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    Transparent Communication
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clear updates and open dialogue throughout the planning process
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    Attention to Detail
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every element is carefully curated and executed to perfection
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    Stress-Free Planning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle everything so you can focus on enjoying the journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

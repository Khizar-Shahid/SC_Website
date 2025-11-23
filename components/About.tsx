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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Creating Unforgettable
              <br />
              <span className="text-primary-600">Experiences</span>
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Sutherland Event Studio stands as a beacon of sophistication and elegance in the world of event hosting. 
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
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">✨</div>
                  <p className="text-xl font-serif">Elegant Venue</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      event: 'Wedding',
      text: 'Sutherland Event Studio made our wedding day absolutely perfect. The venue was stunning, and the staff went above and beyond to ensure everything ran smoothly. Our guests are still talking about how beautiful everything was!',
      rating: 5,
      image: '👰',
    },
    {
      name: 'TechCorp Inc.',
      event: 'Corporate Event',
      text: 'We hosted our annual conference here and were impressed by the professional service and state-of-the-art facilities. The team handled every detail flawlessly. Highly recommended!',
      rating: 5,
      image: '💼',
    },
    {
      name: 'Emily Rodriguez',
      event: 'Birthday Celebration',
      text: 'The most beautiful venue for my 30th birthday! The team helped us create an unforgettable celebration that our guests are still talking about. Every detail was perfect.',
      rating: 5,
      image: '🎂',
    },
    {
      name: 'David & Lisa Chen',
      event: 'Anniversary',
      text: 'Our 25th anniversary celebration was magical. The elegant setting and impeccable service created memories we will cherish forever. Thank you for making it so special!',
      rating: 5,
      image: '💑',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                index === currentIndex ? 'scale-105 border-2 border-primary-600' : 'hover:-translate-y-2'
              }`}
            >
              <div className="text-5xl mb-4 text-center">{testimonial.image}</div>
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic text-center">
                "{testimonial.text}"
              </p>
              <div className="text-center border-t border-gray-200 pt-4">
                <div className="font-serif font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary-600 font-medium mt-1">{testimonial.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


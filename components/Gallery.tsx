'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery images with different aspect ratios for masonry effect
  const images = [
    { id: 1, aspect: 'aspect-square', alt: 'Elegant wedding ceremony' },
    { id: 2, aspect: 'aspect-[4/3]', alt: 'Corporate event setup' },
    { id: 3, aspect: 'aspect-square', alt: 'Beautiful reception hall' },
    { id: 4, aspect: 'aspect-[3/4]', alt: 'Private party celebration' },
    { id: 5, aspect: 'aspect-square', alt: 'Elegant dining area' },
    { id: 6, aspect: 'aspect-[4/3]', alt: 'Wedding reception' },
    { id: 7, aspect: 'aspect-square', alt: 'Event decoration' },
    { id: 8, aspect: 'aspect-[3/4]', alt: 'Corporate conference' },
    { id: 9, aspect: 'aspect-square', alt: 'Special celebration' },
  ]

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into the magic we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className={`relative ${image.aspect} overflow-hidden rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-600 to-pink-500 flex items-center justify-center">
                <span className="text-white text-6xl opacity-80">📷</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-xl font-semibold mb-2">{image.alt}</p>
                  <p className="text-sm text-gray-200">View Details →</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 z-10 transition-colors w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
              >
                ×
              </button>
              <div className="w-full aspect-video bg-gradient-to-br from-primary-500 via-purple-600 to-pink-500 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-9xl mb-4">📷</div>
                  <p className="text-2xl font-serif">{images.find(img => img.id === selectedImage)?.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

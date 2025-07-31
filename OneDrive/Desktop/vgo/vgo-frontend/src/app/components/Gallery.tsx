'use client';
import Image from 'next/image';

export default function Gallery() {
  const galleryImages = [
    '/gallery/gallery1.jpg',
    '/gallery/gallery2.png',
    '/gallery/gallery3.jpeg',
    '/gallery/gallery4.jpg',
    '/gallery/gallery5.png',
    '/gallery/gallery6.jpg',
    '/gallery/gallery7.jpg', 
    '/gallery/gallery8.jpeg',
    '/gallery/gallery9.jpeg',
    '/gallery/gallery10.jpeg',
    '/gallery/gallery11.jpg',
    '/gallery/gallery12.png',
  ];

  // Duplicate images to create seamless looping
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="px-4 py-12 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide mb-8 md:mb-12 bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text animate-pulse">
        Pick Up the Pace with VGO
      </h2>

      {/* Mobile Animated Row */}
      <div className="md:hidden relative h-48 overflow-hidden">
        <div className="absolute top-0 left-0 flex w-max animate-scroll-mobile">
          {duplicatedImages.map((src, index) => (
            <div
              key={`mobile-${index}`}
              className="relative w-64 h-48 flex-shrink-0 px-2" // Added px-2 for spacing
            >
              <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Animated Rows */}
      <div className="hidden md:block space-y-6">
        {/* Row 1 - Left to Right */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-0 left-0 flex w-max animate-scroll-left">
            {duplicatedImages.map((src, index) => (
              <div 
                key={`row1-${index}`}
                className="relative w-64 h-48 flex-shrink-0 px-2" // Added px-2 for spacing
              >
                <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-0 right-0 flex w-max animate-scroll-right">
            {duplicatedImages.map((src, index) => (
              <div 
                key={`row2-${index}`}
                className="relative w-64 h-48 flex-shrink-0 px-2" // Added px-2 for spacing
              >
                <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
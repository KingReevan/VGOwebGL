'use client';
import Image from 'next/image';


export default function Gallery() {
  const topRowImages = [
    '/gallery/gallery1.jpg',
    '/gallery/gallery2.png',
    '/gallery/gallery3.jpeg',
    '/gallery/gallery4.jpg',
    '/gallery/gallery5.png',
    '/gallery/gallery6.jpg',
  ];

  const bottomRowImages = [
    '/gallery/gallery7.jpg',
    '/gallery/gallery8.jpeg',
    '/gallery/gallery9.jpeg',
    '/gallery/gallery10.jpeg',
    '/gallery/gallery11.jpg',
    '/gallery/gallery12.png',
  ];

  const duplicatedTop = [...topRowImages, ...topRowImages];
  const duplicatedBottom = [...bottomRowImages, ...bottomRowImages];

  return (
    <section className="py-12 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide mb-8 md:mb-12 bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text animate-pulse">
        Pick Up the Pace with VGO
      </h2>

      {/* Mobile */}
      <div className="md:hidden relative h-48 overflow-hidden">
        <div className="absolute top-0 left-0 flex animate-scroll">
          {duplicatedTop.map((src, index) => (
            <div key={`mobile-${index}`} className="relative w-64 h-48 flex-shrink-0 px-2">
              <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block space-y-6">
        {/* Top row: left to right */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-0 left-0 flex animate-scroll">
            {duplicatedTop.map((src, index) => (
              <div key={`row1-${index}`} className="relative w-64 h-48 flex-shrink-0 px-2">
                <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: right to left (achieved by reverse animation) */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-0 left-0 flex animate-scroll-reverse">
            {duplicatedBottom.map((src, index) => (
              <div key={`row2-${index}`} className="relative w-64 h-48 flex-shrink-0 px-2">
                <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
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
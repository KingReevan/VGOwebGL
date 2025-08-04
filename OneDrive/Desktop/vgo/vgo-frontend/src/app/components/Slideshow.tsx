'use client';

import { useState } from "react";
import { Button } from "@/app/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Friday Night Racing League",
    date: "Every Friday at 8 PM",
    description: "Compete against other racers for prizes and bragging rights!",
    image: "/gallery/gallery1.jpg",
  },
  {
    title: "Kids Racing Camp",
    date: "Starting July 15th",
    description: "A 2-week program to teach kids racing fundamentals and safety.",
    image: "/gallery/gallery2.png",
  },
  { 
    title: "Pro Drift Weekend",
    date: "August 10–12",
    description: "Watch the pros drift and learn advanced techniques.",
    image: "/gallery/gallery3.jpeg",
  },
  {
    title: "VGO grand prix",
    date: "Every Friday at 8 PM",
    description: "Buckle up for the VGO grand prix!",
    image: "/gallery/gallery4.jpg",
  },
  {
    title: "Speed Test",
    date: "Starting July 15th",
    description: "Measure your laps against others!",
    image: "/gallery/gallery5.png",
  },
  { 
    title: "Kart Building",
    date: "August 10–12",
    description: "Build your own go-kart!",
    image: "/gallery/gallery6.jpg",
  },
];

export default function UpcomingEvents() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-12 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-12">Upcoming Events</h2>
      
      <div className="relative w-full max-w-6xl mx-auto h-[500px]">
        {/* Stacked Events */}
        {events.map((event, index) => {
          const position = (index - current + events.length) % events.length;
          const zIndex = 30 - position * 10;
          const translateY = position * 20;
          const scale = 1 - position * 0.05;
          const opacity = position === 0 ? 1 : 0.7 - position * 0.2;
          
          return (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out transform rounded-xl overflow-hidden
                ${position === 0 ? 'cursor-pointer' : 'pointer-events-none'}`}
              style={{
                zIndex,
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                boxShadow: position === 0 ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="relative h-full w-full group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300">
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      translate: position === 0 ? 'none' : '0 20px',
                      opacity: position === 0 ? 1 : 0.7
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.date}</p>
                    <p className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                      {event.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black cursor-pointer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-45 p-3 rounded-full bg-white/85 border shadow-md hover:bg-white text-black transition-all cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-45 p-3 rounded-full bg-white/85 border shadow-md hover:bg-white text-black transition-all cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
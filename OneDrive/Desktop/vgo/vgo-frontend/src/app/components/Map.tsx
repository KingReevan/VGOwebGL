'use client'
import React from 'react'


const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const location = "Vanora Robots, Mangalore";
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location)}`;

export default function Map(){
    return(
        <section className="space-y-6">
          <h2 className="text-4xl font-extrabold text-center">Find Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 grid-flow-row-dense">
            <div className="col-span-2">
              <div className="w-full h-[280px] md:h-[300px] overflow-hidden border-y shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
                <iframe
                  className="w-full h-full"
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-5 text-center py-6 px-8 bg-gradient-to-r from-red-700 via-rose-950 to-red-700 border-y shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl">Address</h3>
                <p className="text-primary">Bharat Mall, Lalbagh</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl">Phone</h3>
                <p className="text-primary">+91 70222 54378</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl">Email</h3>
                <p className="text-primary">info@vgoracing.com</p>
              </div>
            </div>
          </div>
          
        </section>
    );
}
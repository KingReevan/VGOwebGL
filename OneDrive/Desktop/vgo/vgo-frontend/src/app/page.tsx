
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './components/icons';
import Leaderboard from "./components/Leaderboard";
import WhatsAppButton from "./components/WhatsAppButton";

import UpcomingEvents from "./components/Slideshow";
import { Partnerships } from "./components/Partnerships";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const location = "Vanora Robots, Mangalore";
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location)}`;

console.log("API KEY:", GOOGLE_MAPS_API_KEY);
console.log("Map URL:", mapUrl);

const leaderboardData = [
  { position: 1, name: "Rahul Sharma", pfp: "/racers/pfp1.png", score: 42 },
  { position: 2, name: "Priya Patel", pfp: "/racers/pfp2.png", score: 38 },
  { position: 3, name: "Arjun Kapoor", pfp: "/racers/pfp3.png", score: 35 },
  { position: 4, name: "Neha Gupta", pfp: "/racers/pfp4.png", score: 32 },
  { position: 5, name: "Vikram Singh", pfp: "/racers/pfp5.png", score: 28 }
];

export default function Home() {
  return (
    
    <div className="min-h-screen selection:bg-red-500 bg-gray-900 text-primary">

      <main className="space-y-24">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center space-y-6 min-h-[92vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        >
          {/* Optional: dark overlay */}
          
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-0" />
          
          {/* Hero Content */}
          <div className="relative z-10 px-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-primary">
              Experience the Thrill of VGO Racing
            </h1>
            <p className="text-lg max-w-3xl mt-4 text-primary mx-auto">
              Book your next go-karting adventure now and feel the adrenaline rush like never before!
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button asChild variant="outline" size="lg" className="transform transition-transform duration-300 hover:scale-110">
                <Link href="/book" className="text-black w-36 h-12 flex items-center justify-center transition-all duration-300">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>


        {/* Car & Track Details */}
        <section className="space-y-12">
          
          {/* Go-Kart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5">
            <div className="order-2 lg:order-1 space-y-6 pl-25">
              <h3 className="text-4xl font-extrabold text-primary">State-of-the-Art Electric Go-Karts</h3>
              <ul className="space-y-4 text-2xl">
                <li className="flex items-start gap-3">
                  <LightningBoltIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>4000W electric motors with instant torque delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <GaugeIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Adjustable speed settings (20-60 km/h) for all skill levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Roll cages and 5-point harnesses for maximum safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <PersonIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Adjustable seats to accommodate drivers from 140cm to 195cm</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image 
                src="/hero-bg.jpeg" 
                alt="High-performance electric go-kart"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Track Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 px-5 justify-evenly">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image 
                src="/bigTrack.jpg" 
                alt="Championship-level go-kart track"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 pl-25">
              <h3 className="text-4xl font-extrabold text-primary">Championship-Level Track</h3>
              <ul className="space-y-4 text-primary text-2xl">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>500 meter professionally designed circuit</span>
                </li>
                <li className="flex items-start gap-3">
                  <LoopIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>12 challenging turns with elevation changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <TimerIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional timing system with lap analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <SafetyIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>FIA-approved safety barriers and runoff areas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timings */}
        <section className="py-8 border-y-3 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
          <div className="container">
            <h2 className="text-4xl font-extrabold text-center mb-6">Operating Hours</h2>
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <h3 className="text-xl font-medium text-primary">Weekdays</h3>
                <p className="text-lg">12:00 PM – 10:00 PM</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-primary">Weekends</h3>
                <p className="text-lg">10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-8 py-12">
          <h2 className="text-4xl font-extrabold text-center">Pricing Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl px-4 sm:px-10 mx-auto">
            {/* Basic Package */}
            <Link href="/book" className="border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer h-full hover:scale-100 sm:hover:scale-105">
              <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
                <h3 className="text-primary font-bold text-xl">10 Laps</h3>
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-[250px] bg-gradient-to-tr from-red-500 to-60%">
                <div className="text-center space-y-4 mb-6">
                  <p className="text-4xl font-bold">₹700</p>
                  <p className="text-primary mt-17">Perfect for beginners</p>
                </div>
              </div>
            </Link>

            {/* Popular Package */}
            <Link href="/book" className="border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer h-full relative hover:scale-100 sm:hover:scale-105">
              <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl text-blue-50 border-l border-b">
                POPULAR
              </div>
              <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
                <h3 className="text-primary font-bold text-xl">20 Laps</h3>
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-[250px] bg-gradient-to-tr from-red-500 to-60%">
                <div className="text-center space-y-4 mb-6">
                  <div>
                    <p className="text-4xl font-bold">₹1200</p>
                    <p className="text-sm text-green-600">Save ₹200</p>
                  </div>
                  <p className="text-primary mt-12">Great for regular racers</p>
                </div>
              </div>
            </Link>

            {/* Premium Package */}
            <Link href="/book" className="border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer h-full relative hover:scale-100 sm:hover:scale-105">
              <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
                <h3 className="text-primary font-bold text-xl">30 Laps</h3>
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-[250px] bg-gradient-to-tr from-red-500 to-60%">
                <div className="text-center space-y-4 mb-6">
                  <div>
                    <p className="text-4xl font-bold">₹1600</p>
                    <p className="text-sm text-green-600">Save ₹500</p>
                  </div>
                  <p className="text-primary mt-12">For the ultimate experience</p>
                </div>
              </div>
            </Link>

            {/* Group Package */}
            <Link href="/book" className="border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer h-full hover:scale-100 sm:hover:scale-105">
              <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
                <h3 className="text-primary font-bold text-xl">Group Package</h3>
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-[250px] bg-gradient-to-tr from-red-500 to-60%">
                <div className="text-center space-y-4 mb-6">
                  <p className="text-4xl font-bold">₹500<span className="text-lg">/person</span></p>
                  <p className="text-primary mt-17">4+ people, 10 laps each</p>
                </div>
              </div>
            </Link>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * All packages include safety gear and a brief training session
          </p>
        </section>

        {/* Gallery */}
        <section className="space-y-6 px-4 py-12 bg-black/5 dark:bg-white/5 rounded-xl">
          <h2 className="text-4xl font-extrabold text-center tracking-wide bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text animate-pulse">Pick Up the Pace with VGO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/staringDriver.png" alt="Racing 1" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/driver.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/largeTrack.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery1.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery2.png" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery3.jpeg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery4.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery5.png" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image src="/gallery/gallery6.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-6 px-6">
          <h2 className="text-4xl font-extrabold text-center mb-10">What Our Racers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border shadow-[0_0_15px_2px_rgba(255,255,255,0.4)] p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/testimonials/pfp1.png" // replace with your actual image path
                  alt="Anush Shetty"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Anush Shetty</p>
                  <p className="text-sm text-muted-foreground">Professional Racer</p>
                </div>
              </div>
              <p className="italic">"The best track in the city! The karts are well-maintained and the staff is super helpful."</p>
            </div>
            <div className="border shadow-[0_0_15px_2px_rgba(255,255,255,0.4)] p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/testimonials/pfp2.png" // replace with your actual image path
                  alt="Arya Bhat"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Arya Bhat</p>
                  <p className="text-sm text-muted-foreground">First-time Racer</p>
                </div>
              </div>
              <p className="italic">"I was nervous at first but the instructors made me feel so comfortable. Can't wait to come back!"</p>
            </div>
            <div className="border shadow-[0_0_15px_2px_rgba(255,255,255,0.4)] p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/testimonials/pfp3.png" // replace with your actual image path
                  alt="Infosys"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Soham Parekh</p>
                  <p className="text-sm text-muted-foreground">CEO of Infosys</p>
                </div>
              </div>
              <p className="italic">"We booked for a team outing and everyone had a blast. Great for team building!"</p>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <Leaderboard 
          racers={leaderboardData} 
          title="🚀 Season Leaders" 
          showViewAll={true}
        />

        {/* Upcoming Events */}
        <UpcomingEvents/>

        {/* Map */}
        <section className="space-y-6 pb-8">
          <h2 className="text-4xl font-extrabold text-center">Find Us</h2>
          <div className="px-16">
            <div className="w-full h-[280px] rounded-lg overflow-hidden border shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
              <iframe
                className="w-full h-full"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12 py-6 bg-gradient-to-r from-rose-950 via-red-500 to-rose-950 border-y shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
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
        </section>

        <Partnerships/>
        <WhatsAppButton />

      </main>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './components/icons';
export default function Home() {
  return (
    <div className="min-h-screen">

      <main className="container space-y-24">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center space-y-6 min-h-[92vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        >
          {/* Optional: dark overlay */}
          
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-0" />
          
          {/* Hero Content */}
          <div className="relative z-10 px-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
              Experience the Thrill of VGO Racing
            </h1>
            <p className="text-lg max-w-2xl mt-4 text-white mx-auto">
              Book your next go-karting adventure now and feel the adrenaline rush like never before!
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>


        {/* Car & Track Details */}
        <section className="space-y-12">
          
          {/* Go-Kart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-5">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-semibold">State-of-the-Art Electric Go-Karts</h3>
              <ul className="space-y-4 text-muted-foreground">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 px-5">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
              <Image 
                src="/bigTrack.jpg" 
                alt="Championship-level go-kart track"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Championship-Level Track</h3>
              <ul className="space-y-4 text-muted-foreground">
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

        {/* Timings & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timings */}
          <section className="space-y-4 p-8 bg-muted rounded-xl">
            <h2 className="text-2xl font-semibold text-center">Operating Hours</h2>
            <div className="space-y-2 text-center">
              <p className="text-lg">Monday - Friday: 12:00 PM – 10:00 PM</p>
              <p className="text-lg">Weekends: 10:00 AM – 11:00 PM</p>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Pricing Packages</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-6 rounded-lg text-center space-y-2">
                <p className="font-medium">10 Laps</p>
                <p className="text-2xl font-bold">₹700</p>
              </div>
              <div className="border p-6 rounded-lg text-center space-y-2">
                <p className="font-medium">20 Laps</p>
                <p className="text-2xl font-bold">₹1200</p>
                <p className="text-sm text-muted-foreground">Save ₹200</p>
              </div>
              <div className="border p-6 rounded-lg text-center space-y-2">
                <p className="font-medium">30 Laps</p>
                <p className="text-2xl font-bold">₹1600</p>
                <p className="text-sm text-muted-foreground">Save ₹500</p>
              </div>
              <div className="border p-6 rounded-lg text-center space-y-2">
                <p className="font-medium">Group (4+ people)</p>
                <p className="text-2xl font-bold">₹500/person</p>
                <p className="text-sm text-muted-foreground">10 laps each</p>
              </div>
            </div>
          </section>
        </div>

        {/* Gallery */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/staringDriver.png" alt="Racing 1" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/driver.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/largeTrack.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/largeTrack.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/largeTrack.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/gallery/largeTrack.jpg" alt="Racing 2" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">What Our Racers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Rahul S.</p>
                  <p className="text-sm text-muted-foreground">Professional Racer</p>
                </div>
              </div>
              <p className="italic">"The best track in the city! The karts are well-maintained and the staff is super helpful."</p>
            </div>
            <div className="border p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Priya M.</p>
                  <p className="text-sm text-muted-foreground">First-time Racer</p>
                </div>
              </div>
              <p className="italic">"I was nervous at first but the instructors made me feel so comfortable. Can't wait to come back!"</p>
            </div>
            <div className="border p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Team TechStars</p>
                  <p className="text-sm text-muted-foreground">Corporate Event</p>
                </div>
              </div>
              <p className="italic">"We booked for a team outing and everyone had a blast. Great for team building!"</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">Friday Night Racing League</h3>
              <p className="text-muted-foreground">Every Friday at 8 PM</p>
              <p>Compete against other racers for prizes and bragging rights!</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
            <div className="border p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">Kids Racing Camp</h3>
              <p className="text-muted-foreground">Starting July 15th</p>
              <p>A 2-week program to teach kids racing fundamentals and safety.</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Find Us</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with the actual map embed link
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h3 className="font-medium">Address</h3>
              <p className="text-muted-foreground">123 Racing Street, Speed City</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">info@vgoracing.com</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
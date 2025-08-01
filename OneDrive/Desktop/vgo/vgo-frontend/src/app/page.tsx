
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './components/icons';
import Leaderboard from "./components/Leaderboard";
import WhatsAppButton from "./components/WhatsAppButton";
import PricingSection from './components/PricingSection';
import UpcomingEvents from "./components/Slideshow";
import { Partnerships } from "./components/Partnerships";
import Gallery from "./components/Gallery";
import CarAndTrackDetails from "./components/CarAndTrackDetails";
import Testimonials from "./components/Testimonials";

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-primary">
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
        <CarAndTrackDetails/>

        {/* Timings */}
        <section className="py-8 border-y-3 shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border-red-500">
          
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
        </section>

        {/* Pricing */}
        <PricingSection/>

        {/* Gallery */}
        <Gallery/>

        {/* Testimonials */}
        <Testimonials/>

        {/* Leaderboard */}
        <Leaderboard 
          racers={leaderboardData} 
          title="Season Leaders" 
          showViewAll={true}
        />

        {/* Upcoming Events */}
        <UpcomingEvents/>

        {/* Map */}
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

        <Partnerships/>
        <WhatsAppButton />

      </main>
    </div>
  );
}

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
import Map from "./components/Map"

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


        {/* Car, Track and Operating Hours Details */}
        <CarAndTrackDetails/>

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
        <Map/>

        {/* Sponsorships and Partners */}
        <Partnerships/>

        {/* Bottom-Left Whatsapp Button */}
        <WhatsAppButton />

      </main>
    </div>
  );
}

import Leaderboard from "./components/Leaderboard";
import WhatsAppButton from "./components/WhatsAppButton";
import PricingSection from './components/PricingSection';
import UpcomingEvents from "./components/Slideshow";
import Partnerships from "./components/Partnerships";
import Gallery from "./components/Gallery";
import CarAndTrackDetails from "./components/CarAndTrackDetails";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Hero from "./components/Hero";

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
        <Hero/>

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
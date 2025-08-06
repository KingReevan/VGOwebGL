import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/app/components/button";
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './icons';

export default function Hero() {
  return (
    <section
        className="relative flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10 min-h-[85vh] sm:min-h-[92vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
    >
        {/* Optional: dark overlay */}
        
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-0" />
        
        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold tracking-tight text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Experience the Thrill of VGO Racing
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 text-primary mx-auto text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl">
            Book your next go-karting adventure now and feel the adrenaline rush like never before!
        </p>
        <div className="flex gap-4 justify-center mt-4 sm:mt-6 md:mt-8">
            <Button asChild variant="default" size="lg" className="transform transition-transform duration-300 hover:scale-110">
            <Link href="/book" className="text-black w-36 h-12 flex items-center justify-center transition-all duration-300">Book Now</Link>
            </Button>
        </div>
        </div>
    </section>
  );
}
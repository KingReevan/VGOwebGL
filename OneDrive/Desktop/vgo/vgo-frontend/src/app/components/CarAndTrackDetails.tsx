import Link from 'next/link'
import Image from 'next/image'
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './icons';

export default function CarAndTrackDetails() {
  return (
    <section className="space-y-12 px-4 sm:px-6 lg:px-8 py-12">
    {/* Go-Kart Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content - Mobile first order */}
        <div className="space-y-4 lg:space-y-6 lg:pl-8 xl:pl-12 order-2 lg:order-1">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-primary">
            State-of-the-Art Electric Go-Karts
        </h3>
        <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl lg:text-2xl">
            <li className="flex items-start gap-3">
            <LightningBoltIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>4000W electric motors with instant torque delivery</span>
            </li>
            <li className="flex items-start gap-3">
            <GaugeIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>Adjustable speed settings (20-60 km/h) for all skill levels</span>
            </li>
            <li className="flex items-start gap-3">
            <ShieldIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>Roll cages and 5-point harnesses for maximum safety</span>
            </li>
            <li className="flex items-start gap-3">
            <PersonIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>Adjustable seats to accommodate drivers from 140cm to 195cm</span>
            </li>
        </ul>
        </div>

        {/* Image - Mobile first order */}
        <div className="order-1 lg:order-2 relative aspect-video w-full rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
        {/* Image - Mobile first order */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500">
        <Image 
            src="/bigTrack.jpg" 
            alt="Championship-level go-kart track"
            fill
            className="object-cover"
        />
        </div>

        {/* Text Content - Mobile first order */}
        <div className="space-y-4 lg:space-y-6 lg:pl-8 xl:pl-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Championship-Level Track
        </h3>
        <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl lg:text-2xl">
            <li className="flex items-start gap-3">
            <MapPinIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>500 meter professionally designed circuit</span>
            </li>
            <li className="flex items-start gap-3">
            <LoopIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>12 challenging turns with elevation changes</span>
            </li>
            <li className="flex items-start gap-3">
            <TimerIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>Professional timing system with lap analysis</span>
            </li>
            <li className="flex items-start gap-3">
            <SafetyIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>FIA-approved safety barriers and runoff areas</span>
            </li>
        </ul>
        </div>
    </div>
    </section>
  );
}
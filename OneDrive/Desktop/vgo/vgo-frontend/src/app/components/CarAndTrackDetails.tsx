import Link from 'next/link'
import Image from 'next/image'
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon, TrophyIcon} from './icons';

export default function CarAndTrackDetails() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Box 1: Go-Kart Details */}
        <div className="bg-gradient-to-br from-black to-red-900 rounded-2xl p-6 shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <GaugeIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Go-Kart Specifications</h3>
          </div>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start gap-3">
              <LightningBoltIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>4000W electric motors with instant torque</span>
            </li>
            <li className="flex items-start gap-3">
              <GaugeIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Adjustable speed (20-60 km/h)</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Roll cages & 5-point harnesses</span>
            </li>
            <li className="flex items-start gap-3">
              <PersonIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Adjustable seats (140cm-195cm)</span>
            </li>
          </ul>
        </div>

        {/* Box 2: Track Details */}
        <div className="bg-gradient-to-br from-black to-red-900 rounded-2xl p-6 shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <MapPinIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Track Features</h3>
          </div>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>500m professional circuit</span>
            </li>
            <li className="flex items-start gap-3">
              <LoopIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>12 challenging turns</span>
            </li>
            <li className="flex items-start gap-3">
              <TimerIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Professional timing system</span>
            </li>
            <li className="flex items-start gap-3">
              <SafetyIcon className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <span>FIA-approved safety barriers</span>
            </li>
          </ul>
        </div>

        {/* Box 3: Fastest Racer of the Day */}
        <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl p-6 shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Today's Fastest Racer</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full border-4 border-red-500 mb-4 overflow-hidden">
              <Image 
                src="/asianRacer.webp" 
                alt="Today's fastest racer"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-white">Reevan D Mello</h4>
            <p className="text-gray-300 mb-2">Lap Time: 42.15s</p>
            <div className="bg-red-600/20 px-4 py-2 rounded-full">
              <span className="text-red-300 font-medium">New Record!</span>
            </div>
          </div>
        </div>

        {/* Box 4: Fastest Racer of the Venue */}
        <div className="bg-gradient-to-br from-black to-red-900 rounded-2xl p-6 shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Venue Record Holder</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full border-4 border-amber-400 mb-4 overflow-hidden">
              <Image 
                src="/asianRacer.webp" 
                alt="Venue's fastest racer"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-white">Lance Stroll</h4>
            <p className="text-gray-300 mb-2">Lap Time: 39.87s</p>
            <div className="bg-amber-500/20 px-4 py-2 rounded-full">
              <span className="text-amber-300 font-medium">Unbeaten since 2023</span>
            </div>
          </div>
        </div>

        {/* Box 5: Map of Circuit */}
        <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl overflow-hidden shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Track Layout</h3>
            </div>
            <p className="text-gray-300 mb-4">Our championship-level circuit design</p>
          </div>
          <div className="relative aspect-video w-full">
            <Image 
              src="/gallery/staringDriver.png" 
              alt="Track map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Box 6: Operating Hours */}
        <div className="bg-gradient-to-br from-black to-red-900 rounded-2xl p-6 shadow-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 p-3 rounded-lg">
              <TimerIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Operating Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded-xl border border-red-900/50">
              <h4 className="text-lg font-semibold text-white mb-2">Weekdays</h4>
              <p className="text-red-300 text-lg font-medium">12:00 PM – 10:00 PM</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-red-900/50">
              <h4 className="text-lg font-semibold text-white mb-2">Weekends</h4>
              <p className="text-red-300 text-lg font-medium">10:00 AM – 11:00 PM</p>
            </div>
          </div>
          <div className="mt-6 bg-red-900/30 p-4 rounded-lg border border-red-800/50">
            <p className="text-gray-300 text-sm">Last entry 30 minutes before closing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
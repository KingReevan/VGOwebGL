import Link from 'next/link'
import Image from 'next/image'
import { LightningBoltIcon, GaugeIcon, ShieldIcon, PersonIcon, MapPinIcon, LoopIcon, TimerIcon, SafetyIcon} from './icons';

export default function Testimonials() {
  return (
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
  );
}
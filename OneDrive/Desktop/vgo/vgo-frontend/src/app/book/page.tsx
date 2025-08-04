import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/button";

export default function BookPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Book Your Ride</h1>
      <p className="text-muted-foreground">Choose your date, time, and kart.</p>
      {/* Your booking form goes here */}

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
            <p className="text-lg max-w-3xl mt-4 text-white mx-auto">
              Book your next go-karting adventure now and feel the adrenaline rush like never before!
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>
    </main>
  );
}

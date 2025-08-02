import Link from "next/link";
import Image from "next/image";

export function Partnerships() {
  const sponsors = [
    { id: 1, name: "Red Bull", logo: "/sponsors/redbull.png", url: "#" },
    { id: 2, name: "Monster Energy", logo: "/sponsors/monster.png", url: "#" },
    { id: 3, name: "Pirelli", logo: "/sponsors/pirelli.png", url: "#" },
    { id: 4, name: "Castrol", logo: "/sponsors/castrol.png", url: "#" },
    { id: 5, name: "GoPro", logo: "/sponsors/gopro.png", url: "#" },
    { id: 6, name: "Sparco", logo: "/sponsors/sparco.png", url: "#" },
    { id: 7, name: "Shell", logo: "/sponsors/shell.png", url: "#" },
    { id: 8, name: "Bridgestone", logo: "/sponsors/bridgestone.png", url: "#" },
  ];

  return (
    <section className="pb-22 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden mb-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
          Our Partners and Sponsors
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Proudly collaborating with industry leaders to bring you the best racing experience
        </p>

        {/* Circular Sponsor Carousel */}
        <div className="relative h-[400px] w-full max-w-2xl mx-auto">
          {/* Center Logo - Now properly centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gray-800 border-4 border-red-500 flex items-center justify-center shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] z-10">
            <div className="relative w-180 h-80">
              <Image
                src="/vgoLogo.png"
                alt="VGO Racing"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Sponsors orbiting around */}
          {sponsors.map((sponsor, index) => {
            const angle = (index * 360) / sponsors.length;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180);
            const y = Math.sin((angle * Math.PI) / 180);

            return (
              <Link
                key={sponsor.id}
                href={sponsor.url}
                className="absolute w-24 h-24 flex items-center justify-center rounded-full bg-gray-800 border-2 border-white/40 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                style={{
                  left: `calc(50% + ${radius * x}px)`,
                  top: `calc(50% + ${radius * y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="relative w-18 h-18">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
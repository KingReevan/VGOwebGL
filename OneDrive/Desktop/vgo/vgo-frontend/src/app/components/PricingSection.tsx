// components/PricingSection.tsx
import Link from 'next/link'

interface PricingPackage {
  title: string;
  price: string;
  description: string;
  isPopular?: boolean;
  savings?: string;
  isGroup?: boolean;
}

export default function PricingSection() {
  const packages: PricingPackage[] = [
    {
      title: "10 Laps",
      price: "₹700",
      description: "Perfect for beginners"
    },
    {
      title: "20 Laps",
      price: "₹1200",
      description: "Great for regular racers",
      isPopular: true,
      savings: "Save ₹200"
    },
    {
      title: "30 Laps",
      price: "₹1600",
      description: "For the ultimate experience",
      savings: "Save ₹500"
    },
    {
      title: "Group Package",
      price: "₹500/person",
      description: "4+ people, 10 laps each",
      isGroup: true
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">
          Pricing Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {packages.map((pkg, index) => (
            <Link 
              href="/book" 
              key={index}
              className="border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer hover:scale-[1.02] min-h-[280px]"
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl text-blue-50 border-l border-b">
                  POPULAR
                </div>
              )}
              
              {/* Package Header */}
              <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
                <h3 className="text-primary font-bold text-lg sm:text-xl">
                  {pkg.title}
                </h3>
              </div>
              
              {/* Package Content */}
              <div className="p-6 flex flex-col flex-1 bg-gradient-to-tr from-red-500 to-60%">
                <div className="text-center space-y-4 mb-6">
                  <p className="text-3xl sm:text-4xl font-bold">
                    {pkg.isGroup ? (
                      <>
                        ₹500<span className="text-lg">/person</span>
                      </>
                    ) : pkg.price}
                  </p>
                  
                  {pkg.savings && (
                    <p className="text-sm text-green-600">
                      {pkg.savings}
                    </p>
                  )}
                  
                  <p className="text-primary mt-4 sm:mt-6">
                    {pkg.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 sm:mt-10">
          * All packages include safety gear and a brief training session
        </p>
      </div>
    </section>
  );
}
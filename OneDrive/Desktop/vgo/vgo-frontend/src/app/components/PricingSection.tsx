'use client'

import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="space-y-8 py-12">
      <h2 className="text-4xl font-extrabold text-center">Pricing Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-10 max-w-6xl mx-auto">
        {/* Basic Package */}
        <PricingCard
          title="10 Laps"
          price="₹700"
          description="Perfect for beginners"
          href="/book"
        />

        {/* Popular Package */}
        <PricingCard
          title="20 Laps"
          price="₹1200"
          description="Great for regular racers"
          savings="Save ₹200"
          href="/book"
          badge="POPULAR"
        />

        {/* Premium Package */}
        <PricingCard
          title="30 Laps"
          price="₹1600"
          description="For the ultimate experience"
          savings="Save ₹500"
          href="/book"
        />

        {/* Group Package */}
        <PricingCard
          title="Group Package"
          price="₹500"
          priceSuffix="/person"
          description="4+ people, 10 laps each"
          href="/book"
        />
      </div>

      <p className="text-center text-muted-foreground mt-8">
        * All packages include safety gear and a brief training session
      </p>
    </section>
  )
}

type PricingCardProps = {
  title: string
  price: string
  description: string
  href: string
  savings?: string
  badge?: string
  priceSuffix?: string
}

function PricingCard({
  title,
  price,
  priceSuffix,
  description,
  savings,
  href,
  badge,
}: PricingCardProps) {
  return (
    <Link
      href={href}
      className="min-h-[260px] border border-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] hover:border-red-500 transition-all duration-300 flex flex-col cursor-pointer h-full relative hover:scale-100 sm:hover:scale-105"
    >
      {badge && (
        <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl text-blue-50 border-l border-b">
          {badge}
        </div>
      )}

      <div className="border-b border-red-500 bg-gradient-to-bl from-red-500 to-60% p-4 text-center">
        <h3 className="text-primary font-bold text-xl">{title}</h3>
      </div>

      <div className="p-6 flex flex-col flex-1 bg-gradient-to-tr from-red-500 to-60%">
        <div className="flex flex-col justify-between flex-1 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold">
              {price}
              {priceSuffix && <span className="text-lg">{priceSuffix}</span>}
            </p>
            {savings && <p className="text-sm text-green-600">{savings}</p>}
          </div>

          {/* Spacer to align descriptions */}
          <div className="flex-1" />

          <p className="text-primary">{description}</p>
        </div>
      </div>
    </Link>
  )
}


'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import { Button } from '@/app/components/button'

interface Racer {
  position: number
  name: string
  pfp: string
  score: number
  isYou?: boolean
}

interface LeaderboardProps {
  racers: Racer[]
  title?: string
  showViewAll?: boolean
}

export default function Leaderboard({
  racers,
  title = 'Top Racers',
  showViewAll = true,
}: LeaderboardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  // Dummy full leaderboard
  const fullRacers = Array.from({ length: 30 }, (_, i) => ({
    position: i + 1,
    name: `Racer ${i + 1}`,
    pfp: `/racers/pfp${(i % 5) + 1}.png`,
    score: 50 - i,
  }))

  const renderRacerRow = (racer: Racer) => (
    <div
      key={racer.position}
      className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-700/50 transition-colors ${
        racer.isYou ? 'bg-primary/20' : ''
      }`}
    >
      <div className="col-span-1 text-center">
        <span
          className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
            racer.position <= 3 ? 'bg-yellow-500 text-black font-bold' : 'bg-gray-600'
          }`}
        >
          {racer.position}
        </span>
      </div>

      <div className="col-span-8 flex items-center space-x-4">
        <div className="relative w-10 h-10">
          <Image
            src={racer.pfp}
            alt={racer.name}
            fill
            className="rounded-full object-cover border-2 border-gray-600"
          />
        </div>
        <div>
          <p className="font-medium text-white">{racer.name}</p>
          {racer.isYou && (
            <span className="text-xs bg-primary px-2 py-0.5 rounded-full">You</span>
          )}
        </div>
      </div>

      <div className="col-span-3 text-center text-white font-mono text-lg">
        {racer.score}
      </div>
    </div>
  )

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-white">{title}</h2>

        <div
          className={`bg-gray-800 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500`}
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-gradient-to-r from-red-500 to-rose-950 text-white font-bold">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-8">Driver</div>
            <div className="col-span-3 text-center">Score</div>
          </div>

          {/* Top 5 */}
          <div className="divide-y divide-gray-700">
            {racers.map(renderRacerRow)}
          </div>

          {/* View All Button */}
          {showViewAll && (
            <div className="p-0 text-center">
              <Button
                variant="outline"
                onClick={() => setModalOpen(true)}
                className="border-red-500 bg-gradient-to-bl from-red-500 to-rose-950 text-primary w-full h-12 rounded-none hover:text-primary hover:scale-110 cursor-pointer hover:from-50%"
              >
                View Full Leaderboard
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Full Leaderboard Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Full Leaderboard">
        <div className="divide-y divide-gray-700">
          {fullRacers.map(renderRacerRow)}
        </div>
      </Modal>
    </section>
  )
}

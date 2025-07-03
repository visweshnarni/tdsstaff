'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarDays, MapPin, Download, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Event {
  title: string
  dateRange: string // e.g., "25 Apr 2025 - 27 Apr 2025"
  location: string
  imageUrl: string
  downloadUrl: string
}

interface Props {
  entries: Event[]
}

export default function Events({ entries }: Props) {
  const [visibleCount, setVisibleCount] = useState(10)
  const handleLoadMore = () => setVisibleCount(entries.length)

  const visibleEntries = entries.slice(0, visibleCount)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-[#00694A] font-francois-one mb-6 pb-2 text-center">
        Events
      </h1>

      {visibleEntries.map((entry, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col sm:flex-row gap-4"
        >
          {/* Left: Image */}
          <div className="w-full sm:w-[144px] h-[180px] relative rounded-md overflow-hidden shrink-0">
            <Image
              src={entry.imageUrl}
              alt={entry.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 640px) 100vw, 144px"
              priority={false} // Set to true if it's above the fold
            />
          </div>
          
          {/* Right: Details */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg sm:text-xl font-semibold text-[#00694A]">
                {entry.title}
              </h2>
              <a
                href={entry.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="text-sm text-[#00694A] hover:bg-[#00694A] hover:text-white border-[#00694A] rounded-full flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </Button>
              </a>
            </div>

            <div className="flex items-center text-sm text-gray-700 mb-1">
              <CalendarDays className="w-4 h-4 mr-2 text-gray-400" />
              <span>{entry.dateRange}</span>
            </div>

            <div className="flex items-center text-sm text-gray-700">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>{entry.location}</span>
            </div>
          </div>
        </div>
      ))}

      {visibleCount < entries.length && (
        <div className="text-center pt-4">
          <Button
            onClick={handleLoadMore}
            className="cursor-pointer text-white bg-[#00694A] hover:bg-[#004d36]"
          >
            Load More . . .
          </Button>
        </div>
      )}
    </div>
  );
}

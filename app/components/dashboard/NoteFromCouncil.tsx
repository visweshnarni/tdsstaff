"use client";

import { useState } from "react";
import { CalendarDays, User } from "lucide-react";

export interface CouncilNote {
  date: string;
  category: string;
  note: string;
  from: string;
}

interface Props {
  entries: CouncilNote[];
}

export default function NoteFromCouncil({ entries }: Props) {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount(entries.length); // Show all
  };

  const visibleEntries = entries.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-[#00694A] font-francois-one mb-6 border-b border-gray-300 pb-2 text-center">
        Notes from Council
      </h1>

      {visibleEntries.map((entry, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              <span>
                {new Date(entry.date.replace(" ", "T")).toLocaleString("en-IN")}
              </span>
            </div>
            <span className="bg-[#00694A] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {entry.category}
            </span>
          </div>

          <p className="text-gray-800 text-sm leading-relaxed">{entry.note}</p>

          <div className="mt-3 flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-1 text-gray-400" />
            <span className="font-medium">{entry.from}</span>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {visibleCount < entries.length && (
        <div className="text-center pt-4">
          <button
            onClick={handleLoadMore}
            className="cursor-pointer px-6 py-2 text-white bg-[#00694A] hover:bg-[#004d36] text-sm font-semibold rounded shadow-sm transition"
          >
            Load More . . .
          </button>
        </div>
      )}
    </div>
  );
}

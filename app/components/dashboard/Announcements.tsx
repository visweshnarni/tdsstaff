"use client";

import { useState } from "react";
import { CalendarDays, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Announcement {
  date: string;
  note: string;
  from: string;
  downloadUrl: string;
}

interface Props {
  entries: Announcement[];
}

export default function Announcements({ entries }: Props) {
  const [visibleCount, setVisibleCount] = useState(10);
  const handleLoadMore = () => setVisibleCount(entries.length);

  const visibleEntries = entries.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-[#00694A] font-francois-one mb-6 pb-2 text-center">
        Announcements
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
            <a
              href={entry.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="text-sm text-[#00694A] hover:bg-[#00694A] hover:text-[#FFFFFF] border-[#00694A] cursor-pointer rounded-full"
              >
                <Download className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <p className="text-gray-800 text-sm leading-relaxed p-2">
            {entry.note}
          </p>

          <div className="mt-3 flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-1 text-gray-400" />
            <span className="font-medium">{entry.from}</span>
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

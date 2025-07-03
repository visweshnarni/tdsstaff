"use client";

import Events from "@/app/components/dashboard/Events";
import { events } from "@/app/data/events";

export default function EventsPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pt-6 md:pl-72 max-w-screen-xl mx-auto">
      <Events entries={events} />
    </div>
  );
}

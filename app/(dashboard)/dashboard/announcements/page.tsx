// app/(member)/announcements/page.tsx

import Announcements from "@/app/components/dashboard/Announcements";
import { announcements } from "@/app/data/announcement";

export default function AnnouncementsPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pt-6 md:pl-72 max-w-screen-xl mx-auto">
      <Announcements entries={announcements} />;
    </div>
  );
}

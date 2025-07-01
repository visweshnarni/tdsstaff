'use client';

import NoteFromCouncil from "@/app/components/dashboard/NoteFromCouncil";
import { councilNotes } from "@/app/data/councilNotes";

export default function NoteFromCouncilPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pt-6 md:pl-72 max-w-screen-xl mx-auto">
      <NoteFromCouncil entries={councilNotes} />
    </div>
  );
}
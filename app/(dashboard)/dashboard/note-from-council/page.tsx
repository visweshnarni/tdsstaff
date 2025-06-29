'use client';

import NoteFromCouncil from "@/app/components/dashboard/NoteFromCouncil";
import { councilNotes } from "@/app/data/councilNotes";

export default function NoteFromCouncilPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-6 md:pl-72">
      <NoteFromCouncil entries={councilNotes} />
    </div>
  );
}
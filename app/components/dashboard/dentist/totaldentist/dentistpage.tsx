'use client';

import { useState } from 'react';
import { DentistRecord } from '@/app/types/dentist/totaldentist/dentistform'; // Adjust the import path as necessary
import TotalDentist from './totaldentist'; // Your table component
import AddDentistForm from './adddentist'; // Your form component

export default function DentistPage() {
  const [dentists, setDentists] = useState<DentistRecord[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAddNew = () => {
    setDrawerOpen(true);
  };

  const handleSubmit = (data: DentistRecord) => {
    const updated = [...dentists, data];
    const sorted = [...updated].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setDentists(sorted);
    setDrawerOpen(false);
  };

  return (
    <main className="w-full">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-semibold text-[#00694A] font-francois-one mb-6 text-center">
            Registered Dentists
          </h1>

          <TotalDentist data={dentists} onAddNew={handleAddNew} />

          <AddDentistForm
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
}

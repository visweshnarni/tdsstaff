'use client';

import { useState } from 'react';
import { DentistRecord } from '@/app/types/dentist/totaldentist/totaldentist';
import TotalDentist from './totaldentist';
import AddDentistForm from './adddentist';

interface Props {
  data: DentistRecord[];
}

export default function DentistPage({ data }: Props) {
  const [dentists, setDentists] = useState<DentistRecord[]>(data);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAddNew = () => {
    setDrawerOpen(true);
  };

  const handleSubmit = (newDentist: DentistRecord) => {
    const updated = [...dentists, newDentist];
    const sorted = updated.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
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

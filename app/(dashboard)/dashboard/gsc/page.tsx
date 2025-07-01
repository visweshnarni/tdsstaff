'use client';

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GscRecord } from "@/app/types/gsc";
import { generateDummyGscData } from "@/app/data/generateDummyGscData";
import GscDataTable from "@/app/components/dashboard/gsc/GscDataTable";
import GscFormDrawer from "@/app/components/dashboard/gsc/GscFormDrawer";

export default function GscPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [records, setRecords] = useState<GscRecord[]>(generateDummyGscData());
  const [editingRecord, setEditingRecord] = useState<GscRecord | undefined>(
    undefined
  );

  const handleAddNew = () => {
    setEditingRecord(undefined);
    setDrawerOpen(true);
  };

  const handleEdit = (record: GscRecord) => {
    setEditingRecord(record);
    setDrawerOpen(true);
  };

  const handleSubmit = (data: GscRecord) => {
    if (data.id) {
      setRecords((prev) =>
        prev.map((item) => (item.id === data.id ? { ...item, ...data } : item))
      );
    } else {
      const newData = { ...data, id: Date.now().toString() };
      setRecords((prev) => [newData, ...prev]);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pt-6 md:pl-72 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold text-[#00694A] font-francois-one mb-6 border-b border-gray-300 pb-2 text-center">
        Good Standing Certificate
      </h1>
      <div className="flex justify-end mb-6">
        <Button
          onClick={handleAddNew}
          className="bg-[#00694A] hover:bg-[#004d36] text-white cursor-pointer"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Apply for New GSC
        </Button>
      </div>

      <GscDataTable data={records} onEdit={handleEdit} />
      <GscFormDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSubmit={handleSubmit}
        defaultValues={editingRecord}
      />
    </div>
  );
}

'use client';

import { useMemo, useState } from "react";
import { DentistRecord } from "@/app/types/dentist/totaldentist/totaldentist";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import AddDentistForm from "./adddentist"; // ✅ Make sure this exists

interface Props {
  data: DentistRecord[];
  onAddNew?: (newData: DentistRecord) => void;
}

const itemsPerPage = 10;

export default function TotalDentist({ data, onAddNew }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false); // ✅ Toggle drawer

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  const handleFormSubmit = (newDentist: DentistRecord) => {
    if (onAddNew) onAddNew(newDentist);
    setShowForm(false);
  };

  return (
    <>
      {/* Drawer Form */}
      <AddDentistForm
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
      />

      <div className="rounded-md border bg-white shadow-md overflow-x-auto">
        {/* Top bar */}
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Input
            placeholder="Search by any field"
            className="w-full md:w-1/2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Button
            onClick={() => setShowForm(true)}
            className="bg-[#00694A] hover:bg-[#004d36] text-white"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Dentist
          </Button>
        </div>

        {/* Table */}
        <Table className="w-full table-auto text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center px-2 py-2">Dentist Number</TableHead>
              <TableHead className="text-center px-2 py-2">Name</TableHead>
              <TableHead className="text-center px-2 py-2">Email</TableHead>
              <TableHead className="text-center px-2 py-2">Mobile</TableHead>
              <TableHead className="text-center px-2 py-2">Action</TableHead>
              <TableHead className="text-center px-2 py-2">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-center px-2 py-2">{item.dentistNumber}</TableCell>
                  <TableCell className="text-center px-2 py-2">{item.name}</TableCell>
                  <TableCell className="text-center px-2 py-2">{item.email}</TableCell>
                  <TableCell className="text-center px-2 py-2">{item.mobile}</TableCell>
                  <TableCell className="text-center px-2 py-2">
                    <Button
                      variant="outline"
                      className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
                      onClick={() => alert("Dentist Action triggered")}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell className="text-center px-2 py-2">{item.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                  No matching records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center px-4 py-3 border-t">
            <p className="text-sm text-gray-600">
              Showing{" "}
              {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} records
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

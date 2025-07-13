"use client";

import { useMemo, useState } from "react";
import { VerificationRecord } from "@/app/types/verification";
import { PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import MultiStepForm from "@/app/components/dashboard/Application/MultiStepForm";

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

interface Props {
  data: VerificationRecord[];
}

const itemsPerPage = 10;

export default function VerificationPending({ data }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFormSheet, setShowFormSheet] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  return (
    <div className="rounded-md border bg-white shadow-md overflow-x-auto">
      {/* Top Bar with Search and Add Button */}
      <div className="p-4 border-b flex flex-col md:flex-row justify-between gap-3">
        <Input
          placeholder="Search by name"
          className="w-full md:w-1/2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* Sheet for Application Form */}
        <Sheet open={showFormSheet} onOpenChange={setShowFormSheet}>

          <SheetContent
            side="right"
            className="w-full sm:max-w-[50vw] max-h-screen overflow-y-auto"
          >
           <SheetHeader>
  <SheetTitle className="text-2xl font-francois-one text-[#00694A] text-center mt-6">
    
  </SheetTitle>
</SheetHeader>

            <div className="mt-4">
              <MultiStepForm onClose={() => setShowFormSheet(false)} />
            </div>
          </SheetContent>

          <Button
            onClick={() => setShowFormSheet(true)}
            className="bg-[#00694A] hover:bg-[#004d36] text-white"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Application
          </Button>
        </Sheet>
      </div>

      {/* Table */}
      <Table className="w-full table-auto text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center px-2 py-2">TR Number</TableHead>
            <TableHead className="text-center px-2 py-2">Name</TableHead>
            <TableHead className="text-center px-2 py-2">Email</TableHead>
            <TableHead className="text-center px-2 py-2">Verification</TableHead>
            <TableHead className="text-center px-2 py-2">Action</TableHead>
            <TableHead className="text-center px-2 py-2">Mobile</TableHead>
            <TableHead className="text-center px-2 py-2">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-center px-2 py-2">{item.trNumber}</TableCell>
                <TableCell className="text-center px-2 py-2">{item.name}</TableCell>
                <TableCell className="text-center px-2 py-2">{item.email}</TableCell>
                <TableCell className="text-center px-2 py-2">{item.verificationStatus}</TableCell>
                <TableCell className="text-center px-2 py-2 space-x-2">
                  <Button
                    variant="outline"
                    className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
                    onClick={() => alert("Verify action triggered!")}
                  >
                    Verify
                  </Button>
                  <span className="text-gray-400 font-semibold">or</span>
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => alert("View action triggered!")}
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell className="text-center px-2 py-2">{item.mobile}</TableCell>
                <TableCell className="text-center px-2 py-2">{item.date}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-gray-500">
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
            {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)}{" "}
            to{" "}
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
  );
}

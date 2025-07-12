"use client";

import { useMemo, useState } from "react";
import { GSLVerificationRecord } from "@/app/types/gsl/verification";
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
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  data: GSLVerificationRecord[];
}

const itemsPerPage = 10;

export default function GSLVerificationPending({ data }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="rounded-md border bg-white shadow-md overflow-x-auto">
      {/* Search bar */}
      <div className="p-4 border-b">
        <Input
          placeholder="Search by any field"
          className="w-full md:w-1/2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Table */}
      <Table className="w-full table-auto text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Membership Number</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Mobile</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="text-center">{item.membershipNumber}</TableCell>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-center">{item.email}</TableCell>
                <TableCell className="text-center">{item.mobile}</TableCell>
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

              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-6 text-gray-500">
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
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)} to{" "}
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

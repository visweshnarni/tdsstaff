"use client";

import { useMemo, useState } from "react";
import { GoodStandingApprovedRecord } from "@/app/types/gsl/approved";
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
import { ChevronLeft, ChevronRight, FileDown } from "lucide-react";

interface Props {
  data: GoodStandingApprovedRecord[];
}

const itemsPerPage = 10;

export default function ApprovedList({ data }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // ⬇ PDF Download Function for a row
  const downloadPDF = (row: GoodStandingApprovedRecord) => {
    const content = `
      Application Number: ${row.applicationNumber}
      Membership Number: ${row.membershipNumber}
      Name: ${row.name}
      Email: ${row.email}
      Mobile: ${row.mobile}
      Date: ${row.date}
      Category: ${row.category}
    `;

    const blob = new Blob([content], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${row.membershipNumber}_details.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-md border bg-white shadow-md overflow-x-auto">
      {/* Search */}
      <div className="p-4 border-b flex flex-col md:flex-row justify-between gap-4">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/2"
        />
      </div>

      {/* Table */}
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Application Number</TableHead>
            <TableHead className="text-center">Membership Number</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Mobile</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell className="text-center">{row.applicationNumber}</TableCell>
                <TableCell className="text-center">{row.membershipNumber}</TableCell>
                <TableCell className="text-center">{row.name}</TableCell>
                <TableCell className="text-center">{row.email}</TableCell>
                <TableCell className="text-center">{row.mobile}</TableCell>
                <TableCell className="text-center">{row.date}</TableCell>
                <TableCell className="text-center">{row.category}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
                    onClick={() => downloadPDF(row)}
                  >
                    <FileDown className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-6 text-gray-500">
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
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} records
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

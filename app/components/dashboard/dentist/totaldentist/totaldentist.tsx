"use client";

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
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface Props {
  data: DentistRecord[];
}

const itemsPerPage = 10;

export default function TotalDentist({ data }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  // CSV download logic
  // const downloadCSV = () => {
  //   const headers = [
  //     "Membership Number",
  //     "Name",
  //     "Email",
  //     "Mobile",
  //     "Date",
  //     "Category",
  //   ];

    const rows = filteredData.map((item) => [
      item.membershipNumber,
      item.name,
      item.email,
      item.mobile,
      item.date,
      item.category,
    ]);

  //   const csvContent =
  //     "data:text/csv;charset=utf-8," +
  //     [headers, ...rows].map((row) => row.join(",")).join("\n");

  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", "total_dentists.csv");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="rounded-md border bg-white shadow-md overflow-x-auto">
      {/* Top bar with search and CSV download */}
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
        {/* <Button
          onClick={downloadCSV}
          className="bg-[#00694A] hover:bg-[#004d36] text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button> */}
      </div>

      {/* Table */}
      <Table className="w-full table-auto text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Membership Number</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Mobile</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Category</TableHead>
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
                <TableCell className="text-center">{item.date}</TableCell>
                <TableCell className="text-center">{item.category}</TableCell>
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

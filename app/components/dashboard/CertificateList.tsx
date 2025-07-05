"use client";

import { useState, useMemo } from "react";
import { CertificateRecord } from "@/app/types/certificate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const itemsPerPage = 10;

interface Props {
  data: CertificateRecord[];
}

export default function CertificateList({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((record) =>
      record.certificateName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  return (
    <div className="rounded-md border bg-white shadow-md">
      {/* Search Bar */}
      <div className="p-4 border-b">
        <Input
          placeholder="Search by certificate name"
          className="w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
      </div>

      {/* Table */}
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 text-center">
              Certificate Name
            </TableHead>
            <TableHead className="w-1/3 text-center">Date of Issue</TableHead>
            <TableHead className="w-1/3 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="text-center">
                  {record.certificateName}
                </TableCell>
                <TableCell className="text-center">
                  {record.dateOfIssue}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-sm text-[#00694A] hover:bg-[#00694A] hover:text-white border-[#00694A] cursor-pointer rounded-full"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = record.downloadUrl;
                      link.download = "certificate.pdf";
                      link.target = "_blank";
                      link.click();
                    }}
                  >
                    <Download />
                    <span className="sr-only">Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-6 text-gray-500">
                No matching certificates found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center px-4 py-3 border-t">
          <p className="text-sm text-gray-600">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              filteredData.length
            )}{" "}
            to {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
            {filteredData.length} records
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

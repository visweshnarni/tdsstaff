"use client";

import { useState, useMemo } from "react";
import { GscRecord } from "@/app/types/gsc";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  data: GscRecord[];
  onEdit: (record: GscRecord) => void;
}

export default function GscDataTable({ data, onEdit }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = useMemo(() => {
    return data.filter((record) => {
      const matchesSearch =
        record.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.applicationNo?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || record.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, searchTerm, statusFilter]);

  const getStatusClass = (status: string) => {
    return (
      {
        Approved: "bg-green-100 text-green-800",
        Pending: "bg-yellow-100 text-yellow-800",
        Rejected: "bg-red-100 text-red-800",
      }[status] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="rounded-md border bg-white shadow-md">
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border-b">
        <Input
          placeholder="Search by name or application no."
          className="w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value)}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Application No.</TableHead>
            <TableHead>Application Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length > 0 ? (
            filteredData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.applicationNo}</TableCell>
                <TableCell>{record.applicationDate}</TableCell>
                <TableCell>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusClass(
                      record.status ?? ""
                    )}`}
                  >
                    {record.status}
                  </span>
                </TableCell>
                <TableCell>
                  {record.status === "Pending" && (
                    <Button
                      size="sm"
                      onClick={() => onEdit(record)}
                      className="bg-[#00694A] hover:bg-[#004d36] text-white"
                    >
                      Edit
                    </Button>
                  )}
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
    </div>
  );
}

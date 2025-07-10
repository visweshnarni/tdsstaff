'use client';

import { useMemo, useState } from 'react';
import { MembershipVerificationRecord } from '@/app/types/renewalvp';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  data: MembershipVerificationRecord[];
}

const itemsPerPage = 10;

export default function MembershipVerification({ data }: Props) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      `${item.membershipNumber} ${item.name} ${item.email} ${item.mobile}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="rounded-md border bg-white shadow-md overflow-x-auto">
      {/* Search Bar */}
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
            <TableHead className="text-center px-2">Membership Number</TableHead>
            <TableHead className="text-center px-2">Name</TableHead>
            <TableHead className="text-center px-2">Email</TableHead>
            <TableHead className="text-center px-2">Verification</TableHead>
            <TableHead className="text-center px-2">Action</TableHead>
            <TableHead className="text-center px-2">Mobile</TableHead>
            <TableHead className="text-center px-2">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-center px-2">{item.membershipNumber}</TableCell>
                <TableCell className="text-center px-2">{item.name}</TableCell>
                <TableCell className="text-center px-2">{item.email}</TableCell>
                <TableCell className="text-center px-2">{item.verificationStatus}</TableCell>
                <TableCell className="text-center px-2">
                  <Button
                    variant="outline"
                    className="text-[#00694A] border-[#00694A] hover:bg-[#00694A] hover:text-white"
                    onClick={() => alert(`Verifying ${item.name}`)}
                  >
                    Verify
                  </Button>
                </TableCell>
                <TableCell className="text-center px-2">{item.mobile}</TableCell>
                <TableCell className="text-center px-2">{item.date}</TableCell>
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
            Showing{' '}
            {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)} to{' '}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of{' '}
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

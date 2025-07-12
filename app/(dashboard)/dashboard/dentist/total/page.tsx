'use client';

import DentistPage from "@/app/components/dashboard/dentist/totaldentist/dentistpage";
import { DentistRecord } from "@/app/types/dentist/totaldentist/totaldentist";

const dummyData: DentistRecord[] = [
  {
    dentistNumber: "DENT001",
    name: "Dr. Rakesh Kumar",
    email: "rakesh.kumar@example.com",
    mobile: "9876543210",
    date: "2024-08-01",
  },
  {
    dentistNumber: "DENT002",
    name: "Dr. Meera Singh",
    email: "meera.singh@example.com",
    mobile: "9123456789",
    date: "2024-08-05",
  },
];

export default function Page() {
  return <DentistPage data={dummyData} />;
}

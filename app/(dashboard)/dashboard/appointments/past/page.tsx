import PastAppointments from "@/app/components/dashboard/appointments/past";
import { PastAppointmentRecord } from "@/app/types/appointments/past";

const dummyData: PastAppointmentRecord[] = [
  {
    applicationNumber: "APP1001",
    membershipNumber: "MEM1001",
    type: "Consultation",
    name: "Dr. Ravi Teja",
    email: "ravi@example.com",
    mobile: "9876543210",
    timeAndDate: "2025-06-25 11:00 AM",
    category: "Oral Surgery",
  },
  {
    applicationNumber: "APP1002",
    membershipNumber: "MEM1002",
    type: "Review",
    name: "Dr. Sneha Reddy",
    email: "sneha@example.com",
    mobile: "9123456789",
    timeAndDate: "2025-06-26 02:30 PM",
    category: "Endodontics",
  },
];

export default function Page() {
  return <PastAppointments data={dummyData} />;
}

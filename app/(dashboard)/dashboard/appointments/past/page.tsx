import PastAppointments from "@/app/components/dashboard/appointments/past";
import { PastAppointmentRecord } from "@/app/types/appointments/past";

const dummyData: PastAppointmentRecord[] = [
  {
    registrationNumber: "REG123",
    type: "Consultation",
    name: "Dr. Meera Patel",
    email: "meera@example.com",
    mobile: "9876543210",
    timeAndDate: "2025-06-28 03:00 PM",
  },
  {
    registrationNumber: "REG456",
    type: "Surgery",
    name: "Dr. Sameer Reddy",
    email: "sameer@example.com",
    mobile: "9123456789",
    timeAndDate: "2025-06-20 11:00 AM",
  },
];

export default function Page() {
  return <PastAppointments data={dummyData} />;
}

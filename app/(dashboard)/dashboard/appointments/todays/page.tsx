import TodayAppointments from "@/app/components/dashboard/appointments/todays";
import { TodayAppointmentRecord } from "@/app/types/appointments/today";

const dummyData: TodayAppointmentRecord[] = [
  {
    registrationNumber: "REG001",
    type: "Consultation",
    name: "Dr. Aarti Sharma",
    email: "aarti@example.com",
    mobile: "9876543210",
    timeAndDate: "2025-07-08 10:30 AM",
  },
  {
    registrationNumber: "REG002",
    type: "Follow-up",
    name: "Dr. Vijay Kumar",
    email: "vijay@example.com",
    mobile: "9123456789",
    timeAndDate: "2025-07-08 2:15 PM",
  },
];

export default function Page() {
  return <TodayAppointments data={dummyData} />;
}

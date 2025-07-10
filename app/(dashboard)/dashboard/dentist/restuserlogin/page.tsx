import RestUserLogin from "@/app/components/dashboard/dentist/restuserlogin";
import { RestUserRecord } from "@/types/restuserlogin";

const dummyData: RestUserRecord[] = [
  {
    membershipNumber: "MEM001",
    name: "Dr. Kavya Rao",
    email: "kavya.rao@example.com",
    verificationStatus: "Pending",
    mobile: "9876543210",
    date: "2024-07-01",
  },
  {
    membershipNumber: "MEM002",
    name: "Dr. Anil Mehta",
    email: "anil.mehta@example.com",
    verificationStatus: "Approved",
    mobile: "9123456789",
    date: "2024-07-03",
  },
];

export default function Page() {
  return <RestUserLogin data={dummyData} />;
}

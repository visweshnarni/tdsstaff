import NOLApproved from "@/app/components/dashboard/nol/approved";
import { NOLApprovedRecord } from "@/types/nol/approved";

const dummyData: NOLApprovedRecord[] = [
  {
    membershipNumber: "NOL5001",
    name: "Dr. Sahana Iyer",
    email: "sahana@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "NOL5002",
    name: "Dr. Amarjeet Singh",
    email: "amarjeet@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <NOLApproved data={dummyData} />;
}

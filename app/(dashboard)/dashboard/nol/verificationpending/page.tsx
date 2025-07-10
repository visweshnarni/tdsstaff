import NOLVerificationPending from "@/app/components/dashboard/nol/verificationpending";
import { NOLVerificationRecord } from "@/types/nol/verification";

const dummyData: NOLVerificationRecord[] = [
  {
    membershipNumber: "NOL2001",
    name: "Pooja Reddy",
    email: "pooja@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "NOL2002",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <NOLVerificationPending data={dummyData} />;
}

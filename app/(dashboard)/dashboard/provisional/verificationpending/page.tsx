import VerificationPending from "@/app/components/dashboard/provisional/verificationpending";
import { ProvisionalVerificationRecord } from "@/types/provisional/verification";

const dummyData: ProvisionalVerificationRecord[] = [
  {
    membershipNumber: "MEM001",
    name: "Arun Kumar",
    email: "arun.kumar@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "MEM002",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <VerificationPending data={dummyData} />;
}

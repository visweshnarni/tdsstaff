import MembershipVerification from "@/app/components/dashboard/RenewalList/verificationpending";
import { MembershipVerificationRecord } from "@/types/renewalverificationpending";

// Dummy data (for testing)
const dummyData: MembershipVerificationRecord[] = [
  {
    membershipNumber: "MEM12345",
    name: "Dr. Ayesha Khan",
    email: "ayesha.khan@example.com",
    verificationStatus: "Pending",
    mobile: "9876543210",
    date: "2025-07-06",
  },
  {
    membershipNumber: "MEM67890",
    name: "Dr. Ravi Kumar",
    email: "ravi.kumar@example.com",
    verificationStatus: "Pending",
    mobile: "9123456789",
    date: "2025-07-05",
  },
  // Add more as needed
];

export default function Page() {
  return <MembershipVerification data={dummyData} />;
}

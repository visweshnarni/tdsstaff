import GSLVerificationPending from "@/app/components/dashboard/gsl/verificationpending";
import { GSLVerificationRecord } from "@/app/types/gsl/verification";

const dummyData: GSLVerificationRecord[] = [
  {
    membershipNumber: "GSL1001",
    name: "Ananya Desai",
    email: "ananya@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "GSL1002",
    name: "Ravi Kumar",
    email: "ravi@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <GSLVerificationPending data={dummyData} />;
}

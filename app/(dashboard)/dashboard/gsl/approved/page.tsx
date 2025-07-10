import GSLApproved from "@/app/components/dashboard/gsl/approved";
import { GSLApprovedRecord } from "@/types/gsl/approved";

const dummyData: GSLApprovedRecord[] = [
  {
    membershipNumber: "GSL9001",
    name: "Siddharth Verma",
    email: "siddharth@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "GSL9002",
    name: "Meghana Rao",
    email: "meghana@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <GSLApproved data={dummyData} />;
}

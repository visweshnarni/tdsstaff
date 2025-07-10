import RenewalPaymentPending from "@/app/components/dashboard/RenewalList/paymentpending";
import { RenewalPaymentRecord } from "@/types/renewalpaymentpending";

const dummyData: RenewalPaymentRecord[] = [
  {
    category: "BDS",
    regId: "REG-001",
    name: "Dr. Ritu Singh",
    email: "ritu.singh@example.com",
    mobile: "9876543210",
  },
  {
    category: "MDS",
    regId: "REG-002",
    name: "Dr. Nikhil Jain",
    email: "nikhil.jain@example.com",
    mobile: "9123456789",
  },
  // Add more records if needed
];

export default function Page() {
  return <RenewalPaymentPending data={dummyData} />;
}

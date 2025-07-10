import NOLPaymentPending from "@/app/components/dashboard/nol/paymentpending";
import { NOLPaymentPendingRecord } from "@/types/nol/payment";

const dummyData: NOLPaymentPendingRecord[] = [
  {
    membershipNumber: "NOL3001",
    name: "Dr. Keerthi Reddy",
    email: "keerthi@example.com",
    mobile: "9876543210",
    staffName: "Admin A",
  },
  {
    membershipNumber: "NOL3002",
    name: "Dr. Harsha Mehta",
    email: "harsha@example.com",
    mobile: "9876501234",
    staffName: "Admin B",
  },
];

export default function Page() {
  return <NOLPaymentPending data={dummyData} />;
}

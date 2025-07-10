import PaymentPending from "@/app/components/dashboard/provisional/paymentpending";
import { ProvisionalPaymentPendingRecord } from "@/types/provisional/payment";

const dummyData: ProvisionalPaymentPendingRecord[] = [
  {
    membershipNumber: "PM001",
    name: "Rajesh R",
    email: "rajesh.r@example.com",
    mobile: "9876543210",
  },
  {
    membershipNumber: "PM002",
    name: "Divya Mehta",
    email: "divya.mehta@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <PaymentPending data={dummyData} />;
}

import GSLPaymentPending from "@/app/components/dashboard/gsl/paymentpending";
import { GSLPaymentPendingRecord } from "@/types/gsl/payment";

const dummyData: GSLPaymentPendingRecord[] = [
  {
    membershipNumber: "GSL2001",
    name: "Priya Nair",
    email: "priya@example.com",
    mobile: "9876543210",
    staffName: "Admin A",
  },
  {
    membershipNumber: "GSL2002",
    name: "Karan Deshmukh",
    email: "karan@example.com",
    mobile: "9123456789",
    staffName: "Admin B",
  },
];

export default function Page() {
  return <GSLPaymentPending data={dummyData} />;
}

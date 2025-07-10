import TRMembers from "@/app/components/dashboard/provisional/trmembers";
import { TRMemberRecord } from "@/types/provisional/trmembers";

const dummyData: TRMemberRecord[] = [
  {
    trNumber: "TR001",
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    mobile: "9876543210",
  },
  {
    trNumber: "TR002",
    name: "Megha Sharma",
    email: "megha.sharma@example.com",
    mobile: "9123456789",
  },
];

export default function Page() {
  return <TRMembers data={dummyData} />;
}

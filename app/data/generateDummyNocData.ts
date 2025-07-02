import { NocRecord } from "@/app/types/noc";

export function generateDummyNocData(): NocRecord[] {
  const statuses = ["Pending", "Approved", "Rejected"] as const;

  return Array.from({ length: 100 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `David Doe ${i + 1}`,
    applicationNo: `NOC${1000 + i}`,
    applicationDate: new Date(Date.now() - i * 86400000)
      .toISOString()
      .split("T")[0],
    status: statuses[i % 3],
  }));
}

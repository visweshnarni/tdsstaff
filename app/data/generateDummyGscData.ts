import { GscRecord } from "@/app/types/gsc";

export function generateDummyGscData(): GscRecord[] {
  const statuses = ["Pending", "Approved", "Rejected"] as const;

  return Array.from({ length: 20 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `John Doe ${i + 1}`,
    applicationNo: `GSC${1000 + i}`,
    applicationDate: new Date(Date.now() - i * 86400000)
      .toISOString()
      .split("T")[0],
    status: statuses[i % 3],
  }));
}
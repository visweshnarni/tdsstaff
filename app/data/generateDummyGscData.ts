import { GscRecord } from "@/app/types/gsc";

function formatDateToIndian(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function generateDummyGscData(): GscRecord[] {
  const statuses = ["Pending", "Approved", "Rejected"] as const;

  return Array.from({ length: 100 }, (_, i) => {
    const date = new Date(Date.now() - i * 86400000);

    return {
      id: (i + 1).toString(),
      name: `John Doe ${i + 1}`,
      applicationNo: `GSC${1000 + i}`,
      applicationDate: formatDateToIndian(date),
      status: statuses[i % 3],
    };
  });
}

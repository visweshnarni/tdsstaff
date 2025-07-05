// utils/generateCertificates.ts
import { CertificateRecord } from "@/app/types/certificate";
import { faker } from "@faker-js/faker";

export function generateDummyCertificates(count = 50): CertificateRecord[] {
  return Array.from({ length: count }, (_, i) => ({
    id: faker.string.uuid(),
    certificateName: faker.company.buzzPhrase().split(" ")[0] + " Certificate",
    dateOfIssue: faker.date
      .between({ from: "2024-01-01", to: "2025-07-01" })
      .toLocaleDateString("en-IN"),
    downloadUrl: "/dummy.pdf", // Static dummy link
  }));
}

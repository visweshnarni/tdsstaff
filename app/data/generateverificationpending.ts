import { faker } from "@faker-js/faker";
import { VerificationRecord } from "@/app/types/verification";

export function generateDummyVerifications(count = 30): VerificationRecord[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    trNumber: "TR-" + faker.number.int({ min: 1000, max: 9999 }),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    verificationStatus: "Pending", // You can randomize if needed
    mobile: "9" + faker.string.numeric(9), // ✅ fixed mobile generation
    date: faker.date
      .between({ from: "2024-01-01", to: "2025-07-01" })
      .toISOString()
      .split("T")[0],
  }));
}

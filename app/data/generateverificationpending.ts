import { faker } from "@faker-js/faker";
import { VerificationRecord } from "@/app/types/verification";

export function generateDummyVerifications(count = 30): VerificationRecord[] {
  const categories = ["Student", "Faculty", "Alumni", "Staff"];

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    trNumber: "TR-" + faker.number.int({ min: 1000, max: 9999 }),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    mobile: "9" + faker.string.numeric(9),
    date: faker.date
      .between({ from: "2024-01-01", to: "2025-07-01" })
      .toISOString()
      .split("T")[0],
    category: faker.helpers.arrayElement(categories), // ✅ added category
  }));
}

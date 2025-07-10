import { faker } from "@faker-js/faker";
import { PaymentRecord } from "@/app/types/payment";

// Function to generate dummy data
export function generateDummyPayments(count: number = 50): PaymentRecord[] {
  return Array.from({ length: count }, () => ({
    category: faker.helpers.arrayElement([
      "Registration",
      "Renewal",
      "Good Standing",
      "NOC",
      "Provisional"
    ]),
    trNumber: faker.string.alphanumeric({ length: 10, casing: "upper" }),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    mobile: "9" + faker.string.numeric(9), // ✅ fixed here
  }));
}

import { faker } from "@faker-js/faker";
import { PaymentRecord } from "@/app/types/payment";

// Function to generate dummy data
export function generateDummyPayments(count: number = 50): PaymentPendingRecord[] {
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
    mobile: faker.phone.number("9#########"),
  }));
}

// components/dashboard/appointment/holidays.tsx
const holidays = [
  { no: 1, occasion: "NEW YEAR", date: "01-01-2025", day: "WEDNESDAY" },
  { no: 2, occasion: "BHOGI", date: "13-01-2025", day: "MONDAY" },
  { no: 3, occasion: "SANRANTHI/PONGAL", date: "14-01-2025", day: "TUESDAY" },
  { no: 4, occasion: "REPUBLIC DAY", date: "26-01-2025", day: "SUNDAY" },
  { no: 5, occasion: "MAHASHIVARATHI", date: "26-02-2025", day: "WEDNESDAY" },
  { no: 6, occasion: "HOLI", date: "14-03-2025", day: "FRIDAY" },
  { no: 7, occasion: "UGADI", date: "30-03-2025", day: "SUNDAY" },
  { no: 8, occasion: "RAMZAN", date: "31-03-2025", day: "MONDAY" },
  { no: 9, occasion: "FOLLOWING DAY OF RAMZAN", date: "01-04-2025", day: "TUESDAY" },
  { no: 10, occasion: "BABU JAGJIVANRAM’S BIRTHDAY", date: "05-04-2025", day: "SATURDAY" },
  { no: 11, occasion: "SRI RAMA NAVAMI", date: "06-04-2025", day: "SUNDAY" },
  { no: 12, occasion: "DR. B.R AMBEDKAR’S BIRTHDAY", date: "14-04-2025", day: "MONDAY" },
  { no: 13, occasion: "GOOD FRIDAY", date: "18-04-2025", day: "FRIDAY" },
  { no: 14, occasion: "BAKRID (EID-UI-AZHA)", date: "07-06-2025", day: "SATURDAY" },
  { no: 15, occasion: "MOHARRUM", date: "06-07-2025", day: "SUNDAY" },
  { no: 16, occasion: "BONALU", date: "21-07-2025", day: "MONDAY" },
  { no: 17, occasion: "INDEPENDENCE DAY", date: "15-08-2025", day: "FRIDAY" },
  { no: 18, occasion: "SRI KRISHNASHTAMI", date: "16-08-2025", day: "SATURDAY" },
  { no: 19, occasion: "VINAYAKA CHAVITHI", date: "27-08-2025", day: "WEDNESDAY" },
  { no: 20, occasion: "EID MILAD-UN-NABI", date: "21-09-2025", day: "FRIDAY" },
  { no: 21, occasion: "BATHUKAMMA DAY", date: "21-09-2025", day: "SUNDAY" },
  { no: 22, occasion: "MAHATMA GANDHI JAYANTHI", date: "02-10-2025", day: "THURSDAY" },
  { no: 23, occasion: "VIJAYA DASAMI", date: "03-10-2025", day: "FRIDAY" },
  { no: 24, occasion: "DEEPAVALI", date: "20-10-2025", day: "FRIDAY" },
  { no: 25, occasion: "KARTHIKA PURNIMA", date: "05-11-2025", day: "WEDNESDAY" },
  { no: 26, occasion: "CHRISTMAS", date: "25-12-2025", day: "THURSDAY" },
  { no: 27, occasion: "BOXING DAY", date: "26-12-2025", day: "FRIDAY" },
];

export default function HolidayList() {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="p-6 bg-white shadow-md rounded-lg max-h-[80vh] overflow-y-auto w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">ANNEXURE I</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">SL NO</th>
              <th className="border p-2">OCCASION / FESTIVAL</th>
              <th className="border p-2">DATE</th>
              <th className="border p-2">DAY</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday) => (
              <tr key={holiday.no}>
                <td className="border p-2 text-center">{holiday.no}</td>
                <td className="border p-2">{holiday.occasion}</td>
                <td className="border p-2 text-center">{holiday.date}</td>
                <td className="border p-2 text-center">{holiday.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

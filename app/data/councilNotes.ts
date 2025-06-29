// app/data/councilNotes.ts

// Define the type for a council note
export interface CouncilNote {
  date: string; // ISO format date string
  category: 'New Application' | 'Renewal' | 'Good NOC' | 'Bad NOC'; // restrict to known values
  note: string;
  from: 'TDC Staff' | 'TDC Registrar'; // enforce known sources
}

// Named export for dummy notes
export const councilNotes: CouncilNote[] = [
  {
    date: "2025-06-20 14:25:10",
    category: "New Application",
    note: "Your application is under process. Please wait for further communication.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-21 10:15:34",
    category: "Good NOC",
    note: "NOC request has been reviewed positively. Please visit the office to collect hard copy.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-22 16:42:00",
    category: "Renewal",
    note: "Your documents were missing signature. Kindly re-upload signed PDF within 7 working days.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-25 09:10:45",
    category: "Bad NOC",
    note: "NOC cannot be granted due to pending registration issues. For details, contact registrar.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-28 17:45:00",
    category: "Renewal",
    note: "Your documents have been successfully verified. You may proceed with fee payment online.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-20 14:25:10",
    category: "New Application",
    note: "Your application is under process. Please wait for further communication.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-21 10:15:34",
    category: "Good NOC",
    note: "NOC request has been reviewed positively. Please visit the office to collect hard copy.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-22 16:42:00",
    category: "Renewal",
    note: "Your documents were missing signature. Kindly re-upload signed PDF within 7 working days.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-25 09:10:45",
    category: "Bad NOC",
    note: "NOC cannot be granted due to pending registration issues. For details, contact registrar.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-28 17:45:00",
    category: "Renewal",
    note: "Your documents have been successfully verified. You may proceed with fee payment online.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-20 14:25:10",
    category: "New Application",
    note: "Your application is under process. Please wait for further communication.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-21 10:15:34",
    category: "Good NOC",
    note: "NOC request has been reviewed positively. Please visit the office to collect hard copy.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-22 16:42:00",
    category: "Renewal",
    note: "Your documents were missing signature. Kindly re-upload signed PDF within 7 working days.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-25 09:10:45",
    category: "Bad NOC",
    note: "NOC cannot be granted due to pending registration issues. For details, contact registrar.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-28 17:45:00",
    category: "Renewal",
    note: "Your documents have been successfully verified. You may proceed with fee payment online.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-20 14:25:10",
    category: "New Application",
    note: "Your application is under process. Please wait for further communication.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-21 10:15:34",
    category: "Good NOC",
    note: "NOC request has been reviewed positively. Please visit the office to collect hard copy.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-22 16:42:00",
    category: "Renewal",
    note: "Your documents were missing signature. Kindly re-upload signed PDF within 7 working days.",
    from: "TDC Staff",
  },
  {
    date: "2025-06-25 09:10:45",
    category: "Bad NOC",
    note: "NOC cannot be granted due to pending registration issues. For details, contact registrar.",
    from: "TDC Registrar",
  },
  {
    date: "2025-06-28 17:45:00",
    category: "Renewal",
    note: "Your documents have been successfully verified. You may proceed with fee payment online.",
    from: "TDC Registrar",
  },
];

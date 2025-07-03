// app/data/announcements.ts

export interface Announcement {
  date: string;
  note: string;
  from: "TDC Staff" | "TDC Registrar";
  downloadUrl: string;
}

export const announcements: Announcement[] = [
  {
    date: "2025-06-20 14:25:10",
    note: `All applicants belonging to the 2025 provisional registration batch are hereby informed that the process for document submission and eligibility verification will officially begin from July 5th, 2025. The Telangana Dental Council urges all students to read the detailed circular before submitting any documentation. This includes verifying personal information, ensuring scanned copies are clear and legible, and confirming that every file uploaded is in PDF format. Failure to comply with these simple instructions may result in delays or even rejections. Also, note that incomplete applications will not be considered and will be returned without review. It is also advised that all applicants keep a printed copy of the submitted form and the system-generated acknowledgment for future reference. For more information, including the complete list of mandatory and optional documents, refer to the official circular provided below.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/provisional-circular.pdf",
  },
  {
    date: "2025-06-22 10:10:00",
    note: `Attention to all candidates applying for MDS Transfer in the 2025 cycle: the updated MDS Transfer Guidelines have now been officially released and are available for download. These guidelines have been revised to include recent decisions made by the Dental Council of India and address several queries raised during the 2024 cycle. The document outlines eligibility requirements, acceptable proof of study, NOC protocols from both parent and host institutions, and document submission timelines. Applicants must follow the steps in order, ensuring that each step is validated by the system before proceeding to the next. Missing even a single step or incorrect sequence will lead to processing errors and potential rejection. The TDC will not entertain any manual corrections or resubmissions once an application is marked 'Submitted'. Please also note that the deadline for applying under the new guidelines is August 10, 2025. No late submissions will be accepted under any circumstance.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/mds-guidelines.pdf",
  },
  {
    date: "2025-06-25 09:45:30",
    note: `Candidates who submitted renewal applications before June 20th, 2025, are requested to refer to the new document verification schedule released by the Telangana Dental Council. This schedule has been carefully created to minimize crowding and to ensure an efficient verification process. Each candidate has been assigned a specific date and time slot for appearance at the verification center. The list includes the candidate name, registration number, verification venue, and contact person for assistance. You are required to carry all original documents, including proof of payment, original registration certificate, and address proof. Any deviation from your assigned schedule without prior intimation to the Council office will be considered a no-show. If you are unable to attend due to valid health or family emergencies, you must notify the Council at least 48 hours in advance with documented proof. The full schedule with details is available in the attached PDF.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/verification-schedule.pdf",
  },
  {
    date: "2025-06-28 11:20:00",
    note: `The Telangana Dental Council has upgraded its NOC application portal to support digital verifications and streamline the approval process. From July 1st onwards, applicants will be required to complete all steps online, including document upload, payment of fees, and e-signature. The manual walk-in application process will no longer be entertained. This change is in line with the Council’s goal to digitize all essential services and improve turnaround time. Applicants are encouraged to go through the step-by-step user manual provided in the circular below before attempting to submit an NOC request. The document includes visuals, FAQs, and troubleshooting scenarios for common issues faced by past applicants. It is critical that users keep their registered mobile number and email updated in the system to receive status updates, OTPs, and any follow-up instructions. If you have already applied through the old system but have not received approval, you will need to reapply using the updated portal.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/noc-process-update.pdf",
  },
  {
    date: "2025-06-30 08:00:00",
    note: `In accordance with the latest directive from the Dental Council of India, all affiliated institutions must upload the list of interns registered under their programs for the academic year 2025. The deadline for submission is strictly July 15, 2025. Institutions are instructed to log into their respective dashboards on the Telangana Dental Council portal and use the newly introduced bulk upload template. The template ensures consistency in data capture and automates validation. Entries submitted outside the template format or with missing fields will be automatically rejected by the system. All concerned departments, especially the administrative and academic offices, must coordinate to ensure that names, registration IDs, and Aadhaar numbers are accurate. Any discrepancy found post-upload may lead to de-listing of candidates and could impact institutional accreditation status. Please download the official advisory and circulate it within your institution immediately to avoid penalties.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/dci-advisory.pdf",
  },
  {
    date: "2025-06-20 14:25:10",
    note: `All applicants belonging to the 2025 provisional registration batch are hereby informed that the process for document submission and eligibility verification will officially begin from July 5th, 2025. The Telangana Dental Council urges all students to read the detailed circular before submitting any documentation. This includes verifying personal information, ensuring scanned copies are clear and legible, and confirming that every file uploaded is in PDF format. Failure to comply with these simple instructions may result in delays or even rejections. Also, note that incomplete applications will not be considered and will be returned without review. It is also advised that all applicants keep a printed copy of the submitted form and the system-generated acknowledgment for future reference. For more information, including the complete list of mandatory and optional documents, refer to the official circular provided below.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/provisional-circular.pdf",
  },
  {
    date: "2025-06-22 10:10:00",
    note: `Attention to all candidates applying for MDS Transfer in the 2025 cycle: the updated MDS Transfer Guidelines have now been officially released and are available for download. These guidelines have been revised to include recent decisions made by the Dental Council of India and address several queries raised during the 2024 cycle. The document outlines eligibility requirements, acceptable proof of study, NOC protocols from both parent and host institutions, and document submission timelines. Applicants must follow the steps in order, ensuring that each step is validated by the system before proceeding to the next. Missing even a single step or incorrect sequence will lead to processing errors and potential rejection. The TDC will not entertain any manual corrections or resubmissions once an application is marked 'Submitted'. Please also note that the deadline for applying under the new guidelines is August 10, 2025. No late submissions will be accepted under any circumstance.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/mds-guidelines.pdf",
  },
  {
    date: "2025-06-25 09:45:30",
    note: `Candidates who submitted renewal applications before June 20th, 2025, are requested to refer to the new document verification schedule released by the Telangana Dental Council. This schedule has been carefully created to minimize crowding and to ensure an efficient verification process. Each candidate has been assigned a specific date and time slot for appearance at the verification center. The list includes the candidate name, registration number, verification venue, and contact person for assistance. You are required to carry all original documents, including proof of payment, original registration certificate, and address proof. Any deviation from your assigned schedule without prior intimation to the Council office will be considered a no-show. If you are unable to attend due to valid health or family emergencies, you must notify the Council at least 48 hours in advance with documented proof. The full schedule with details is available in the attached PDF.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/verification-schedule.pdf",
  },
  {
    date: "2025-06-28 11:20:00",
    note: `The Telangana Dental Council has upgraded its NOC application portal to support digital verifications and streamline the approval process. From July 1st onwards, applicants will be required to complete all steps online, including document upload, payment of fees, and e-signature. The manual walk-in application process will no longer be entertained. This change is in line with the Council’s goal to digitize all essential services and improve turnaround time. Applicants are encouraged to go through the step-by-step user manual provided in the circular below before attempting to submit an NOC request. The document includes visuals, FAQs, and troubleshooting scenarios for common issues faced by past applicants. It is critical that users keep their registered mobile number and email updated in the system to receive status updates, OTPs, and any follow-up instructions. If you have already applied through the old system but have not received approval, you will need to reapply using the updated portal.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/noc-process-update.pdf",
  },
  {
    date: "2025-06-30 08:00:00",
    note: `In accordance with the latest directive from the Dental Council of India, all affiliated institutions must upload the list of interns registered under their programs for the academic year 2025. The deadline for submission is strictly July 15, 2025. Institutions are instructed to log into their respective dashboards on the Telangana Dental Council portal and use the newly introduced bulk upload template. The template ensures consistency in data capture and automates validation. Entries submitted outside the template format or with missing fields will be automatically rejected by the system. All concerned departments, especially the administrative and academic offices, must coordinate to ensure that names, registration IDs, and Aadhaar numbers are accurate. Any discrepancy found post-upload may lead to de-listing of candidates and could impact institutional accreditation status. Please download the official advisory and circulate it within your institution immediately to avoid penalties.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/dci-advisory.pdf",
  },
  {
    date: "2025-06-20 14:25:10",
    note: `All applicants belonging to the 2025 provisional registration batch are hereby informed that the process for document submission and eligibility verification will officially begin from July 5th, 2025. The Telangana Dental Council urges all students to read the detailed circular before submitting any documentation. This includes verifying personal information, ensuring scanned copies are clear and legible, and confirming that every file uploaded is in PDF format. Failure to comply with these simple instructions may result in delays or even rejections. Also, note that incomplete applications will not be considered and will be returned without review. It is also advised that all applicants keep a printed copy of the submitted form and the system-generated acknowledgment for future reference. For more information, including the complete list of mandatory and optional documents, refer to the official circular provided below.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/provisional-circular.pdf",
  },
  {
    date: "2025-06-22 10:10:00",
    note: `Attention to all candidates applying for MDS Transfer in the 2025 cycle: the updated MDS Transfer Guidelines have now been officially released and are available for download. These guidelines have been revised to include recent decisions made by the Dental Council of India and address several queries raised during the 2024 cycle. The document outlines eligibility requirements, acceptable proof of study, NOC protocols from both parent and host institutions, and document submission timelines. Applicants must follow the steps in order, ensuring that each step is validated by the system before proceeding to the next. Missing even a single step or incorrect sequence will lead to processing errors and potential rejection. The TDC will not entertain any manual corrections or resubmissions once an application is marked 'Submitted'. Please also note that the deadline for applying under the new guidelines is August 10, 2025. No late submissions will be accepted under any circumstance.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/mds-guidelines.pdf",
  },
  {
    date: "2025-06-25 09:45:30",
    note: `Candidates who submitted renewal applications before June 20th, 2025, are requested to refer to the new document verification schedule released by the Telangana Dental Council. This schedule has been carefully created to minimize crowding and to ensure an efficient verification process. Each candidate has been assigned a specific date and time slot for appearance at the verification center. The list includes the candidate name, registration number, verification venue, and contact person for assistance. You are required to carry all original documents, including proof of payment, original registration certificate, and address proof. Any deviation from your assigned schedule without prior intimation to the Council office will be considered a no-show. If you are unable to attend due to valid health or family emergencies, you must notify the Council at least 48 hours in advance with documented proof. The full schedule with details is available in the attached PDF.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/verification-schedule.pdf",
  },
  {
    date: "2025-06-28 11:20:00",
    note: `The Telangana Dental Council has upgraded its NOC application portal to support digital verifications and streamline the approval process. From July 1st onwards, applicants will be required to complete all steps online, including document upload, payment of fees, and e-signature. The manual walk-in application process will no longer be entertained. This change is in line with the Council’s goal to digitize all essential services and improve turnaround time. Applicants are encouraged to go through the step-by-step user manual provided in the circular below before attempting to submit an NOC request. The document includes visuals, FAQs, and troubleshooting scenarios for common issues faced by past applicants. It is critical that users keep their registered mobile number and email updated in the system to receive status updates, OTPs, and any follow-up instructions. If you have already applied through the old system but have not received approval, you will need to reapply using the updated portal.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/noc-process-update.pdf",
  },
  {
    date: "2025-06-30 08:00:00",
    note: `In accordance with the latest directive from the Dental Council of India, all affiliated institutions must upload the list of interns registered under their programs for the academic year 2025. The deadline for submission is strictly July 15, 2025. Institutions are instructed to log into their respective dashboards on the Telangana Dental Council portal and use the newly introduced bulk upload template. The template ensures consistency in data capture and automates validation. Entries submitted outside the template format or with missing fields will be automatically rejected by the system. All concerned departments, especially the administrative and academic offices, must coordinate to ensure that names, registration IDs, and Aadhaar numbers are accurate. Any discrepancy found post-upload may lead to de-listing of candidates and could impact institutional accreditation status. Please download the official advisory and circulate it within your institution immediately to avoid penalties.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/dci-advisory.pdf",
  },
  {
    date: "2025-06-20 14:25:10",
    note: `All applicants belonging to the 2025 provisional registration batch are hereby informed that the process for document submission and eligibility verification will officially begin from July 5th, 2025. The Telangana Dental Council urges all students to read the detailed circular before submitting any documentation. This includes verifying personal information, ensuring scanned copies are clear and legible, and confirming that every file uploaded is in PDF format. Failure to comply with these simple instructions may result in delays or even rejections. Also, note that incomplete applications will not be considered and will be returned without review. It is also advised that all applicants keep a printed copy of the submitted form and the system-generated acknowledgment for future reference. For more information, including the complete list of mandatory and optional documents, refer to the official circular provided below.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/provisional-circular.pdf",
  },
  {
    date: "2025-06-22 10:10:00",
    note: `Attention to all candidates applying for MDS Transfer in the 2025 cycle: the updated MDS Transfer Guidelines have now been officially released and are available for download. These guidelines have been revised to include recent decisions made by the Dental Council of India and address several queries raised during the 2024 cycle. The document outlines eligibility requirements, acceptable proof of study, NOC protocols from both parent and host institutions, and document submission timelines. Applicants must follow the steps in order, ensuring that each step is validated by the system before proceeding to the next. Missing even a single step or incorrect sequence will lead to processing errors and potential rejection. The TDC will not entertain any manual corrections or resubmissions once an application is marked 'Submitted'. Please also note that the deadline for applying under the new guidelines is August 10, 2025. No late submissions will be accepted under any circumstance.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/mds-guidelines.pdf",
  },
  {
    date: "2025-06-25 09:45:30",
    note: `Candidates who submitted renewal applications before June 20th, 2025, are requested to refer to the new document verification schedule released by the Telangana Dental Council. This schedule has been carefully created to minimize crowding and to ensure an efficient verification process. Each candidate has been assigned a specific date and time slot for appearance at the verification center. The list includes the candidate name, registration number, verification venue, and contact person for assistance. You are required to carry all original documents, including proof of payment, original registration certificate, and address proof. Any deviation from your assigned schedule without prior intimation to the Council office will be considered a no-show. If you are unable to attend due to valid health or family emergencies, you must notify the Council at least 48 hours in advance with documented proof. The full schedule with details is available in the attached PDF.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/verification-schedule.pdf",
  },
  {
    date: "2025-06-28 11:20:00",
    note: `The Telangana Dental Council has upgraded its NOC application portal to support digital verifications and streamline the approval process. From July 1st onwards, applicants will be required to complete all steps online, including document upload, payment of fees, and e-signature. The manual walk-in application process will no longer be entertained. This change is in line with the Council’s goal to digitize all essential services and improve turnaround time. Applicants are encouraged to go through the step-by-step user manual provided in the circular below before attempting to submit an NOC request. The document includes visuals, FAQs, and troubleshooting scenarios for common issues faced by past applicants. It is critical that users keep their registered mobile number and email updated in the system to receive status updates, OTPs, and any follow-up instructions. If you have already applied through the old system but have not received approval, you will need to reapply using the updated portal.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/noc-process-update.pdf",
  },
  {
    date: "2025-06-30 08:00:00",
    note: `In accordance with the latest directive from the Dental Council of India, all affiliated institutions must upload the list of interns registered under their programs for the academic year 2025. The deadline for submission is strictly July 15, 2025. Institutions are instructed to log into their respective dashboards on the Telangana Dental Council portal and use the newly introduced bulk upload template. The template ensures consistency in data capture and automates validation. Entries submitted outside the template format or with missing fields will be automatically rejected by the system. All concerned departments, especially the administrative and academic offices, must coordinate to ensure that names, registration IDs, and Aadhaar numbers are accurate. Any discrepancy found post-upload may lead to de-listing of candidates and could impact institutional accreditation status. Please download the official advisory and circulate it within your institution immediately to avoid penalties.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/dci-advisory.pdf",
  },
  {
    date: "2025-06-20 14:25:10",
    note: `All applicants belonging to the 2025 provisional registration batch are hereby informed that the process for document submission and eligibility verification will officially begin from July 5th, 2025. The Telangana Dental Council urges all students to read the detailed circular before submitting any documentation. This includes verifying personal information, ensuring scanned copies are clear and legible, and confirming that every file uploaded is in PDF format. Failure to comply with these simple instructions may result in delays or even rejections. Also, note that incomplete applications will not be considered and will be returned without review. It is also advised that all applicants keep a printed copy of the submitted form and the system-generated acknowledgment for future reference. For more information, including the complete list of mandatory and optional documents, refer to the official circular provided below.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/provisional-circular.pdf",
  },
  {
    date: "2025-06-22 10:10:00",
    note: `Attention to all candidates applying for MDS Transfer in the 2025 cycle: the updated MDS Transfer Guidelines have now been officially released and are available for download. These guidelines have been revised to include recent decisions made by the Dental Council of India and address several queries raised during the 2024 cycle. The document outlines eligibility requirements, acceptable proof of study, NOC protocols from both parent and host institutions, and document submission timelines. Applicants must follow the steps in order, ensuring that each step is validated by the system before proceeding to the next. Missing even a single step or incorrect sequence will lead to processing errors and potential rejection. The TDC will not entertain any manual corrections or resubmissions once an application is marked 'Submitted'. Please also note that the deadline for applying under the new guidelines is August 10, 2025. No late submissions will be accepted under any circumstance.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/mds-guidelines.pdf",
  },
  {
    date: "2025-06-25 09:45:30",
    note: `Candidates who submitted renewal applications before June 20th, 2025, are requested to refer to the new document verification schedule released by the Telangana Dental Council. This schedule has been carefully created to minimize crowding and to ensure an efficient verification process. Each candidate has been assigned a specific date and time slot for appearance at the verification center. The list includes the candidate name, registration number, verification venue, and contact person for assistance. You are required to carry all original documents, including proof of payment, original registration certificate, and address proof. Any deviation from your assigned schedule without prior intimation to the Council office will be considered a no-show. If you are unable to attend due to valid health or family emergencies, you must notify the Council at least 48 hours in advance with documented proof. The full schedule with details is available in the attached PDF.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/verification-schedule.pdf",
  },
  {
    date: "2025-06-28 11:20:00",
    note: `The Telangana Dental Council has upgraded its NOC application portal to support digital verifications and streamline the approval process. From July 1st onwards, applicants will be required to complete all steps online, including document upload, payment of fees, and e-signature. The manual walk-in application process will no longer be entertained. This change is in line with the Council’s goal to digitize all essential services and improve turnaround time. Applicants are encouraged to go through the step-by-step user manual provided in the circular below before attempting to submit an NOC request. The document includes visuals, FAQs, and troubleshooting scenarios for common issues faced by past applicants. It is critical that users keep their registered mobile number and email updated in the system to receive status updates, OTPs, and any follow-up instructions. If you have already applied through the old system but have not received approval, you will need to reapply using the updated portal.`,
    from: "TDC Staff",
    downloadUrl: "/pdfs/noc-process-update.pdf",
  },
  {
    date: "2025-06-30 08:00:00",
    note: `In accordance with the latest directive from the Dental Council of India, all affiliated institutions must upload the list of interns registered under their programs for the academic year 2025. The deadline for submission is strictly July 15, 2025. Institutions are instructed to log into their respective dashboards on the Telangana Dental Council portal and use the newly introduced bulk upload template. The template ensures consistency in data capture and automates validation. Entries submitted outside the template format or with missing fields will be automatically rejected by the system. All concerned departments, especially the administrative and academic offices, must coordinate to ensure that names, registration IDs, and Aadhaar numbers are accurate. Any discrepancy found post-upload may lead to de-listing of candidates and could impact institutional accreditation status. Please download the official advisory and circulate it within your institution immediately to avoid penalties.`,
    from: "TDC Registrar",
    downloadUrl: "/pdfs/dci-advisory.pdf",
  },
];

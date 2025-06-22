'use client';

type ProfileData = {
  label: string;
  value: string;
};

const profileFields: ProfileData[] = [
  { label: 'Category', value: 'Bachelor of Dental Surgery (BDS)' },
  { label: 'Membership No.', value: 'A-1273' },
  { label: 'Name in full', value: 'Dr. MADISHETTI ABHILASH' },
  { label: 'Gender', value: 'Male' },
  { label: 'Father’s Name', value: 'MADISHETTI SATHAIAH' },
  { label: 'Place, date & year of birth', value: 'JAGTIAL, 25/08/1992' },
  { label: 'Nationality', value: 'Natural born Indian Citizen' },
  { label: 'Residential address with pin code', value: 'H.NO:1-2-258/3, KRISHNANAGAR, JAGTIAL, DIST: JAGTIAL, PIN 505327' },
  { label: 'Description of Qualification/s', value: 'RENUEAL OF BDS REGISTRATION' },
  { label: 'Email ID', value: 'abhilash.madisetty92@gmail.com' },
  { label: 'Mobile No.', value: '7842810845' },
  { label: 'Aadhaar Card No.', value: '2.81E+11' },
  { label: 'Amount', value: 'INR 400.00' },
  { label: 'Transaction ID', value: 'MOJO1224S05Q22533915' },
  { label: 'Date of Payment', value: '2021-02-24T11:11:13.414596Z' },
];

export default function Profile() {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {profileFields.map(({ label, value }) => (
          <div key={label} className="flex">
            <span className="w-64 text-gray-600 font-medium">{label}</span>
            <span className="text-gray-900 font-semibold">: {value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

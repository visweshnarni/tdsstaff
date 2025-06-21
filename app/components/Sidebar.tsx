'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  { key: 'myProfile', label: 'My Profile' },
  { key: 'editProfile', label: 'Edit Profile' },
  { key: 'renewal', label: 'Renewal' },
  { key: 'gsc', label: 'Good Standing Certificate' },
  { key: 'noc', label: 'No Objection Certificate' },
  { key: 'bookAppointment', label: 'Book Appointment' },
  { key: 'bookGSCAppointment', label: 'Book GSC Appointment' },
  { key: 'bookNOCAppointment', label: 'Book NOC Appointment' },
  { key: 'registrationForeign', label: 'Registration - DCI Recognized Foreign Degree' },
  { key: 'mdsRegistration', label: 'MDS Registration' },
  { key: 'updateEmailMobile', label: 'Update Email And Mobile' },
  { key: 'myCertificates', label: 'My Certificates' },
];

export default function Dashboard() {
  const [activeKey, setActiveKey] = useState('myProfile');

  const renderContent = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h2 className="text-lg font-semibold text-gray-800 capitalize mb-4">
        {menuItems.find((item) => item.key === activeKey)?.label}
      </h2>
      <p className="text-gray-600">Content for: {activeKey}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] px-6 py-6">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow rounded-lg p-6 h-fit sticky top-6">
          {/* Profile Header */}
          <div className="text-center mb-6 border-b pb-4">
            <Image
              src="/images/dravatar.jpg"
              alt="Profile"
              width={90}
              height={90}
              className="mx-auto rounded-full object-cover border"
            />
            <h3 className="mt-3 text-sm font-semibold text-gray-800 leading-tight">
              Dr. MADISHETTI ABHILASH
            </h3>
            <p className="text-xs text-gray-500">Bachelor of Dental Surgery (BDS)</p>
          </div>

          {/* Menu */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveKey(item.key)}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-left ${
                  activeKey === item.key
                    ? 'bg-blue-100 text-[#00694A] font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
}

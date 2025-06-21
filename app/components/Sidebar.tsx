'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const menuItems = [
  { key: 'applicationForm', label: 'Application Form' },
  { key: 'noteFromCouncil', label: 'Note from Council' },
  { key: 'myProfile', label: 'My Profile' },
  { key: 'myCertificate', label: 'My Certificate' },
  { key: 'renewal', label: 'Renewal' },
  { key: 'gsc', label: 'Good Standing Certificates' },
  { key: 'noc', label: 'No Objection Certificate' },
  {
    key: 'appointments',
    label: 'Appointment',
    isDropdown: true,
    children: [
      { key: 'appointmentRegistration', label: 'Registration' },
      { key: 'appointmentRenewal', label: 'Renewal (Tatkal)' },
      { key: 'appointmentGSC', label: 'Good Standing Certificates' },
      { key: 'appointmentNOC', label: 'No Objection Certificate' },
    ],
  },
  { key: 'payments', label: 'Payments' },
  { key: 'announcements', label: 'Announcements' },
  { key: 'events', label: 'Events' },
];

export default function Dashboard() {
  const [activeKey, setActiveKey] = useState('myProfile');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderContent = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h2 className="text-lg font-semibold text-gray-800 capitalize mb-4">
        {
          menuItems
            .flatMap((item) => (item.children ? [item, ...item.children] : item))
            .find((item) => item.key === activeKey)?.label
        }
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
            {menuItems.map((item) =>
              item.isDropdown ? (
                <div key={item.key}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-left hover:bg-gray-100 text-gray-700"
                  >
                    <span>{item.label}</span>
                    {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.key}
                          onClick={() => setActiveKey(child.key)}
                          className={`block w-full text-left px-3 py-1 rounded-md text-sm hover:bg-blue-100 ${
                            activeKey === child.key
                              ? 'bg-blue-200 text-[#00694A] font-semibold'
                              : 'text-gray-700'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.key}
                  onClick={() => setActiveKey(item.key)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeKey === item.key
                      ? 'bg-blue-100 text-[#00694A] font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
}

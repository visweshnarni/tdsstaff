'use client';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const menuItems = [
  { label: 'Application Form', path: '/dashboard/application-form' },
  { label: 'Note from Council', path: '/dashboard/note-from-council' },
  { label: 'My Profile', path: '/dashboard/profile' },
  { label: 'My Certificate', path: '/dashboard/certificates' },
  { label: 'Renewal', path: '/dashboard/renewal' },
  { label: 'Good Standing Certificates', path: '/dashboard/gsc' },
  { label: 'No Objection Certificate', path: '/dashboard/noc' },
  {
    label: 'Appointment',
    isDropdown: true,
    children: [
      { label: 'Registration', path: '/dashboard/appointment/registration' },
      { label: 'Renewal (Tatkal)', path: '/dashboard/appointment/renewal-tatkal' },
      { label: 'Good Standing Certificates', path: '/dashboard/appointment/gsc' },
      { label: 'No Objection Certificate', path: '/dashboard/appointment/noc' },
    ],
  },
  { label: 'Payments', path: '/dashboard/payments' },
  { label: 'Announcements', path: '/dashboard/announcements' },
  { label: 'Events', path: '/dashboard/events' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <aside className="w-72 bg-white shadow rounded-lg p-6 h-fit sticky top-6">
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

      <div className="space-y-1">
        {menuItems.map((item) =>
          item.isDropdown ? (
            <div key={item.label}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-left hover:bg-gray-100 text-gray-700"
              >
                <span>{item.label}</span>
                {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {dropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => router.push(child.path)}
                      className={`block w-full text-left px-3 py-1 rounded-md text-sm ${
                        pathname === child.path
                          ? 'bg-blue-100 text-[#00694A] font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
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
              key={item.label}
              onClick={() => router.push(item.path!)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                pathname === item.path
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
  );
}

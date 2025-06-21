'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#f9fafb] border-b border-gray-200 px-6 h-20 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/images/header-logo.png"
          alt="Telangana Dental Council"
          width={180}
          height={40}
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* Right: Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-2 hover:cursor-pointer"
        >
          <Image
            src="/images/dravatar.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
          <ChevronDown className="text-gray-600 w-4 h-4" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            <div className="flex items-center space-x-3 px-4 py-3 border-b">
              <Image
                src="/images/dravatar.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <div>
                <p className="font-semibold text-sm leading-tight text-gray-800">
                  Dr. MADISHETTI ABHILASH
                </p>
                <p className="text-xs text-gray-500">Bachelor of Dental Surgery (BDS)</p>
              </div>
            </div>
            <div className="divide-y">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                Profile Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

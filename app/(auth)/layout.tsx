// app/(auth)/layout.tsx

import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  // title: 'TDC Auth',
  description: 'Login or Signup to Telangana Dental Council',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-[#09e5ab] to-[#e6fff5]">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gradient-to-b from-[#e8f0f9] to-white">
          {children}
        </div>

        {/* Right: Image */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <Image
            src="/images/tdcimage.jpg"
            alt="Dental Council illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

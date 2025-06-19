'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignupForm() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center py-20 px-6 bg-gradient-to-r from-[#AFBDD1] to-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row items-stretch w-full max-w-6xl bg-[#dee8f7] rounded-2xl shadow-md overflow-hidden">
        
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
          <form className="space-y-4 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">
              {isSignup ? 'Sign Up' : 'Login'}
            </h1>

            {isSignup && (
              <>
                <div>
                  <label htmlFor="fullName" className="block mb-1 font-normal">
                    Full Name (as per BDS Provisional degree)<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name as per BDS Provisional degree"
                    required
                    className="w-full p-2 border rounded bg-[#ffffff]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-normal">
                    Email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email Id"
                    required
                    className="w-full p-2 border rounded bg-[#ffffff]"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block mb-1 font-normal">
                    Mobile<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="Enter Mobile Number"
                    required
                    className="w-full p-2 border rounded bg-[#ffffff]"
                  />
                </div>
              </>
            )}

            {!isSignup && (
              <div>
                <label htmlFor="email" className="block mb-1 font-normal">
                  Email<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email Id"
                  required
                  className="w-full p-2 border rounded bg-[#ffffff]"
                />
              </div>
            )}

            <div>
              <label htmlFor="password" className="block mb-1 font-normal">
                Password<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                required
                className="w-full p-2 border rounded bg-[#ffffff]"
              />
            </div>

            {isSignup && (
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 font-normal">
                  Confirm Password <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="w-full p-2 border rounded bg-[#ffffff]"
                />
              </div>
            )}

            <div>
              <label htmlFor="recaptcha" className="block mb-1 font-normal">
                You are Human
              </label>
              <ReCAPTCHA
                sitekey="your_site_key_here"
                onChange={(value) => console.log('Captcha!', value)}
              />
            </div>

            {isSignup && (
              <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" required />
                <label htmlFor="agree" className="text-sm font-normal">
                  I agree to all{' '}
                  <span className="text-[#007BFF] cursor-pointer hover:underline">
                    Read the T&C of TDC
                  </span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full p-2 font-semibold rounded text-gray-50 transition bg-[#00539B] hover:bg-[#003D79] hover:shadow-md"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>

            <div className="flex justify-center items-center mt-2">
              <span>{isSignup ? 'Already have an account?' : "Don’t have an account?"}</span>{' '}
              <button
                onClick={(e) => { e.preventDefault(); setIsSignup((prev) => !prev); }}
                className="text-[#007BFF] font-semibold ml-1 hover:underline"
              >
                {isSignup ? 'Login now' : 'Signup now'}
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image, hidden on small screens */}
        <div className="hidden lg:block w-full lg:w-1/2">
          <img src="/hospital.png" alt="Signup or login" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

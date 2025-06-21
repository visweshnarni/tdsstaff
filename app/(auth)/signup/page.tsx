'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type FormData = {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function SignupForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Input filtering
    let filteredValue = value;
    if (id === 'fullName') {
      filteredValue = value.replace(/[^A-Za-z\s]/g, ''); // only letters & spaces
    } else if (id === 'mobile') {
      filteredValue = value.replace(/[^0-9]/g, '').slice(0, 10); // only digits, max 10
    }

    setForm((prev) => ({ ...prev, [id]: filteredValue }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (isSignup) {
      if (!form.fullName.trim()) {
        newErrors.fullName = 'Full name is required.';
      } else if (!/^[A-Za-z\s]{2,}$/.test(form.fullName)) {
        newErrors.fullName = 'Name must be at least 2 letters (no special characters).';
      }

      if (!form.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required.';
      } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
        newErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
      }
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!form.password) {
      newErrors.password = 'Password is required.';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,64}$/.test(form.password)
    ) {
      newErrors.password =
        'Password must be 8–64 characters and include uppercase, lowercase, number, and special character.';
    }

    if (isSignup && form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Validated Form:', form);
      alert('Form is valid and ready to submit.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#09e5ab] to-[#e6fff5] px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-[#e8f0f9] to-white p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <h1 className="text-2xl font-bold text-[#00694A] mb-6">
              {isSignup ? 'Sign Up' : 'Login'}
            </h1>

            {isSignup && (
              <>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block mb-1 font-normal">
                    Full Name (as per BDS Provisional degree)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full p-2 border rounded bg-white"
                  />
                  {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1 font-normal">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter Email Id"
                    className="w-full p-2 border rounded bg-white"
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block mb-1 font-normal">
                    Mobile<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="w-full p-2 border rounded bg-white"
                  />
                  {errors.mobile && <p className="text-sm text-red-600">{errors.mobile}</p>}
                </div>
              </>
            )}

            {!isSignup && (
              <div>
                <label htmlFor="email" className="block mb-1 font-normal">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter Email Id"
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-1 font-normal">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Enter Password"
                className="w-full p-2 border rounded bg-white"
              />
              {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            {isSignup && (
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 font-normal">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* reCAPTCHA */}
            <div>
              <label className="block mb-1 font-normal">You are Human</label>
              <ReCAPTCHA
                sitekey="your_site_key_here"
                onChange={(value) => console.log('Captcha!', value)}
              />
            </div>

            {/* T&C */}
            {isSignup && (
              <div className="flex items-center space-x-2">
                <input id="agree" type="checkbox" required />
                <label htmlFor="agree" className="text-sm font-normal">
                  I agree to all{' '}
                  <span className="text-[#00694A] cursor-pointer hover:underline">
                    Read the T&C of TDC
                  </span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full p-2 font-semibold rounded text-white transition bg-[#00694A] hover:bg-[#008562] hover:shadow-md"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>

            {/* Switch mode */}
            <div className="flex justify-center items-center mt-2">
              <span>{isSignup ? 'Already have an account?' : "Don’t have an account?"}</span>{' '}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignup((prev) => !prev);
                  setForm({
                    fullName: '',
                    email: '',
                    mobile: '',
                    password: '',
                    confirmPassword: '',
                  });
                  setErrors({});
                }}
                className="text-[#00694A] font-semibold ml-1 hover:underline"
              >
                {isSignup ? 'Login now' : 'Signup now'}
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block w-1/2">
          <img src="/hospital.png" alt="Signup or login" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

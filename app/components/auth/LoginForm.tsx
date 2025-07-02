'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ReCAPTCHA from 'react-google-recaptcha'

type LoginData = {
  email: string
  password: string
}

export function LoginForm() {
  const router = useRouter()
  const [form, setForm] = useState<LoginData>({
    email: '',
    password: '',
  })

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Email and password are required.')
    } else {
      setError(null)
      alert('Login successful!')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-4 px-2 font-poppins bg-[#FFFFFF]"
    >
      <h1 className="text-3xl text-header font-semibold text-[#00694A] text-center">
        Login
      </h1>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-label font-normal mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          className="text-placeholder"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-label font-normal mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          className="text-placeholder"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      {/* ReCAPTCHA */}
      <div>
        <label className="block text-label font-normal mb-2">reCAPTCHA</label>
        <ReCAPTCHA
          sitekey="your_site_key_here"
          onChange={(val) => console.log("captcha", val)}
        />
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full text-button font-medium bg-[#00694A] hover:bg-[#008562] text-white"
      >
        Login
      </Button>

      {/* Route Switch */}
      <div className="text-center mt-6 text-paragraph font-medium">
        Don’t have an account?
        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="text-[#00694A] ml-1 hover:underline font-semibold cursor-pointer"
        >
          Signup now
        </button>
      </div>
    </form>
  );
}

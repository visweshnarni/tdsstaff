'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import ConditionalFields from './ConditionalFields';


const baseSchema = z.object({
  registrationCategory: z.string().min(1, 'Registration category is required'),
  fullName: z.string().regex(/^[a-zA-Z ]+$/, 'Only letters allowed'),
  gender: z.string().min(1),
  fatherName: z.string().regex(/^[a-zA-Z ]+$/, 'Only letters allowed'),
  dob: z.string().min(1),
  nationality: z.string().min(1),
  email: z.string().email(),
  mobile: z.string().regex(/^\d{10}$/, 'Enter 10 digit mobile number'),
  place: z.string().min(1),
  address: z.string().min(1),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format'),
  aadhaar: z.string().regex(/^\d{12}$/, 'Aadhaar must be 12 digits'),
  panFile: z.any(),
  aadhaarFile: z.any(),
  signatureFile: z.any(),
  registrationType: z.string().min(1)
});

export default function ApplicationForm() {
  const [category, setCategory] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof baseSchema>>({ resolver: zodResolver(baseSchema) });

  const onSubmit = (data: z.infer<typeof baseSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Registration Category <span className="text-red-500">*</span></label>
          <select
            {...register('registrationCategory')}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Provisional Registration">Provisional Registration</option>
            <option value="Bachelor of Dental Surgery (BDS) from Telangana">Bachelor of Dental Surgery (BDS) from Telangana</option>
            <option value="Transfer BDS (BDS registrant - from other state dental councils in India)">Transfer BDS (BDS registrant - from other state dental councils in India)</option>
            <option value="Transfer BDS + New MDS">Transfer BDS + New MDS</option>
            <option value="Transfer MDS (MDS registrant - from other state dental councils in India)">Transfer MDS (MDS registrant - from other state dental councils in India)</option>
            <option value="MDS Registration">MDS Registration</option>
            <option value="Non Indian Dentist Registration (Temporary)">Non Indian Dentist Registration (Temporary)</option>
          </select>
          {errors.registrationCategory && <p className="text-red-500 text-sm">{errors.registrationCategory.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
          <input {...register('fullName')} className="w-full border p-2 rounded" />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Gender <span className="text-red-500">*</span></label>
          <select {...register('gender')} className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Father&apos;s Name <span className="text-red-500">*</span></label>
          <input {...register('fatherName')} className="w-full border p-2 rounded" />
          {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName.message}</p>}
        </div>

        <div>
  <label className="block font-medium mb-1">Date of Birth <span className="text-red-500">*</span></label>
  <input type="date" {...register('dob')} className="w-full border p-2 rounded" />
  {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
</div>


        <div>
          <label className="block font-medium mb-1">Nationality <span className="text-red-500">*</span></label>
          <select {...register('nationality')} className="w-full border p-2 rounded">
            <option value="">Select</option>
            <option value="Natural born Indian Citizen">Natural born Indian Citizen</option>
            <option value="Naturalized Indian Citizen">Naturalized Indian Citizen</option>
            <option value="Subject of a Foreign Government">Subject of a Foreign Government</option>
          </select>
          {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
          <input {...register('email')} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Mobile Number <span className="text-red-500">*</span></label>
          <input {...register('mobile')} className="w-full border p-2 rounded" />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Place <span className="text-red-500">*</span></label>
          <input {...register('place')} className="w-full border p-2 rounded" />
          {errors.place && <p className="text-red-500 text-sm">{errors.place.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Residential Address <span className="text-red-500">*</span></label>
          <textarea {...register('address')} className="w-full border p-2 rounded" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">PAN Card No <span className="text-red-500">*</span></label>
          <input {...register('pan')} className="w-full border p-2 rounded" />
          {errors.pan && <p className="text-red-500 text-sm">{errors.pan.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Upload PAN Card (.pdf only) <span className="text-red-500">*</span></label>
          <input
            type="file"
            accept="application/pdf"
            {...register('panFile')}
            className="block w-full border rounded border-gray-300 p-[2px] text-sm text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-[#f9f9f9] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Aadhaar Card No <span className="text-red-500">*</span></label>
          <input {...register('aadhaar')} className="w-full border p-2 rounded" />
          {errors.aadhaar && <p className="text-red-500 text-sm">{errors.aadhaar.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Aadhaar (.pdf only) <span className="text-red-500">*</span></label>
          <input
            type="file"
            accept="application/pdf"
            {...register('aadhaarFile')}
            className="block w-full border rounded border-gray-300 p-[2px] text-sm text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-[#f9f9f9] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700"
          />
        </div>


        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Upload Signature <span className="text-red-500">*</span></label>
          <input
            type="file"
            accept="application/pdf"
            {...register('signatureFile')}
            className="block w-full border rounded border-gray-300 p-[2px] text-sm text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-[#f9f9f9] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700"
          />
        </div>


        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Registration Type <span className="text-red-500">*</span></label>
          <select {...register('registrationType')} className="w-full border p-2 rounded">
            <option value="">Select</option>
            <option value="Regular (By Post - Fee includes postal charges)">Regular (By Post - Fee includes postal charges)</option>
            <option value="Tatkal (By Hand)">Tatkal (By Hand)</option>
          </select>
          {errors.registrationType && <p className="text-red-500 text-sm">{errors.registrationType.message}</p>}
        </div>

        <ConditionalFields category={category} register={register} errors={errors} />

        <div className="md:col-span-2 text-center pt-4">
          <button type="submit" className="bg-[#00694A] hover:bg-[#004d36] text-white font-semibold py-2 px-6 rounded">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

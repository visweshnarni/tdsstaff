'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import ConditionalFields from './ConditionalFields';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const baseSchema = z.object({
  registrationCategory: z.string().min(1, 'Registration category is required'),
  fullName: z.string().regex(/^[a-zA-Z ]+$/, 'Only letters allowed'),
  gender: z.string().min(1),
  fatherName: z.string().regex(/^[a-zA-Z ]+$/, 'Only letters allowed'),
  dob: z.date({ required_error: 'Date of birth is required' }),
  nationality: z.string().min(1),
  email: z.string().email(),
  mobile: z
  .string()
  .regex(/^(\+?\d{1,4})?\d{10}$/, 'Enter a valid mobile number (e.g. +919876543210 or 9876543210)'),
  place: z.string().min(1),
  address: z.string().min(1),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format'),
  aadhaar: z.string().regex(/^[0-9]{12}$/, 'Aadhaar must be 12 digits'),
  panFile: z.any(),
  aadhaarFile: z.any(),
  signatureFile: z.any(),
  registrationType: z.string().min(1),
  declaration: z.literal(true, { errorMap: () => ({ message: 'You must accept the declaration.' }) }),
});

export default function ApplicationForm() {
  const [category, setCategory] = useState('');
  const methods = useForm({ resolver: zodResolver(baseSchema) });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="bg-white p-6 rounded-lg shadow w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="registrationCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Registration Category <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setCategory(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full border p-2 rounded-md text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Provisional Registration">Provisional Registration</SelectItem>
                    <SelectItem value="Bachelor of Dental Surgery (BDS) from Telangana">
                      Bachelor of Dental Surgery (BDS) from Telangana
                    </SelectItem>
                    <SelectItem value="Transfer BDS (BDS registrant - from other state dental councils in India)">
                      Transfer BDS (BDS registrant - from other state dental councils in India)
                    </SelectItem>
                    <SelectItem value="Transfer BDS + New MDS">Transfer BDS + New MDS</SelectItem>
                    <SelectItem value="Transfer MDS (MDS registrant - from other state dental councils in India)">
                      Transfer MDS (MDS registrant - from other state dental councils in India)
                    </SelectItem>
                    <SelectItem value="MDS Registration">MDS Registration</SelectItem>
                    <SelectItem value="Non Indian Dentist Registration (Temporary)">
                      Non Indian Dentist Registration (Temporary)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="fullName"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input {...field} placeholder='Enter full name'/></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="gender"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender <span className="text-red-500">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border p-2 rounded-md text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="fatherName"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father's Name <span className="text-red-500">*</span></FormLabel>
                <FormControl><Input {...field} placeholder='Enter father name'/></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="dob"
            control={control}
            render={({ field }) => {
              const dateValue = field.value ? new Date(field.value) : undefined;
              return (
                <FormItem>
                  <FormLabel>Date of Birth <span className="text-red-500">*</span></FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className={cn("w-full justify-between font-normal", !field.value && "text-muted-foreground")}> 
                          {dateValue ? format(dateValue, "PPP") : "Select date"}
                          <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateValue}
                        captionLayout="dropdown"
                        onSelect={(selected) => {
                          if (selected) {
                            field.onChange(selected.toISOString().split("T")[0]);
                          }
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
              control={control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full border p-2 rounded-md text-sm">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Natural born Indian Citizen">Natural born Indian Citizen</SelectItem>
                      <SelectItem value="Natural born British Subject">Natural born British Subject</SelectItem>
                      <SelectItem value="British Subject if Indian Domicile">British Subject if Indian Domicile</SelectItem>
                      <SelectItem value="Naturalized Indian Citizen">Naturalized Indian Citizen</SelectItem>
                      <SelectItem value="Subject of a Foreign Government">Subject of a Foreign Government</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder='Enter email address'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
          />

          <FormField
            control={control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Mobile Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter mobile number"
                    inputMode="tel"
                    pattern="[+0-9]*"
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^+\d]/g, ''); // allow digits and '+'
                      field.onChange(val);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          <FormField
            control={control}
            name="place"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter place'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Residential Address <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder='Enter residential address'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
          />
          
          <FormField
            control={control}
            name="pan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PAN Card No <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter PAN Card No'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="panFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Upload PAN Card (.pdf only) <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className="block w-full text-sm text-gray-900 border border-input rounded-md bg-white file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-0 file:rounded-l-md file:px-4 file:py-2 file:cursor-pointer"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={control}
            name="aadhaar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aadhaar Card No <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter Aadhaar Card No'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="aadhaarFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Upload Aadhaar (.pdf only) <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className="block w-full text-sm text-gray-900 border border-input rounded-md bg-white file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-0 file:rounded-l-md file:px-4 file:py-2 file:cursor-pointer"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


        <FormField
          control={control}
          name="signatureFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Upload Signature (.pdf only) <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative w-full">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="block w-full text-sm text-gray-900 border border-input rounded-md bg-white file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-0 file:rounded-l-md file:px-4 file:py-2 file:cursor-pointer"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        {category && (
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ConditionalFields category={category} register={register} errors={errors} />
            </div>
          </div>
        )}


        <FormField
          name="declaration"
          control={control}
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <div className="flex items-baseline space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-[2px]" // Optional fine-tune to match the text line
                  />
                </FormControl>
                <FormLabel className="text-sm text-gray-800 leading-relaxed">
                  <strong>DECLARATION BY THE APPLICANT:</strong> I Dr. herewith declare that I am not registered with any other State Dental Council.
                  <br />
                  I hereby solemnly declare that I will abide by the "Code of Ethics - Registration for Dentists" prescribed by the Dental Council of India.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />



          <div className="md:col-span-2 text-center pt-4">
            <Button type="submit" className="bg-[#00694A] hover:bg-[#004d36] text-white font-semibold py-2 px-6 rounded">
              Save & Continue
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

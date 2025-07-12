'use client';

import { useForm } from 'react-hook-form';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DentistRecord } from '@/app/types/dentist/totaldentist/dentistform';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: DentistRecord) => void;
}

export default function AddDentistForm({ open, onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DentistRecord>({
    defaultValues: {
      dentistNumber: '',
      name: '',
      email: '',
      mobile: '',
      password: '',
      date: '',
    },
  });

  const submitHandler = (data: DentistRecord) => {
    onSubmit(data);
    onClose();     // close drawer
    reset();       // then reset the form
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[50vw] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-francois-one text-[#00694A] text-center mt-8">
            Add Dentist
          </SheetTitle>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 gap-6 px-6 pt-6 pb-24"
        >
          <div>
            <Label className="block mb-2">Membership Number *</Label>
            <Input {...register('dentistNumber', { required: true })} />
            {errors.dentistNumber && <p className="text-sm text-red-500">Required field</p>}
          </div>

          <div>
            <Label className="block mb-2">Full Name *</Label>
            <Input {...register('name', { required: true })} />
            {errors.name && <p className="text-sm text-red-500">Required field</p>}
          </div>

          <div>
            <Label className="block mb-2">Email *</Label>
            <Input type="email" {...register('email', { required: true })} />
            {errors.email && <p className="text-sm text-red-500">Required field</p>}
          </div>

          <div>
            <Label className="block mb-2">Mobile Number *</Label>
            <Input {...register('mobile', { required: true })} />
            {errors.mobile && <p className="text-sm text-red-500">Required field</p>}
          </div>

          <div>
            <Label className="block mb-2">Password *</Label>
            <Input type="password" {...register('password', { required: true })} />
            {errors.password && <p className="text-sm text-red-500">Required field</p>}
          </div>

          <div>
            <Label className="block mb-2">Date of Registration *</Label>
            <Input type="date" {...register('date', { required: true })} />
            {errors.date && <p className="text-sm text-red-500">Required field</p>}
          </div>

          {/* Footer Buttons */}
          <div className="fixed bottom-0 w-full sm:max-w-[50vw] bg-white border-t border-[#004d36]/20 p-6 flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onClose();
                reset();
              }}
              className="text-[#6b0000] border-[#6b0000] hover:bg-[#6b0000] hover:text-white"
            >
              Close
            </Button>
            <Button type="submit" className="bg-[#00694A] hover:bg-[#004d36] text-white">
              Submit
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

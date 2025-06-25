'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import BasicDetails from './BasicDetails';
import ConditionalFields from './ConditionalFields';
import FormReview from './FormReview';
import Payment from './Payment';
import FormStepper from './FormStepper';

import type { Step1FormValues } from './BasicDetails';
import type { Step2FormValues } from './ConditionalFields';
import { Button } from '@/components/ui/button';

type FormData = Step1FormValues & Partial<Step2FormValues>;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const methods = useForm();

  const goNext = (data?: Partial<FormData>) => {
    if (data) {
      setFormData((prev) => ({ ...prev, ...data }));
    }
    setStep((prev) => prev + 1);
  };

  const goBack = () => setStep((prev) => prev - 1);

  const handlePaymentSubmit = () => {
    console.log('✅ Final submission payload:', formData);
    setStep((prev) => prev + 1);
  };

  const handleFileChange = (field: string, file: File) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleStep1 = (data: Step1FormValues) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStep2 = (data: Partial<Step2FormValues>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const steps = [
    { label: 'Fill Basic Details' },
    { label: 'Upload Details' },
    { label: 'Review & Confirm' },
    { label: 'Confirm & Pay' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <FormStepper currentStep={step} steps={steps} />

      {step === 1 && (
        <BasicDetails
          onNext={handleStep1}
          defaultValues={formData as Step1FormValues}
          onFileChange={handleFileChange}
        />
      )}

      {step === 2 && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleStep2)}>
            <ConditionalFields
              onNext={handleStep2}
              onBack={goBack}
              registrationCategory={formData.registrationCategory ?? ''}
              onFileChange={handleFileChange}
            />
            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                onClick={goBack}
                className="bg-[#8B0000] hover:bg-[#6b0000] text-white font-semibold py-2 px-6 rounded shadow-md transition-colors"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-[#00694A] hover:bg-[#004d36] text-white font-semibold py-2 px-6 rounded shadow-md transition-colors"
              >
                Save & Continue
              </Button>
            </div>
          </form>
        </FormProvider>
      )}

      {step === 3 && (
        <FormReview
          data={formData}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 4 && (
        <FormProvider {...methods}>
          <Payment
            onBack={goBack}
            onSubmit={handlePaymentSubmit}
          />
        </FormProvider>
      )}
    </div>
  );
}

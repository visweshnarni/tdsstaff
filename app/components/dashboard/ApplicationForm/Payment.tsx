'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useFormContext } from 'react-hook-form'

interface Step4PaymentProps {
  onBack: () => void
  onSubmit: () => void
}

const Step4Payment: React.FC<Step4PaymentProps> = ({ onBack, onSubmit }) => {
  const { getValues } = useFormContext()

  const applicantName = getValues('fullName') || 'Applicant'

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 4: Payment</h2>

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-700 text-lg mb-4">
            Dear <span className="font-medium">{applicantName}</span>,
          </p>
          <p className="text-gray-600 mb-2">
            You are about to proceed with the registration fee payment. Please confirm your details in the previous step before continuing.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Amount:</strong> ₹2,000.00
          </p>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={onSubmit}>
            Pay Now
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default Step4Payment

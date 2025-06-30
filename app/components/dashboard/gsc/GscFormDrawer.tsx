"use client";

import { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { gscFormSchema, GscFormData } from "@/lib/gscFormSchema";
import { GscRecord } from "@/app/types/gsc";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: GscFormData) => void;
  defaultValues?: Partial<GscRecord>;
}

export default function GscFormDrawer({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GscFormData>({
    resolver: zodResolver(gscFormSchema),
    defaultValues: (defaultValues as Partial<GscFormData>) || {},
  });

  useEffect(() => {
    reset(defaultValues || {});
  }, [defaultValues, reset]);

  const submitHandler = (data: GscFormData) => {
    const extended: GscRecord = {
      ...(defaultValues || {}),
      ...data,
      post_address: data.post_address ?? "",
      status: defaultValues?.status || "Pending",
      applicationNo: defaultValues?.applicationNo || `GSC-${Date.now()}`,
      applicationDate:
        defaultValues?.applicationDate || new Date().toLocaleDateString(),
    };

    // onSubmit(extended);
    onClose();
  };
  

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[50vw] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-francois-one text-[#00694A] text-center mt-8">
            {defaultValues ? "Edit GSC Application" : "Apply for New GSC"}
          </SheetTitle>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-6 pb-10"
        >
          {/* Helper Component */}
          {[
            {
              name: "tdc_reg_certificate",
              label: "Current year’s TDC Registration certificate",
            },
            {
              name: "testimonial_dental1",
              label: "Testimonial of Dentist 1",
            },
            {
              name: "testimonial_dental2",
              label: "Testimonial of Dentist 2",
            },
            {
              name: "gsc_aadhaar_upload",
              label: "Aadhaar Photocopy",
            },
            {
              name: "tdc_reg_dental1",
              label: "Valid TDC Registration certificate of Dentist 1",
            },
            {
              name: "tdc_reg_dental2",
              label: "Valid TDC Registration certificate of Dentist 2",
            },
          ].map((field) => (
            <div key={field.name}>
              <Label className="block mb-2">
                {field.label} <span className="text-red-600">*</span>
              </Label>
              <Input
                type="file"
                accept="application/pdf"
                className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
                {...register(field.name as keyof GscFormData)}
              />
              {errors[field.name as keyof GscFormData] && (
                <p className="text-sm text-red-600 mt-1">
                  {errors[field.name as keyof GscFormData]?.message as string}
                </p>
              )}
            </div>
          ))}

          {/* Postal Address */}
          <div className="md:col-span-2">
            <Label className="block mb-2">
              Postal Address with Pincode{" "}
              <span className="text-red-600">*</span>
            </Label>
            <Textarea
              placeholder="Enter full postal address"
              className="border border-gray-300 rounded-md"
              {...register("post_address")}
            />
            {errors.post_address && (
              <p className="text-sm text-red-600 mt-1">
                {errors.post_address.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button
              type="submit"
              className="w-full sm:w-40 bg-[#00694A] hover:bg-[#004d36] text-white font-semibold px-6 py-2 rounded shadow-md"
            >
              {defaultValues ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

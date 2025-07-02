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
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nocFormSchema, NocFormData } from "@/lib/nocFormSchema";
import { NocRecord } from "@/app/types/noc";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: NocFormData) => void;
  defaultValues?: Partial<NocRecord>;
}

export default function NocFormDrawer({
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
  } = useForm<NocFormData>({
    resolver: zodResolver(nocFormSchema),
    defaultValues: (defaultValues as Partial<NocFormData>) || {},
  });

  useEffect(() => {
    reset(defaultValues || {});
  }, [defaultValues, reset]);

  const submitHandler = (data: NocFormData) => {
    const extended: NocRecord = {
      ...(defaultValues || {}),
      ...data,
      post_address: data.post_address ?? "",
      status: defaultValues?.status || "Pending",
      applicationNo: defaultValues?.applicationNo || `NOC-${Date.now()}`,
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
            {defaultValues
              ? "Edit No Objection Certificate Application"
              : "Apply New No Objection Certificate"}
          </SheetTitle>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-6 pb-10"
        >
          {/* Helper Component */}
          {[
            {
              name: "dental_council_name",
              label: "Enter Transferee State Dental Council Name",
              type: "text",
            },
            {
              name: "current_tdc_reg_certificate",
              label: "Current year’s TDC Registration certificate",
              type: "file",
            },
            {
              name: "aadhaar_upload",
              label: "Aadhaar photocopy",
              type: "file",
            },
            {
              name: "post_address",
              label: "Postal Address with Pincode",
              type: "textarea",
            },
          ].map((field) => (
            <div key={field.name}>
              <Label className="block mb-2">
                {field.label} <span className="text-red-600">*</span>
              </Label>

              {field.type === "text" ? (
                <Input
                  type="text"
                  placeholder={field.label}
                  {...register(field.name as keyof NocFormData)}
                />
              ) : field.type === "textarea" ? (
                <Textarea
                  placeholder={field.label}
                  rows={4}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00694A] focus:border-transparent resize-none"
                  {...register(field.name as keyof NocFormData)}
                />
              ) : (
                <Input
                  type="file"
                  accept="application/pdf"
                  className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
                  {...register(field.name as keyof NocFormData)}
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          {/* Sticky Bottom Action Bar */}
          <div className="fixed bottom-0 w-full sm:max-w-[50vw] bg-white border-t border-[#004d36]/20 p-10 py-4 flex justify-between items-center">
            <Button
              variant="outline"
              type="button"
              onClick={onClose}
              className="text-[#6b0000] border-[#6b0000] hover:bg-[#6b0000] hover:text-white cursor-pointer px-10"
            >
              Close
            </Button>
            <Button
              type="submit"
              form="noc-form"
              className="bg-[#00694A] hover:bg-[#004d36] text-white cursor-pointer"
              onClick={handleSubmit(submitHandler)}
            >
              {defaultValues ? "Update/Re-Submit" : "Submit/Pay"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

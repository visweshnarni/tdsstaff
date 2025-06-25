'use client';

import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getConditionalSchema } from "@/lib/conditionalSchemas";

// ✅ Inferred type from the selected schema
export type Step2FormValues = ReturnType<typeof getConditionalSchema>['_type'];

interface ConditionalFieldsProps {
  onNext: (data: Partial<Step2FormValues>) => void;
  onBack: () => void;
  registrationCategory: string;
  onFileChange?: (name: string, file: File) => void; // <-- Add this line
}


const ConditionalFields: React.FC<ConditionalFieldsProps> = ({
  // onNext,
  // onBack,
  registrationCategory,
  onFileChange,
}) => {
  const { register } = useFormContext();

  const textField = (name: string, label: string, placeholder?: string) => (
    <FormField
      key={name}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>
            {label} <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...register(name)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const textareaField = (name: string, label: string, placeholder?: string) => (
    <FormField
      key={name}
      name={name}
      render={() => (
        <FormItem className="md:col-span-2">
          <FormLabel>
            {label} <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...register(name)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const pdfField = (name: string, label: string) => (
    <FormField
      key={name}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                field.onChange(file);
                if (file && onFileChange) onFileChange(name, file);
              }}
              className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
  

  const fields: Record<string, React.ReactElement[]> = {
    "Provisional Registration": [
    pdfField("pr_bds_upload", "Provisional BDS Certificate (PR)"),
    pdfField("pr_bonafide_upload", "Upload College Bonafide Certificate (PR)"),
    pdfField("ssc_memo", "SSC Marks Memo"),
    pdfField("custodian_clg", "College Custodian"),
  ],

  "Bachelor of Dental Surgery (BDS) from Telangana": [
    textField("professional_address", "Professional Address (for Clinicians)"),
    textareaField("qualification_description", "Description of Qualification/s"),
    textField("bds_university_address", "Name & address of the University (BDS)"),
    textField("bds_qualification_year", "Month & year of attaining the Qualification (BDS)", "MM/YYYY"),
    textField("bds_clg_address", "Name & Address of College/Institution (BDS)"),
    pdfField("bds_degree_upload", "Degree Certificate/s (BDS)"),
    pdfField("study_upload", "Study/Conduct/Attempt Certificate"),
    pdfField("intern_upload", "Internship Certificate"),
    pdfField("pr_certificate_upload", "TDC Provisional Registration Certificate"),
    pdfField("bds_affidavit_upload", "Affidavit"),
    pdfField("ssc_memo", "SSC Marks Memo"),
    pdfField("custodian_clg", "College Custodian"),
  ],

  "Transfer BDS (BDS registrant - from other state dental councils in India)": [
    // Same as BDS from Telangana
    textField("professional_address", "Professional Address (for Clinicians)"),
    textareaField("qualification_description", "Description of Qualification/s"),
    textField("bds_university_address", "Name & address of the University (BDS)"),
    textField("bds_qualification_year", "Month & year of attaining the Qualification (BDS)", "MM/YYYY"),
    textField("bds_clg_address", "Name & Address of College/Institution (BDS)"),
    pdfField("bds_degree_upload", "Degree Certificate/s (BDS)"),
    pdfField("study_upload", "Study/Conduct/Attempt Certificate"),
    pdfField("intern_upload", "Internship Certificate"),
    pdfField("pr_certificate_upload", "TDC Provisional Registration Certificate"),
    pdfField("bds_affidavit_upload", "Affidavit"),
    pdfField("ssc_memo", "SSC Marks Memo"),
    pdfField("custodian_clg", "College Custodian"),
  ],

  "Transfer BDS + New MDS": [
    // All BDS fields
    textField("professional_address", "Professional Address (for Clinicians)"),
    textareaField("qualification_description", "Description of Qualification/s"),
    textField("bds_university_address", "Name & address of the University (BDS)"),
    textField("bds_qualification_year", "Month & year of attaining the Qualification (BDS)", "MM/YYYY"),
    textField("bds_clg_address", "Name & Address of College/Institution (BDS)"),
    pdfField("bds_degree_upload", "Degree Certificate/s (BDS)"),
    pdfField("study_upload", "Study/Conduct/Attempt Certificate"),
    pdfField("intern_upload", "Internship Certificate"),
    pdfField("pr_certificate_upload", "TDC Provisional Registration Certificate"),
    pdfField("bds_affidavit_upload", "Affidavit"),
    pdfField("ssc_memo", "SSC Marks Memo"),
    pdfField("custodian_clg", "College Custodian"),

    // MDS fields
    textField("mds_university_address", "Name & address of the University (MDS)"),
    textField("mds_qualification_year", "Month & year of attaining the Qualification (MDS)", "MM/YYYY"),
    textField("mds_clg_address", "Name & Address of College/Institution (MDS)"),
    pdfField("mds_degree_upload", "Degree Certificate/s (MDS)"),
    pdfField("mds_marks_upload", "College Bonafide/Marks Memo (MDS)"),
    pdfField("tdc_reg_upload", "TDC Registration Certificate"),
    pdfField("noc_dci_upload", "NOC of DCI"),
    pdfField("noc_state_upload", "NOC from Transferor State Dental Council"),
    pdfField("mds_affidavit_upload", "MDS Affidavit"),
  ],

  "Transfer MDS (MDS registrant - from other state dental councils in India)": [
    textField("mds_university_address", "Name & address of the University (MDS)"),
    textField("mds_qualification_year", "Month & year of attaining the Qualification (MDS)", "MM/YYYY"),
    textField("mds_clg_address", "Name & Address of College/Institution (MDS)"),
    pdfField("mds_degree_upload", "Degree Certificate/s (MDS)"),
    pdfField("mds_marks_upload", "College Bonafide/Marks Memo (MDS)"),
    pdfField("noc_dci_upload", "NOC of DCI"),
    pdfField("noc_state_upload", "NOC from Transferor State Dental Council"),
    pdfField("ssc_memo", "SSC Marks Memo"),
    pdfField("custodian_clg", "College Custodian"),
  ],

  "Master of Dental Surgery (MDS) from Telangana": [
    textField("bds_university_address", "Name & address of the University (BDS)"),
    textField("bds_qualification_year", "Month & year of attaining the Qualification (BDS)", "MM/YYYY"),
    textField("bds_clg_address", "Name & Address of College/Institution from which applicant graduated (BDS)"),
    pdfField("bds_degree_upload", "Provisional/Permanent Degree Certificate/s (BDS)"),
    pdfField("study_upload", "Study or Conduct or Attempt certificate"),
    pdfField("intern_upload", "Internship Certificate"),

    textField("mds_university_address", "Name & address of the University (MDS)"),
    textField("mds_qualification_year", "Month & year of attaining the Qualification (MDS)", "MM/YYYY"),
    textField("mds_clg_address", "Name & Address of College/Institution from which applicant passed (MDS)"),
    pdfField("mds_degree_upload", "Provisional/Permanent Degree Certificate/s (MDS)"),
    pdfField("mds_marks_upload", "College Bonafide Certificate/ Marks memo (MDS)"),
    pdfField("custodian_clg", "College Custodian"),
    pdfField("tsdc_reg_upload", "Upload (Currently Holding) TSDC Registration Certificate"),
    pdfField("mds_affidavit_upload", "Upload MDS Affidavit"),
  ],

  "Non Indian Dentist Registration (Temporary)": [
    textareaField("qualification_description", "Description of Qualification/s for which registration is desired"),
    textField("foreign_university_address", "Name & address of the University (DCI recognized foreign degree)"),
    textField("foreign_qualification_year", "Month & year of attaining the Qualification (DCI recognized foreign degree)", "MM/YYYY"),
    textField("foreign_clg_address", "Name & Address of College/Institution from which applicant passed (DCI recognized foreign degree)"),
    pdfField("foreign_degree_upload", "Provisional/Permanent Degree Certificate/s (DCI recognized foreign degree)"),
    pdfField("foreign_bonafide_upload", "College Bonafide Certificate/s (DCI recognized foreign degree)"),
    pdfField("tdc_reg_upload", "Upload (Currently Holding) TDC Registration Certificate"),
  ]
  };

  return registrationCategory && fields[registrationCategory] ? (
    <div className="bg-white p-6 md:p-10 mt-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields[registrationCategory]}
      </div>
    </div>
  ) : null;
};

export default ConditionalFields;

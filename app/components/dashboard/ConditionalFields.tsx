'use client';

import React, { ReactElement } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';



interface ConditionalFieldsProps {
  category: string;
  register: UseFormRegister<any>; 
  errors: FieldErrors<any>; 
}

const Label = ({ text, required }: { text: string; required?: boolean }) => (
  <label className="block text-sm font-medium mb-1">
    {text} {required && <span className="text-red-500">*</span>}
  </label>
);

const FileInput = ({
  name,
  label,
  register,
  errors,
}: {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}) => (
  <div className="md:col-span-2">
    <Label text={label} required />
    <input
      type="file"
      accept="application/pdf"
      {...register(name)}
      className="block w-full border rounded border-gray-300 p-[2px] text-sm text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-[#f9f9f9] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700"
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</p>
    )}
  </div>
);

const TextInput = ({
  name,
  label,
  register,
  errors,
  placeholder,
}: {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
}) => (
  <div>
    <Label text={label} required />
    <input
      {...register(name)}
      className="w-full border p-2 rounded"
      placeholder={placeholder}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>
    )}
  </div>
);

export default function ConditionalFields({
  category,
  register,
  errors,
}: ConditionalFieldsProps) {
  const pdfField = (name: string, label: string) => (
    <FileInput
      key={name}
      name={name}
      label={label}
      register={register}
      errors={errors}
    />
  );

  const textField = (name: string, label: string, placeholder?: string) => (
    <TextInput
      key={name}
      name={name}
      label={label}
      register={register}
      errors={errors}
      placeholder={placeholder}
    />
  );

  const fields: Record<string, ReactElement[]> = {
    'Provisional Registration': [
      pdfField('pr_bds_upload', 'Provisional BDS Certificate (PR)'),
      pdfField('pr_bonafide_upload', 'Upload College Bonafide Certificate (PR)'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
    ],
    'Bachelor of Dental Surgery (BDS) from Telangana': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('intern_upload', 'Internship Certificate'),
      pdfField('pr_certificate_upload', 'TDC Provisional Registration Certificate'),
      pdfField('bds_affidavit_upload', 'Affidavit'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
    ],
    'Transfer BDS (BDS registrant - from other state dental councils in India)': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
    ],
    'Transfer BDS + New MDS': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('current_tdc_reg_certificate', 'Current TDC Registration Certificate'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('mds_affidavit', 'Upload MDS Affidavit'),
    ],
    'Transfer MDS (MDS registrant - from other state dental councils in India)': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
    ],
    'MDS Registration': [
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('current_tsddc_reg_certificate', 'Current TSDC Registration Certificate'),
      pdfField('mds_affidavit', 'Upload MDS Affidavit'),
    ],
    'Non Indian Dentist Registration (Temporary)': [
      textField('nid_qualification_des', 'Description of Qualification/s'),
      textField('dci_university_address', 'Name & address of the University (DCI Recognized)'),
      textField('dci_qualification_year', 'Month & year of attaining the Qualification (DCI)', 'MM/YYYY'),
      textField('dci_clg_address', 'Name & Address of College/Institution (DCI)'),
      pdfField('dci_degree_upload', 'Degree Certificate/s (DCI)'),
      pdfField('dci_bonafide_upload', 'College Bonafide Certificate/s (DCI)'),
      pdfField('current_tdc_reg_certificate', 'Current TDC Registration Certificate'),
    ],
  };

  return (
    <>
      {category && fields[category] ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {fields[category]}
        </div>
      ) : null}
    </>
  );
}
